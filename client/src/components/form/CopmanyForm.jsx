import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { companySchema } from '../../utils/valiadtion';
import { CloudUpload } from 'lucide-react';
import Button from '../Button';
import { useCreateCompanyMutation } from '../../features/copmaniesSlice';
import { toast } from 'react-toastify';

function CompanyForm({ mode, initialData = {} }) {
  const [logoPreview, setLogoPreview] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null);
  const [createCompany,{isLoading,isError,error}] = useCreateCompanyMutation()

  const {
    register,
    reset,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: initialData,
    resolver: zodResolver(companySchema),
  });

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogoPreview(URL.createObjectURL(file));
      setValue('logo', file);
      console.log(file);
      
    }
  };

  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverPreview(URL.createObjectURL(file));
      setValue('cover', file);
      console.log('cover', file);
    }
  };

  const handleReq = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('address', data.address);
    formData.append('description', data.description);
    formData.append('contactInfo[email]', data.contactInfo.email);
    formData.append('contactInfo[website]', data.contactInfo.website);
    formData.append('contactInfo[phone]', data.contactInfo.phone);
    if (data.logo) formData.append('logo', data.logo);
    if (data.cover) formData.append('cover', data.cover);

     const res =  await createCompany(formData);
     console.log(res);
     if(res.data?.status === "success"){
       toast.success(res.data?.message);
       reset();
     }
     else{
       toast.error('حدث خطأ أثناء الإضافة');
     }
    
   
    
  };
console.log(isError);

 
  return (
    <>

      <form onSubmit={handleSubmit(handleReq)} className="flex flex-col space-y-5">
      
        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-1/4 rounded-md h-60 flex flex-col items-center justify-center border-2 border-dashed relative p-2">
            {logoPreview ? (
              <img src={logoPreview} alt="Logo Preview" className="w-full h-full object-cover rounded-md" />
            ) : (
              <>
                <CloudUpload />
                <p className="text-gray-400 text-sm">رفع لوجو الشركة</p>
              </>
            )}
            <input
              type="file"
              className="absolute inset-0 opacity-0 cursor-pointer"
          
              onChange={handleLogoChange}
            />

          </div>

          <div className="w-full rounded-md h-60 flex flex-col items-center justify-center border-2 border-dashed relative p-2">
            {coverPreview ? (
              <img src={coverPreview} alt="Cover Preview" className="w-full h-full object-cover rounded-md" />
            ) : (
              <>
                <CloudUpload />
                <p className="text-gray-400 text-sm">رفع البنر</p>
              </>
            )}
            <input
              type="file"
              className="absolute inset-0 opacity-0 cursor-pointer"
            
              onChange={handleCoverChange}
            />
          </div>
        </div>

        <input
          className="p-3 border rounded-md outline-none"
          {...register('name')}
          placeholder="اسم الشركة"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}

        <input
          className="p-3 border rounded-md outline-none"
          {...register('contactInfo.email')}
          placeholder="البريد الالكتروني"
        />
        {errors.contactInfo?.email && (
          <p className="text-red-500 text-sm mt-1">{errors.contactInfo.email.message}</p>
        )}

        <input
          className="p-3 border rounded-md outline-none"
          {...register('contactInfo.phone')}
          placeholder="رقم الهاتف"
        />
        {errors.contactInfo?.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.contactInfo.phone.message}</p>
        )}
        <input
          className="p-3 border rounded-md outline-none"
          {...register('contactInfo.website')}
          placeholder="رابط الموقع"
        />
        {errors.contactInfo?.website && (
          <p className="text-red-500 text-sm mt-1">{errors.contactInfo.website.message}</p>
        )}

        <input
          className="p-3 border rounded-md outline-none"
          {...register('address')}
          placeholder="العنوان"
        />
        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}

        <textarea
          className="p-3 border rounded-md outline-none"
          {...register('description')}
          placeholder="الوصف"
        />
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}


        {isError && <div>
        <p className="text-red-500 text-sm"> {error?.data?.message}</p>
       </div>}
        <Button type="submit">
        {isLoading ? 'جاري التحميل...' : mode === 'edit' ? 'تعديل' : 'إضافة'} 
        
        </Button>
      </form>
    </>
  );
}

export default CompanyForm;
