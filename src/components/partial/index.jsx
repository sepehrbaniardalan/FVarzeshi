import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import toPersianNumber from '../ui/number'
import { useSelector } from 'react-redux'
import { footer1, footer2 } from '../../core/constants';
export default function Layout({ children }) {
  const items = useSelector(state => state.cart.items);

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <header className='w-full flex flex-row-reverse justify-center items-center gap-190  p-5 shadow-2xl h-30  '>
        <nav className='flex flex-row-reverse justify-center items-center gap-10 '>
          <svg width="74" height="78" viewBox="0 0 74 78" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 77.4688C15.2573 57.1632 29.091 48.331 65.3953 38.1562L71.5907 51.7123H63.6744L74 77.4688H59.8884L49.907 54.7624C34.1538 61.38 27.9318 66.0585 15.8326 77.4688H0Z" fill="#F0C400" />
            <path d="M15.0312 55.5L43.4216 0L58.9688 33.9167C40.117 39.4793 30.6227 44.4146 15.0312 55.5Z" fill="black" />
          </svg>
          <Link className='font-extralight text-[28px] text-[#000000CC]' to="/">صفحه اصلی</Link>
          <Link className='font-extralight text-[28px] text-[#000000CC]' to="/products">محصولات</Link>
          <Link className='font-extralight text-[28px] text-[#000000CC]' to="/sale">فروش ویژه</Link>
          <Link className='font-extralight text-[28px] text-[#000000CC]' to="/about">درباره ما</Link>

        </nav>
        <div className="flex justify-center items-center flex-row-reverse gap-10 ">
          <div className='flex gap-5 justify-center items-center border-2 border-[#F0C400]  rounded-[10px] p-3'>
            <Link className='text-[24px]' to="/login">ورود / ثبت نام</Link>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 26.25V23.75H23.75V6.25H15V3.75H23.75C24.4375 3.75 25.0263 3.995 25.5163 4.485C26.0063 4.975 26.2508 5.56333 26.25 6.25V23.75C26.25 24.4375 26.0054 25.0263 25.5163 25.5163C25.0271 26.0063 24.4383 26.2508 23.75 26.25H15ZM12.5 21.25L10.7812 19.4375L13.9688 16.25H3.75V13.75H13.9688L10.7812 10.5625L12.5 8.75L18.75 15L12.5 21.25Z" fill="black" />
            </svg>
          </div>
          <div className='relative flex flex-col bottom-2'>
            <p className='rounded-full  size-5 left-8 bottom-1 z-10  bg-[#F0C400] relative flex justify-center items-center'>{toPersianNumber(items.length)}</p>
            <Link to="/sabadKharid" className='absolute'>
              <svg className='absolute' width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.3333 33.3333C31.0208 33.3333 29.1667 35.1875 29.1667 37.5C29.1667 38.6051 29.6057 39.6649 30.3871 40.4463C31.1685 41.2277 32.2283 41.6667 33.3333 41.6667C34.4384 41.6667 35.4982 41.2277 36.2796 40.4463C37.061 39.6649 37.5 38.6051 37.5 37.5C37.5 36.3949 37.061 35.3351 36.2796 34.5537C35.4982 33.7723 34.4384 33.3333 33.3333 33.3333ZM0 0V4.16667H4.16667L11.6667 19.9792L8.83333 25.0833C8.52083 25.6667 8.33333 26.3542 8.33333 27.0833C8.33333 28.1884 8.77232 29.2482 9.55372 30.0296C10.3351 30.811 11.3949 31.25 12.5 31.25H37.5V27.0833H13.375C13.2369 27.0833 13.1044 27.0285 13.0067 26.9308C12.909 26.8331 12.8542 26.7006 12.8542 26.5625C12.8542 26.4583 12.875 26.375 12.9167 26.3125L14.7917 22.9167H30.3125C31.875 22.9167 33.25 22.0417 33.9583 20.7708L41.4167 7.29167C41.5625 6.95833 41.6667 6.60417 41.6667 6.25C41.6667 5.69747 41.4472 5.16756 41.0565 4.77686C40.6658 4.38616 40.1359 4.16667 39.5833 4.16667H8.77083L6.8125 0M12.5 33.3333C10.1875 33.3333 8.33333 35.1875 8.33333 37.5C8.33333 38.6051 8.77232 39.6649 9.55372 40.4463C10.3351 41.2277 11.3949 41.6667 12.5 41.6667C13.6051 41.6667 14.6649 41.2277 15.4463 40.4463C16.2277 39.6649 16.6667 38.6051 16.6667 37.5C16.6667 36.3949 16.2277 35.3351 15.4463 34.5537C14.6649 33.7723 13.6051 33.3333 12.5 33.3333Z" fill="black" fill-opacity="0.9" />
              </svg>
            </Link>
          </div>
        </div>
      </header >
      {children}
      <footer className='w-full bg-[#282828] flex flex-col gap-10 items-center'>
        <div className='flex w-8/10 justify-around items-center'>
          {footer1.map((item, index) => (
            <div className='flex flex-col mt-5 gap-3 items-center' key={index}>
              <img className='size-25' src={item.svg} alt="" />
              <p className='text-[#FFFFFF] text-[20px]'>{item.name}</p>
            </div>
          ))}
        </div>
        <hr className='bg-[#FFFFFF40] w-8/10 border-none h-[1px] ' />
        <div className='flex w-full justify-end gap-10 mr-15 '>
          <div className='flex justify-end items-end gap-90 w-8/10'>
            <div className='flex gap-60'>
              {footer2.map((item, index) => (
                <div key={index} className='flex gap-0 relative bottom-15 flex-col items-end'>
                  <h1 className='text-[32px] text-[#FFFFFF] mb-3'>{item.title}</h1>
                  <NavLink className="text-[26px] text-[#FFFFFF] font-extralight" to={"/about"}>{item.name1}</NavLink>
                  <p className="text-[26px] text-[#FFFFFF] font-extralight">{item.name2}</p>
                  <p className="text-[26px] text-[#FFFFFF] font-extralight">{item.name3}</p>
                </div>
              ))}
            </div>
            <div className='flex gap-10 flex-col'>
              <div className='flex gap-5 justify-end'>
                <p className='text-[20px] text-[#FFFFFF]'>09125854944</p>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M27.0061 20.4167L22.7728 19.9333C22.275 19.8749 21.7705 19.93 21.2971 20.0945C20.8236 20.2591 20.3937 20.5288 20.0395 20.8833L16.9728 23.95C12.2414 21.5437 8.39576 17.698 5.98946 12.9667L9.07279 9.88333C9.78946 9.16667 10.1395 8.16667 10.0228 7.15L9.53946 2.95C9.44497 2.13696 9.05478 1.38706 8.44319 0.843081C7.83159 0.2991 7.0413 -0.000970426 6.22279 2.35781e-06H3.33946C1.45612 2.35781e-06 -0.110544 1.56667 0.00612246 3.45C0.889456 17.6833 12.2728 29.05 26.4895 29.9333C28.3728 30.05 29.9395 28.4833 29.9395 26.6V23.7167C29.9561 22.0333 28.6895 20.6167 27.0061 20.4167Z" fill="white" />
                </svg>
              </div>
              <div className='flex gap-5 justify-end'>
                <p className='text-[20px] text-[#FFFFFF]'>021-3266641</p>
                <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M34.4181 19.9879C34.2261 18.6876 33.1961 17.6739 31.8701 17.3717C26.7161 16.1943 25.4241 13.3012 25.2061 10.0924C24.2921 9.92671 22.6661 9.74736 19.9061 9.74736C17.1461 9.74736 15.5201 9.92671 14.6061 10.0924C14.3881 13.3012 13.0961 16.1943 7.94206 17.3717C6.61606 17.6759 5.58606 18.6876 5.39406 19.9879L4.40006 26.698C4.05006 29.0608 5.83006 31.1915 8.30606 31.1915H31.5061C33.9801 31.1915 35.7621 29.0608 35.4121 26.698L34.4181 19.9879ZM19.9061 26.3023C17.1161 26.3023 14.8541 24.1189 14.8541 21.4286C14.8541 18.7383 17.1161 16.5549 19.9061 16.5549C22.6961 16.5549 24.9581 18.7383 24.9581 21.4286C24.9581 24.1189 22.6941 26.3023 19.9061 26.3023ZM39.8061 7.79789C39.7581 4.87368 32.1221 0.00194947 19.9061 0C7.68806 0.00194947 0.0520632 4.87368 0.00606317 7.79789C-0.0399368 10.7221 0.0480633 14.5275 5.07606 13.8939C10.9581 13.1511 10.5961 11.149 10.5961 8.2872C10.5961 6.29095 15.3801 5.80943 19.9061 5.80943C24.4321 5.80943 29.2141 6.29095 29.2161 8.2872C29.2161 11.149 28.8541 13.1511 34.7361 13.8939C39.7621 14.5275 39.8521 10.7221 39.8061 7.79789Z" fill="white" />
                </svg>
              </div>
              <div className='flex gap-5 justify-end'>
                <p className='text-[20px] text-[#FFFFFF]'>همدان,خیابان جمهوری,پاساژ سعیدیه,پلاک 290</p>
                <svg width="27" height="34" viewBox="0 0 27 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.3335 0C5.9818 0 0.000135741 5.98167 0.000135741 13.325C-0.0481976 24.0667 12.8268 32.9733 13.3335 33.3333C13.3335 33.3333 26.7151 24.0667 26.6668 13.3333C26.6668 5.98167 20.6851 0 13.3335 0ZM13.3335 20C9.65014 20 6.6668 17.0167 6.6668 13.3333C6.6668 9.65 9.65014 6.66667 13.3335 6.66667C17.0168 6.66667 20.0001 9.65 20.0001 13.3333C20.0001 17.0167 17.0168 20 13.3335 20Z" fill="white" />
                </svg>
              </div>
              <div className='flex gap-5 justify-end'>
                <p className='text-[20px] text-[#FFFFFF]'>از شنبه تا پنجشنبه از ساعت 10:00 تا 21:00</p>
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6667 0C25.8717 0 33.3333 7.46167 33.3333 16.6667C33.3333 25.8717 25.8717 33.3333 16.6667 33.3333C7.46167 33.3333 0 25.8717 0 16.6667C0 7.46167 7.46167 0 16.6667 0ZM16.6667 6.66667C16.2246 6.66667 15.8007 6.84226 15.4882 7.15482C15.1756 7.46738 15 7.89131 15 8.33333V16.6667C15.0001 17.1087 15.1758 17.5325 15.4883 17.845L20.4883 22.845C20.8027 23.1486 21.2237 23.3166 21.6607 23.3128C22.0977 23.309 22.5157 23.1337 22.8247 22.8247C23.1337 22.5157 23.309 22.0977 23.3128 21.6607C23.3166 21.2237 23.1486 20.8027 22.845 20.4883L18.3333 15.9767V8.33333C18.3333 7.89131 18.1577 7.46738 17.8452 7.15482C17.5326 6.84226 17.1087 6.66667 16.6667 6.66667Z" fill="white" />
                </svg>
              </div>
            </div>
          </div>
          <svg width="120" height="126" viewBox="0 0 120 126" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 125.625C24.7416 92.6971 47.1747 78.3746 106.047 61.875L116.093 83.8578H103.256L120 125.625H97.1163L80.9302 88.8039C55.3845 99.5351 45.2948 107.122 25.6744 125.625H0Z" fill="#F0C400" />
            <path d="M24.375 90L70.4135 0L95.625 55C65.0546 64.0204 49.6585 72.0237 24.375 90Z" fill="black" />
          </svg>
        </div>
        <div className='relative flex  w-full items-center gap-10 mt-10'>
          <hr className=' w-85/100 bg-[#FFFFFF40] border-none h-[1px]' />
          <p className='relative flex gap-2 text-[32px] text-[#FFFFFF] '><span className='text-yellow-400'>آکو اسپورت</span>درباره</p>
        </div>
        <div className='flex justify-around gap-30'>
          <div className='w-3/10 gap-3 flex'>
            <img className='size-30 w-32 rounded-[5px]' src="/namad1.png" alt="" />
            <img className='size-30 w-32 rounded-[5px]' src="/namad2.jpg" alt="" />
            <img className='size-30 w-32 rounded-[5px]' src="/namad3.jpg" alt="" />
          </div>
          <p className='text-[26px] text-[#FFFFFF] w-45/100 text-right'>فروشگاه آکو اسپرت افتخار عرضه حضوری و مجازی محصولات متنوع کوهنوردی طبیعت گردی و لوازم آفرود با قیمت بسیار مناسب کیفیت مطلوب و فراهم سازی بستری مطمئن جهت خرید آسان و با رضایت و اطمینان خاطر کامل مشتریان عزیز این مجموعه را در کارنامه خود دارد.</p>
        </div>
        <hr className='w-full bg-[#FFFFFF40] border-none h-[1px]' />
        <p className='text-[32px] text-[#FFFFFFB2] mb-10'>تمامی حقوق برای Ako Sport محفوظ است.</p>
      </footer>
    </div >
  )
}
