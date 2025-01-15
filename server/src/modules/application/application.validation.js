import Joi from "joi";

export const  createApplicationSchema = Joi.object({
    coverLetter:Joi.string().min(0).min(10),
    id:Joi.string().hex().length(24).required(),
}) ;

export const updateStatsSchema = Joi.object({
    applicationId:Joi.string().hex().length(24).required(),
    status:Joi.string().valid('pending', 'accepted', 'rejected').required()
})