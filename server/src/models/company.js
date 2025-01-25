import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Company name is required"],
        // unique: true
    },
    logo: {
        type: String,
        required: [true, "Company logo is required"]
    },
    cover:{
        type: String,
    },
    address: {
        type: String,
        required: [true, "Company address is required"],
    },
    description: {
        type: String,
        required: [true, "Company description is required"]
    },
    employeesId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    contactInfo :{
       email:{
         type: String,
         match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
       },
       website:{
         type: String,
       },
    },
},{
    timestamps: true,
})
companySchema.post(['find', 'findOne'], function (docs, next) {
    if (!docs) return next(); 

    const baseUrl = process.env.HOST; 

    const formatUrl = (url) => {
        if (!url) return url; 
        if (url.startsWith('http://') || url.startsWith('https://')) {
            return url; 
        }
        return `${baseUrl}/${url.replace(/\\/g, '/')}`; 
    };

    if (Array.isArray(docs)) {
        for (let i = 0; i < docs.length; i++) {
            if (docs[i].logo) docs[i].logo = formatUrl(docs[i].logo);
            if (docs[i].cover) docs[i].cover = formatUrl(docs[i].cover);
        }
    } else if (docs) {
        if (docs.logo) docs.logo = formatUrl(docs.logo);
        if (docs.cover) docs.cover = formatUrl(docs.cover);
    }

    next();
});
export const Company = mongoose.model("Company", companySchema)