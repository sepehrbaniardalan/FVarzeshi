import { Link, useParams } from "react-router-dom"
import { btn, products, same, specifications } from "../../../../core/constants"
import toPersianNumber from "../../../../components/ui/number"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../../../../redux/cartSlice"
import Reviews from "../comments"

function Detail() {
    const btn2handler = () => {
        if (sabad > 1) {
            setSabad(sabad - 1)
        } else {
            setSabad(1)
        }
    }
    const items = useSelector(state => state.cart.items);
    const [sabad, setSabad] = useState(1)
    const dispatch = useDispatch()
    const [activateTab, setActivateTab] = useState("description")
    const { id } = useParams()
    const product = products.find(item => item.id === Number(id))
    const t = {
        quantity: sabad,
        product_id: product.id,
        product: product
    }
    const btnAddhandler = () => {
        dispatch(addToCart(t)),
            console.log(items);
    }
    return (
        <div className="mt-20 w-9/10 flex flex-col items-center">
            <div className="w-full flex justify-center items-center gap-10">
                <div className="flex flex-col items-end gap-10">
                    <p className="font-semibold text-[40px] w-150 text-right">{product.title}</p>
                    <p className={`flex justify-center items-center gap-2 text-[70px] ${product.price ? "flex" : "hidden"}`}><span className="text-[#000000B2] text-[40px]">تومان</span>{product.price ? (toPersianNumber(product.price.toLocaleString())) : ""}</p>
                    <p className={`flex justify-center items-center gap-2 text-[70px] ${product.newprice ? "flex" : "hidden"}`}><span className="text-[#000000B2] text-[40px]">تومان</span>{product.newprice ? (toPersianNumber(product.newprice.toLocaleString())) : ""}</p>
                    <p className="text-[32px]">رنگ کفش: آبی مشکی</p>
                    <div className="flex gap-3 w-[200px]">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="25" cy="25" r="25" fill="#413F40" />
                        </svg>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="25" cy="25" r="25" fill="url(#paint0_linear_0_517)" />
                            <defs>
                                <linearGradient id="paint0_linear_0_517" x1="25" y1="24" x2="24.5" y2="24" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#2E2E30" />
                                    <stop offset="1" stop-color="#241F3F" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="25" cy="25" r="25" fill="url(#paint0_linear_0_518)" />
                            <defs>
                                <linearGradient id="paint0_linear_0_518" x1="25" y1="26" x2="24.5" y2="26" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#15141A" />
                                    <stop offset="1" stop-color="#AD1E29" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="25" cy="25" r="25" fill="url(#paint0_linear_0_516)" />
                            <defs>
                                <linearGradient id="paint0_linear_0_516" x1="25.5" y1="25" x2="25" y2="25" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#241D25" />
                                    <stop offset="1" stop-color="#19328C" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <p className="text-[32px]">سایز کفش: 40</p>
                    <div className="flex gap-5 flex-row-reverse">
                        <button className="border-1 border-[#282828] rounded-[10px] p-2 size-12 text-[#282828]">38</button>
                        <button className="border-1 border-[#282828] rounded-[10px] p-2 size-12 text-[#282828]">39</button>
                        <button className="border-1 border-[#282828] rounded-[10px] p-2 size-12 text-[#282828]">40</button>
                        <button className="border-1 border-[#282828] rounded-[10px] p-2 size-12 text-[#282828]">41</button>
                    </div>
                    <div className="flex gap-5">
                        <div className="bg-[#F0C400] rounded-[15px] p-3 w-100 gap-5 flex justify-center items-center text-[#FFFFFF] text-[36px]" >
                            <button onClick={btnAddhandler}>افزودن به سبد خرید</button>
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.6667 26.6667C24.8167 26.6667 23.3333 28.15 23.3333 30C23.3333 30.8841 23.6845 31.7319 24.3096 32.357C24.9348 32.9821 25.7826 33.3333 26.6667 33.3333C27.5507 33.3333 28.3986 32.9821 29.0237 32.357C29.6488 31.7319 30 30.8841 30 30C30 29.1159 29.6488 28.2681 29.0237 27.643C28.3986 27.0179 27.5507 26.6667 26.6667 26.6667ZM0 0V3.33333H3.33333L9.33333 15.9833L7.06667 20.0667C6.81667 20.5333 6.66667 21.0833 6.66667 21.6667C6.66667 22.5507 7.01786 23.3986 7.64298 24.0237C8.2681 24.6488 9.11594 25 10 25H30V21.6667H10.7C10.5895 21.6667 10.4835 21.6228 10.4054 21.5446C10.3272 21.4665 10.2833 21.3605 10.2833 21.25C10.2833 21.1667 10.3 21.1 10.3333 21.05L11.8333 18.3333H24.25C25.5 18.3333 26.6 17.6333 27.1667 16.6167L33.1333 5.83333C33.25 5.56667 33.3333 5.28333 33.3333 5C33.3333 4.55797 33.1577 4.13405 32.8452 3.82149C32.5326 3.50893 32.1087 3.33333 31.6667 3.33333H7.01667L5.45 0M10 26.6667C8.15 26.6667 6.66667 28.15 6.66667 30C6.66667 30.8841 7.01786 31.7319 7.64298 32.357C8.2681 32.9821 9.11594 33.3333 10 33.3333C10.8841 33.3333 11.7319 32.9821 12.357 32.357C12.9821 31.7319 13.3333 30.8841 13.3333 30C13.3333 29.1159 12.9821 28.2681 12.357 27.643C11.7319 27.0179 10.8841 26.6667 10 26.6667Z" fill="white" fill-opacity="0.9" />
                            </svg>
                        </div>
                        <div className="flex justify-center items-center border border-[#00000080] rounded-2xl w-40 ">
                            <button onClick={btn2handler} className="flex justify-center items-center text-center relative right-2 text-[#000000B2] text-[48px]">-</button>
                            <p className="w-20 flex relative  justify-center items-center border-r border-l h-full text-[48px]">{sabad}</p>
                            <button onClick={() => setSabad(sabad + 1)} className="flex justify-center items-center text-center relative left-2 text-[#000000B2] text-[48px]">+</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img className="size-150 shadow-2xl mb-5 w-170 rounded-2xl" src={product.image} alt="" />
                    <div className="flex gap-5">
                        <img className="size-35 rounded-2xl shadow-2xl" src="/color.jpg" alt="" />
                        <img className="size-35 rounded-2xl shadow-2xl" src="/color2.jpg" alt="" />
                        <img className="size-35 rounded-2xl shadow-2xl" src="/color3.jpg" alt="" />
                        <img className="size-35 rounded-2xl shadow-2xl" src="/color4.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="flex w-8/11 flex-col-reverse items-end gap-5  mt-30 ">
                <div className="mt-10 w-full">
                    {activateTab === "description" && (
                        <div className="flex flex-col items-end gap-5">
                            <p className="text-[32px] font-bold text-right flex gap-3"><span>Kingtex DENA</span>کفش زنانه کوهنوردی کینگتکس مدل دنا </p>
                            <p className="text-[28px] font-normal text-right">کفش کینگتکس مدل DENA مناسب برای پیاده روی طولانی مدت بر روی زمین با پوشش های مختلف است. رویه این کفش از چرم است که علاوه بر دوام بالا، ظاهر زیبایی را نیز به این کفش داده است. به منظور حفاظت انگشتان پا در جلوی این کفش از رابر استفاده شده است. پارچه KINGTEX پارچه ای با تکنولوژی جدید و پیشرفته است که ضمن دوام بالا و تنفس پذیر بودن قابلیت های ضدآب، ضدباد بودن را نیز دارد. این تکنولوژی عرق را به سمت بیرون هدایت کرده و پا را خشک و راحت نگه می دارد</p>
                        </div>)
                    }
                    {activateTab === "comments" && (
                        <Reviews />
                    )
                    }
                    {activateTab === "info" && (
                        <div className="w-full flex flex-col items-end gap-3">
                            {specifications.map((item, index) => (
                                <div className="w-full flex flex-col items-end" key={index}>
                                    <div className="flex justify-between items-end w-full mb-3 ">
                                        <p className="text-[22px] ml-170 w-60 text-right text-[#000000D9] font-normal ">{item.value}</p>
                                        <p className="text-[22px] text-right text-[#000000] font-medium">{item.name}</p>
                                    </div>
                                    <hr className="bg-[#00000033] border-none h-[1px] w-full" />
                                </div>
                            ))}
                        </div>
                    )
                    }

                </div>
                <div className="relative w-full flex flex-col items-end justify-center ">
                    <div className="flex gap-10 relative z-10 ">
                        {btn.map((item, index) => (
                            <button className={`${item.value === activateTab ? "text-[#F0C400] border-b-2 border-[#F0C400]" : "text-[#282828] border-none"} text-[32px] `} onClick={() => setActivateTab(item.value)} key={index}>{item.name}</button>
                        ))}
                    </div>
                    <div className=" bottom-0 left-0 w-full border-b border-[#D0D0D0]" />
                </div>
            </div>
            <div className="h-[1px] w-8/11 mt-30 bg-[repeating-linear-gradient(to_right,#B0B0B0_0px,#B0B0B0_15px,transparent_15px,transparent_30px)]"></div>            
            <div className="flex flex-col gap-10">
                <p className="mt-50 flex flex-col items-center text-[#000000] text-[40px]">محصولات مشابه</p>
                <div className="flex justify-center gap-10  ">
                    {same.map((item, index) => (
                        <div key={index} className='w-[219px]  shadow-[0_0_15px_rgba(0,0,0,0.12)] rounded-2xl border-none flex flex-col gap-3 justify-center items-center'>
                            <div className='relative right-[95px] w-3/10 flex flex-col justify-center items-center top-6'>
                                <img src={item.img} alt="" className='absolute ' />

                                <p className={`relative bottom-3 right-2 text-[20px]  ${item.img ? "flex" : "hidden"} -rotate-45 `} >25%</p>
                            </div>
                            <Link to={`/Detail/${item.id}`}>
                                <img src={item.image} alt="" className='size-50' />
                            </Link>
                            <p className='text-right w-full mb-10 mr-5 leading-5'>{item.title}</p>
                            <p className={`flex text-[24px] font-normal gap-1`} ><span>تومان</span>{toPersianNumber(item.price)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Detail