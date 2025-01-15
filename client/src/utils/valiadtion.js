import { z } from 'zod';

export const registerSchema = z.object({
    email: z.string().email().min(1, { message: 'البريد الالكتروني مطلوب' }),
    password: z.string().min(8, { message: 'كلمة المرور يجب أن تكون على الأقل 8 أحرف' }),
    name:z.string().min(4 , 'اقل عدد احرف مسموح 4 ').max(50,'اقصي عدد مسموح 50')
})

export const loginSchema = z.object({
    email: z.string().email().min(1, { message: 'البريد الالكتروني مطلوب' }),
    password: z.string().min(8, { message: 'كلمة المرور يجب أن تكون على الأقل 8 أحرف' }),
})