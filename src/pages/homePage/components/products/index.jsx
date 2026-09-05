import React, { useState } from 'react'
import { products, sort } from '../../../../core/constants'
import toPersianNumber from '../../../../components/ui/number'
import { Link } from 'react-router-dom'

export default function Products() {
  const [Value, setValue] = useState("normal")
  const [sortedProducts, setSortedProducts] = useState(products)
  const [currentPage, setCurrentPage] = useState(1)
  const productPerPage = 20
  const lastIndex = currentPage * productPerPage
  const firstIndex = lastIndex - productPerPage
  const currentProduct = sortedProducts.slice(firstIndex, lastIndex)
  const totalPage = Math.ceil(sortedProducts.length / productPerPage)
  const btnhandler = (item) => {
    setValue(item.value)

    if (item.value === "high") {
      setSortedProducts([...products].sort((a, b) => {
        const priceA = a.newprice ?? a.price
        const priceB = b.newprice ?? b.price
        return priceB - priceA
      }))
    }

    else if (item.value === "low") {
      setSortedProducts([...products].sort((a, b) => {
        const priceA = a.newprice ?? a.price
        const priceB = b.newprice ?? b.price
        return priceA - priceB
      }))
    }
    else {
      setSortedProducts(products)
    }
  }
  return (
    <div className="flex w-9/12 flex-col items-end justify-center mt-10   ">
      <p className='text-4xl font-medium mb-10'>جدیدترین محصولات </p>
      <div className='flex gap-5'>
        <div className='flex gap-5'>
          {sort.map((item, index) => (
            <button className={`text-[22px] font-normal ${Value === item.value ? "text-[#F0C400]" : "text-[#000000BF]"}`} onClick={() => btnhandler(item)} key={index}>{item.name}</button>
          ))}
        </div>
        <p className='flex justify-center items-center text-[22px] font-normal'><span>:</span>مرتب سازی</p>
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.6248 5.83334H4.37484C3.98806 5.83334 3.61713 5.98699 3.34364 6.26048C3.07015 6.53397 2.9165 6.9049 2.9165 7.29168V27.7083C2.9165 28.0951 3.07015 28.4661 3.34364 28.7395C3.61713 29.013 3.98806 29.1667 4.37484 29.1667H30.6248C31.0116 29.1667 31.3825 29.013 31.656 28.7395C31.9295 28.4661 32.0832 28.0951 32.0832 27.7083V7.29168C32.0832 6.9049 31.9295 6.53397 31.656 6.26048C31.3825 5.98699 31.0116 5.83334 30.6248 5.83334Z" stroke="black" stroke-width="2" />
          <path d="M17.4998 12.3958V22.6042M23.3332 17.5V22.6042M11.6665 16.0417V22.6042" stroke="black" stroke-width="2" stroke-linecap="round" />
        </svg>
      </div>
      <hr className='w-full bg-black h-[2px] mt-5' />
      <div className='flex flex-wrap gap-5 w-full justify-center mt-5'>
        {currentProduct.map((item, index) => (
          <div key={index} className='w-185/1000  shadow-[0_0_15px_rgba(0,0,0,0.12)] rounded-2xl border-none flex flex-col gap-3 justify-center items-center'>
            <div className='relative right-[95px] w-3/10 flex flex-col justify-center items-center top-6'>
              <img src={item.img}  alt="" className='absolute ' />

              <p className={`relative bottom-3 right-2 text-[20px]  ${item.img ? "flex" : "hidden"} -rotate-45 `} >25%</p>
            </div>
            <Link to={`/Detail/${item.id}`}>
              <img src={item.image} alt="" className='size-50' />
            </Link>
            <p className='text-right w-full mb-10 mr-2 leading-5'>{item.title}</p>
            <p className={` flex ${item.price ? "hidden" : "flex"} text-[24px] text-[#FFB800] gap-1 `}><span className={`${toPersianNumber(item.newprice) ? "flex" : "hidden"}`}>تومان</span>{toPersianNumber(item.newprice)}</p>
            <p className={` flex ${item.price ? "hidden" : "flex"} text-[16px] text-[#000000B2] line-through gap-1`}><span className={`${toPersianNumber(item.oldPrice) ? "flex" : "hidden"}`}>تومان</span>{toPersianNumber(item.oldPrice)}</p>
            <p className={`flex text-[24px] ${item.newprice || item.oldPrice ? "hidden" : "flex"} font-normal gap-1`} ><span className={`${(item.price) ? "flex" : "hidden"}`}>تومان</span>{toPersianNumber(item.price)}</p>
          </div>

        ))}
        <div className='flex gap-5 mt-10 mb-10 flex-row-reverse'>
          {Array.from({ length: totalPage }, (_, index) => (
            <button className={`rounded-2xl p-3 w-15 text-[20px] ${currentPage === index + 1 ? "bg-[#FFB800] border-none text-white" : "bg-white text-[#282828] border border-[#282828]"}`} onClick={() => setCurrentPage(index + 1)} key={index}>
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div >


  )
}
