import fs from 'fs/promises';
import { catchError, AppError } from "../../../utils/error.js"
import {Company} from "../../models/company.js";
import { Application } from '../../models/application.js';
import Job from "../../models/job.js";


// create new company
export const createNewCompany = catchError(async (req, res) => {

try{
    req.body.employeesId = req.user.id;

    
    if (!req.files.logo){
        return res.status(400).json({
            message :'شعار الشركة مطلوب'
        })
    }
    if (req.files) {
        if (req.files.logo ) {
            req.body.logo = req.files.logo[0].path ;
        }
        if (req.files.cover) {
            req.body.cover = req.files.cover[0].path ;
        }
    }

    await Company.create(req.body);
    res.status(201).json({
        status:"success",
        message: 'تم انشاء ملف الشركة بنجاح',
    });

}catch (e) {
    if (req.files) {
        if (req.files.logo && req.files.logo.length > 0) {
            fs.unlinkSync(req.files.logo[0].path);
        }
        if (req.files.cover && req.files.cover.length > 0) {
            fs.unlinkSync(req.files.cover[0].path);
        }
    }
throw  new AppError('حدث خطأ أثناء إنشاء ملف الشركة' , 500 )

}
});

// create update company
export const updateCompany = catchError(async (req, res) => {
    const { id } = req.params;
    const employeesId = req.user.id;

    const chickIsExist = await Company.findById(id);
    if (!chickIsExist || employeesId !== chickIsExist.employeesId.toString()) {
        return res.status(400).json({
            message: "لم يتم العثور على الشركة أو أنك لا تملك صلاحية التعديل",
        });
    }
    if (req.files) {
        if (req.files.logo) {
            req.body.logo = handleFileUpdate(chickIsExist.logo, req.files.logo[0]);
        }
        if (req.files.cover) {
            req.body.cover = handleFileUpdate(chickIsExist.cover, req.files.cover[0]);
        }
    }

    const update = await Company.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json({
        message: "تم تحديث ملف الشركة بنجاح",
        data: update,
    });
});

export const deleteCompany = catchError(async (req, res) => {
    const employeesId = req.user.id; 
    const id = req.params.id; 


    const company = await Company.findById(id);

  
    if (!company || employeesId !== company.employeesId.toString()) {
        return res.status(400).json({
            message: 'الشركة غير موجودة أو ليس لديك الصلاحية لحذفها',
        });
    }


    if (company.logo) {
        try {
            await fs.unlink(company.logo); 
        } catch (error) {
            
            throw new Error(
                `حدث خطأ أثناء حذف الملف الشعاري للشركة: ${company.logo}`,
                error
            )

        }
    }
    if (company.cover) {
        try {
            await fs.unlink(company.cover); 
        } catch (error) {
            
            throw new Error(
                `حدث خطأ أثناء حذف الملف الغلافي للشركة: ${company.cover}`,
                error
            )
        }
    }

   
    const jobs = await Job.find({ companyId: company._id });

    
    for (const job of jobs) {
        const applications = await Application.find({ jobId: job._id });

      
        for (const application of applications) {
            if (application.resume) {
                try {
                    await fs.unlink(application.resume); 
                } catch (error) {
                    throw new Error(
                        `حدث خطأ أثناء حذف الملف التعريفي للطلب: ${application.resume}`,
                        error
                    )
                  
                }
            }
        }


        await Application.deleteMany({ jobId: job._id });
    }

   
    await Job.deleteMany({ companyId: company._id });


    await Company.findByIdAndDelete(id);

    return res.json({
        status: "success",
        message: `تم حذف الشركة: ${company.name}`,
    });
});
// get all company
export const getAllCompany= catchError(async (req,res)=>{
    const company = await Company.find().select('-employeesId')
    res.json({
        data: company,
    })
})

// get company by id

export const getCompanyById= catchError(async (req,res)=>{
    const company = await Company.findById(req.params.id).select( '-employeesId')
    if (!company){
        return res.status(404).json({
            message:"لم يتم العثور علي الشركة"
        })
    }
    res.json({
        data: company,
    })
})

// get my company
export const getNyCompany= catchError(async (req,res)=>{
    const company = await Company.find({ employeesId: req.user.id });
    if (!company){
        return res.status(404).json({
            message:"لم يتم العثور علي الشركة"
        })
    }
    res.json({
        data: company,
    })
})



const handleFileUpdate = (currentPath, file) => {
    try {

        if (currentPath && fs.existsSync(currentPath)) {
            fs.unlinkSync(currentPath);
        }
        return file?.path || null;
    } catch (err) {
        throw new Error("خطأ أثناء تحديث الملف.");
    }
};