import React from 'react'
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <>
      <div className='flex  pl-30 pr-30  '>
        <div><img src="./sportLogin.png" alt="" className='w-3/5 mt-20' /></div>
        <div dir="rtl" className="w-full min-h-screen bg-white flex items-center justify-center p-">
          <div className="w-full max-w-md">
            <div className="flex items-center gap-2 mb-10 mt-">
              <span className="w-1 h-10 bg-amber-400 rounded-full"></span>
              <h1 className="text-2xl font-bold text-gray-900">ایجاد حساب کاربری</h1>
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="نام خانوادگی" className="w-full rounded-xl border border-gray-300 px-4 py-3.5 text-sm text-gray-700 placeholder-gray-400 text-right focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
                <input type="text" placeholder="نام" className="w-full rounded-xl border border-gray-300 px-4 py-3.5 text-sm text-gray-700 placeholder-gray-400 text-right focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
              </div>
              <input type="tel" placeholder="شماره موبایل" className="w-full rounded-xl border border-gray-300 px-4 py-3.5 text-sm text-gray-700 placeholder-gray-400 text-right focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"/>
              <div className="relative">
                <input type="password" placeholder="رمز عبور" className="w-full rounded-xl border border-gray-300 px-4 py-3.5 pl-4 pr-11 text-sm text-gray-700 placeholder-gray-400 text-right focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"/>
                <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                </span>
              </div>
              <div className="relative">
                <input type="password" placeholder="تایید رمز عبور" className="w-full rounded-xl border border-gray-300 px-4 py-3.5 pl-4 pr-11 text-sm text-gray-700 placeholder-gray-400 text-right focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"/>
                <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                </span>
              </div>
              <div className="flex items-center justify-end gap-2 pt-1">
                <a href="" className="text-sm text-amber-500 hover:underline">پذیرفتن حریم خصوصی</a>
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-amber-400 focus:ring-amber-400" />
              </div>
              <button type="submit" className="w-full bg-amber-400 hover:bg-amber-500 transition-colors text-white font-bold py-4 rounded-xl mt-2"> ثبت نام</button>
              <p className="text-center text-sm text-gray-500 pt-2">
                من قبلا ثبت نام کرده ام ؟
                <Link to="/login2" className="text-amber-500 font-semibold hover:underline">صفحه ورود</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
