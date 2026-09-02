import { Link } from "react-router-dom";
export default function Login2() {
  return (
    <div className="flex">
    <div><img src="./sportLogin.png" alt="" className='w-3/5 mt-20 ml-17'/></div>
    
    <div dir="rtl" className="min-h-screen w-full bg-white flex items-start justify-center pt-16 px-6 mt-25 mr-20">
      <div className="w-full max-w-sm">
        <div className="flex items-center gap-2 mb-10">
          <span className="w-1 h-9 bg-yellow-400 rounded-full" />
          <h1 className="text-2xl font-bold text-gray-900">ورود به حساب کاربری</h1>
        </div>
        <div className="mb-4 relative">
          <input placeholder="شماره موبایل" className="w-full rounded-xl border border-gray-200 px-4 py-4 pl-11 text-right text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-yellow-400 transition-colors"/>
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92Z" />
            </svg>
          </span>
        </div>
        <div className="mb-2 relative">
          <input type="password" placeholder="رمز عبور" className="w-full rounded-xl border border-gray-200 px-4 py-4 pl-11 pr-11 text-right text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-yellow-400 transition-colors"/>
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </span>
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
              <path d="M6.61 6.61C3.06 8.79 1 12 1 12s4 8 11 8a9.26 9.26 0 0 0 5.39-1.61" />
              <line x1="1" y1="1" x2="23" y2="23" />
            </svg>
          </span>
        </div>
        <div className="text-left mb-8">
          <span className="text-xs text-yellow-500 font-medium flex ">
            فراموشی رمز عبور
          </span>
        </div>
        <button  className="w-full rounded-xl bg-yellow-400 py-4 text-sm font-bold text-white shadow-[0_8px_20px_-6px_rgba(250,204,21,0.6)]"> ثبت نام</button>
        <p className="text-center text-xs text-gray-500 mt-6"> من هنوز ثبت نام نکرده ام ؟<Link to="/login" className="text-amber-500 font-semibold hover:underline">صفحه ثبت نام</Link></p>
      </div>
    </div>
    </div>
  );
}