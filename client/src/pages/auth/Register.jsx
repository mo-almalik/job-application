import React from "react";
import assets from "../../utils/assets";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex min-h-screen ">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 bg-white px-10 lg:px-20 py-12 flex flex-col justify-center">
        <h1 className="text-3xl font-semibold mb-4">انشئ حساب</h1>
        <p className="text-sm text-gray-600 mb-6">
         هل لديك حساب?{" "}
          <a href="#" className="text-primary font-medium">
           تسجيل دخول
          </a>
        </p>
        <div className="flex items-center mb-6 space-x-4 gap-5">
          <button className="flex-1 py-2 px-4 border border-gray-300 rounded-lg hover:border-primary transition text-center">
            باحث عن عمل
          </button>
          <button className="flex-1 py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary-600 transition text-center">
          أصحاب العمل
          </button>
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-2">الاسم </label>
            <input
              type="text"
              placeholder="الاسم "
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-2">البريد الالكتروني</label>
            <input
              type="email"
              placeholder="البريد الالكتروني"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-2">كلمة المرور</label>
            <input
              type="password"
              placeholder="كلمة المرور"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          <div className="mb-6 flex items-start">
            <input type="checkbox" className="mt-1 mr-2 ml-2" />
            <p className="text-sm text-gray-600 flex items-center gap-x-2">
               لقد قرأت وأوافق   على   

              <Link href="#" className="text-blue-400 font-medium ">
              شروط الخدمة
              </Link>
            </p>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-600 transition"
          >
            انشئ حساب
          </button>
        </form>

      </div>
      {/* Right Side */}
      <div className="hidden lg:flex lg:w-1/2 bg-cover bg-center bg-gray-100 items-center justify-center relative" style={{
        backgroundImage : `url(${assets.register})`,
        backgroundSize : 'cover',
        backgroundPosition : 'center',
        height : '100vh'
      }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h2 className="text-3xl font-semibold mb-4 w-[80%] leading-[60px] mx-auto">
          ابدأ رحلتك المهنية الآن <br /> انضم إلى آلاف الفرص المتاحة لتطوير مستقبلك! 
          </h2>

        </div>
      </div>
    </div>
  );
};

export default Register;
