import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAuth } from "../context/AuthContext";
import { useApplyJobMutation } from "../features/applicationSlice";
import { LoaderCircle, LucideCloudUpload } from "lucide-react";
import { toast } from "react-toastify";

const applySchema = z.object({
  coverLetter: z.string().min(5,'خطاب الترشيح مطلوب'),
  resume: z
    .instanceof(File, { message: "الرجاء رفع الـ cv " })  
    .refine(
      (file) =>
        file.type === "application/pdf" ||
        file.type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      {
        message: "Only PDF files are allowed",
      }
    ),
});

function Apply({ jobId }) {
  const { user } = useAuth();
  const [applyJob, {isLoading, isError, error }] = useApplyJobMutation();
  const [selectedFile, setSelectedFile] = useState(null);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(applySchema),
  });

  const onSubmit = async (data) => {
    try {
      

      const formData = new FormData();
      formData.append("coverLetter", data.coverLetter);
      formData.append("resume", data.resume);

      console.log("Form data:", data);
      const res = await applyJob({ jobId, formData });
      toast.success(res?.data?.message);
      reset();
      setSelectedFile(null);
    } catch (error) {
      toast.error("An error occurred while submitting the application");
    }
  };

  const handleCvChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setValue("resume", file);
  };

  return (
    <>
      {isError && (
        <div>
          <p className="text-red-500 text-sm">{error?.data?.message}</p>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="my-5">
        <div className="mb-4">
          <label
            htmlFor="resume"
            className="block text-sm font-medium text-gray-700"
          >
            ملف ال CV
          </label>
          <div
            className="border cursor-pointer border-dashed mt-2 p-4 rounded-md text-gray-500 flex flex-col items-center justify-center"
            onClick={() => document.getElementById("resumeInput").click()}
          >
            <LucideCloudUpload />
            <p className="text-[12px] text-gray-500 mt-1">
              يرجى تحميل ملف PDF فقط.
            </p>
            {selectedFile && (
              <p className="text-sm text-gray-700 mt-2">{selectedFile.name}</p>
            )}
            <input
              id="resumeInput"
              name="resume"
              type="file"
              accept=".pdf,.docx"
              onChange={handleCvChange}
              className="hidden"
              aria-hidden="true"
            />
          </div>
           
          {errors.resume && (
            <p className="text-red-500 text-sm mt-1">{errors.resume.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="coverLetter"
            className="block text-sm font-medium text-gray-700"
          >
            خطاب ترشيح
          </label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            {...register("coverLetter")}
            rows={10}
            className="block w-full px-3 mt-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 h-[200px]"
          />
          {errors.coverLetter && (
            <p className="text-red-500 text-sm mt-1">
              {errors.coverLetter.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-md"
          disabled={isLoading}
        >
          {isLoading ? <div className="flex items-center justify-center gap-x-3">
            <LoaderCircle className="animate-spin" />
            <p className="text-sm text-gray-100 mt-1">جاري التقديم</p>
          </div> : "تقديم"}
        </button>
      </form>
    </>
  );
}

export default Apply;
