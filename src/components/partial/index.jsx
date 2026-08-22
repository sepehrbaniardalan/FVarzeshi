import React from 'react'
import { Link } from 'react-router-dom'
export default function Layout({ children }) {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <header>
        <nav>
          <Link to="/">صفحه اصلی</Link>
          <Link to="/products">محصولات</Link>
          <Link to="/sale">فروش ویژه</Link>
          <Link to="/about">درباره ما</Link>
        </nav>
        <div className="left">
          <Link to="/login">ورود / ثبت نام</Link>
        </div>
      </header>
      {children}
    </div>
  )
}
