import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email().min(1, { message: "البريد الالكتروني مطلوب" }),
  password: z
    .string()
    .min(8, { message: "كلمة المرور يجب أن تكون على الأقل 8 أحرف" }),
  name: z.string().min(4, "اقل عدد احرف مسموح 4 ").max(50, "اقصي عدد مسموح 50"),
});

export const loginSchema = z.object({
  email: z.string().email().min(1, { message: "البريد الالكتروني مطلوب" }),
  password: z
    .string()
    .min(8, { message: "كلمة المرور يجب أن تكون على الأقل 8 أحرف" }),
});

export const companySchema = z.object({
  name: z.string().min(3, "اقل عدد احرف مسموح 3 ").max(50, "اقصي عدد مسموح 50"),
  address: z
    .string()
    .min(2, "اقل عدد احرف مسموح 2")
    .max(10, "اقصي عدد مسموح 100"),
  logo: z
    .any()
    .optional()
    .refine(
      (file) =>
        !file || (file instanceof File && file.type.startsWith("image/")),
      { message: "يجب أن يكون الملف المرفوع صورة" }
    ),
  cover: z
    .any()
    .optional()
    .refine(
      (file) =>
        !file || (file instanceof File && file.type.startsWith("image/")),
      { message: "يجب أن يكون الملف المرفوع صورة" }
    ),
  description: z
    .string()
    .min(10, "اقل عدد احرف مسموح 10")
    .max(500, "اقصي عدد مسموح 500"),
  contactInfo: z.object({
    email: z.string().email(),
    website: z.string().url(),
    phone: z
      .string()
      .length(10, { message: "يجب أن يتكون رقم الهاتف من 10 أرقام" })
      .regex(/^\d+$/, { message: "يجب أن يحتوي رقم الهاتف على أرقام فقط" }),
  }),
});
