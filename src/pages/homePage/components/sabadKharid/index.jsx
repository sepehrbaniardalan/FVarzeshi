import { useDispatch, useSelector } from "react-redux";
import toPersianNumber from "../../../../components/ui/number";
import { clearCart, decreaseQuantity, increaseQuantity, removeFromCart } from "../../../../redux/cartSlice";

export default function SabadKharid() {
    const dispatch = useDispatch()
    const removehandler = (item) => {
        dispatch(removeFromCart(item.id))
    }
    const decreas = (item) => {
        dispatch(decreaseQuantity(item.id))
    }
    const increas = (item) => {
        dispatch(increaseQuantity(item.id))
    }

    const items = useSelector(state => state.cart.items)
    const total = items.reduce(
        (sum, item) => item.price ? sum + item.price * item.quantity : sum + item.newprice * item.quantity, 0

    );
    const total2 = items.reduce(
        (sum, item) => item.price ? sum + item.price * item.quantity : sum + item.oldPrice * item.quantity, 0

    );
    const offer = items.reduce(
        (sum, item) => item.newprice && item.oldPrice ? sum + item.oldPrice * item.quantity - item.newprice * item.quantity : sum + 0, 0
    )


    return (
        <div className="w-full flex flex-col items-center justify-center pb-20 bg-gray-100">
            <div className="flex justify-center  relative w-9/11 mt-20 gap-10">
                <hr className="w-85/110  bg-[#000000CC] border-none h-[2px] " />
                <p className="relative w-60 bottom-5 text-[#F0C400] text-[32px] ">سبد خرید شما</p>
            </div>
            <div className="flex w-9/11 gap-12 justify-center">
                <div className="w-17/80 h-115 bg-white rounded-2xl gap-10 flex flex-col items-center p-5">
                    <div className="flex flex-col w-full gap-5 ">
                        <div className="flex justify-between">
                            <p className="flex gap-2 justify-center text-[#000000D9] text-[24px] items-center"> <span>تومان</span> {toPersianNumber(total2.toLocaleString())}</p>
                            <span className="text-[18px] text-[#282828CC]">قیمت کالا ها </span>
                        </div>
                        <div className="flex justify-between">
                            <p className="flex gap-2 justify-between text-[24px] text-[#F0C400] items-center"> <span>تومان</span> {toPersianNumber(offer.toLocaleString())}</p>
                            <span className="text-[18px] text-[#282828CC]">تخفیف کالا ها</span>
                        </div>
                    </div>
                    <div className="h-[1px] w-full bg-[repeating-linear-gradient(to_right,#B0B0B0_0px,#B0B0B0_15px,transparent_15px,transparent_30px)]"></div>
                    <div className="flex w-full justify-between items-center">
                        <p className="flex gap-2 justify-center text-[#000000D9] text-[24px] items-center"> <span>تومان</span> {toPersianNumber(total.toLocaleString())}</p>
                        <span className="text-[18px] text-[#282828CC]"> جمع سبد خرید </span>
                    </div>
                    <div className="flex gap-3 items-center">
                        <p className="text-[14px] font-light text-[#000000B2] text-right">هزینه‌ی ارسال در ادامه بر اساس آدرس، زمان و نحوه‌ی ارسال انتخابی شما‌ محاسبه و به این مبلغ اضافه خواهد شد.</p>
                        <svg className="size-15" width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.0755692 9.94313L2.88807 3.38063C2.96024 3.21195 3.08037 3.06819 3.23354 2.96719C3.3867 2.86619 3.56616 2.8124 3.74963 2.8125H6.56213V0.9375C6.56213 0.68886 6.6609 0.450403 6.83672 0.274588C7.01253 0.0987722 7.25099 0 7.49963 0H22.4996V1.875H8.43713V13.6463C8.86432 13.8943 9.23817 14.2245 9.53714 14.6177C9.83609 15.011 10.0542 15.4595 10.179 15.9375H16.0703C16.2984 15.0538 16.8411 14.2836 17.5965 13.7713C18.3519 13.259 19.2682 13.0399 20.1737 13.1549C21.0791 13.2699 21.9116 13.7112 22.5149 14.396C23.1183 15.0809 23.4512 15.9623 23.4512 16.875C23.4512 17.7877 23.1183 18.6691 22.5149 19.354C21.9116 20.0388 21.0791 20.4801 20.1737 20.5951C19.2682 20.7101 18.3519 20.491 17.5965 19.9787C16.8411 19.4664 16.2984 18.6962 16.0703 17.8125H10.179C9.97507 18.6171 9.50866 19.3307 8.85359 19.8405C8.19851 20.3502 7.39217 20.627 6.56213 20.627C5.73209 20.627 4.92575 20.3502 4.27067 19.8405C3.6156 19.3307 3.14919 18.6171 2.94526 17.8125H0.93713C0.68849 17.8125 0.450031 17.7137 0.274218 17.5379C0.098402 17.3621 -0.000370026 17.1236 -0.000370026 16.875V10.3125C-0.000415802 10.1855 0.025423 10.0598 0.0755692 9.94313ZM19.6871 18.75C20.058 18.75 20.4205 18.64 20.7288 18.434C21.0372 18.228 21.2775 17.9351 21.4194 17.5925C21.5613 17.2499 21.5984 16.8729 21.5261 16.5092C21.4538 16.1455 21.2752 15.8114 21.013 15.5492C20.7507 15.287 20.4166 15.1084 20.0529 15.036C19.6892 14.9637 19.3122 15.0008 18.9696 15.1427C18.627 15.2846 18.3341 15.525 18.1281 15.8333C17.9221 16.1416 17.8121 16.5042 17.8121 16.875C17.8126 17.3721 18.0103 17.8488 18.3618 18.2003C18.7134 18.5518 19.19 18.7495 19.6871 18.75ZM6.56213 4.6875H4.36838L2.35838 9.375H6.56213V4.6875ZM6.56213 18.75C6.93297 18.75 7.29548 18.64 7.60382 18.434C7.91217 18.228 8.15249 17.9351 8.2944 17.5925C8.43632 17.2499 8.47345 16.8729 8.4011 16.5092C8.32875 16.1455 8.15018 15.8114 7.88795 15.5492C7.62573 15.287 7.29164 15.1084 6.92793 15.036C6.56421 14.9637 6.18721 15.0008 5.8446 15.1427C5.50199 15.2846 5.20915 15.525 5.00313 15.8333C4.7971 16.1416 4.68713 16.5042 4.68713 16.875C4.68763 17.3721 4.88533 17.8488 5.23685 18.2003C5.58838 18.5518 6.065 18.7495 6.56213 18.75ZM1.87463 15.9375H2.94526C3.15177 15.1345 3.61891 14.4227 4.27347 13.9137C4.92802 13.4047 5.73297 13.1273 6.56213 13.125V11.25H1.87463V15.9375Z" fill="black" fill-opacity="0.7" />
                        </svg>
                    </div>
                    <button className="text-[34px] text-[#FFFFFF] bg-[#F0C400] rounded-2xl text-center p-2 w-full" onClick={() => dispatch(clearCart())}>ثبت سفارش</button>
                </div>
                <div className="w-85/130 bg-white rounded-2xl flex flex-col gap-10 mr-10">
                    <div className="flex items-center mt-5">
                        <p className="text-[#282828] text-[25px] ml-30">قیمت کل</p>
                        <p className="text-[#282828] text-[25px] ml-50">تعداد</p>
                        <p className="text-[#282828] text-[25px] ml-85">محصولات</p>
                    </div>
                    <div className="h-[1px] w-full bg-[repeating-linear-gradient(to_right,#B0B0B0_0px,#B0B0B0_15px,transparent_15px,transparent_30px)]"></div>
                    {items.map((item, index) => (
                        <div>
                            <div key={index} className="flex w-full justify-end items-center gap-5">
                                <button
                                    className="mr-10 w-5 text-[#282828] hover:text-red-500 transition-colors duration-200"
                                    onClick={() => removehandler(item)}
                                >
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11 1L1 11M1 1L11 11"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                                <div className="flex flex-col mr-30">
                                    {item.newprice && item.oldPrice ? (
                                        <>
                                            <p className="flex text-[24px] text-[#FFB800] gap-1 w-30">
                                                <span className="text-[20px]">تومان</span>
                                                {toPersianNumber(item.newprice.toLocaleString())}
                                            </p>

                                            <p className="flex text-[16px] text-[#000000B2] line-through gap-1 justify-center items-center w-30">
                                                <span className="text-[20px]">تومان</span>
                                                {toPersianNumber(item.oldPrice.toLocaleString())}
                                            </p>
                                        </>
                                    ) : (
                                        <p className="flex text-[24px] font-normal gap-1 w-30">
                                            <span className="text-[20px]">تومان</span>
                                            {item.price ? toPersianNumber(item.price.toLocaleString()) : ""}
                                        </p>
                                    )}
                                </div>
                                <div className=" w-30 flex gap-2 border border-[#00000080] rounded-2xl justify-center items-center">
                                    <button className="font-medium text-[#F0C400] text-[24px]" onClick={() => decreas(item)}>-</button>
                                    <p className="border-r border-l border-[#00000080] p-2 w-5/10 text-center text-[#282828] text-[16px] font-medium">{item.quantity}</p>
                                    <button className="font-medium text-[#F0C400] text-[24px]" onClick={() => increas(item)}>+</button>
                                </div>
                                <div className="flex flex-col items-end gap-3 w-90">
                                    <p className="text-[14px] font-light">{item.title}</p>
                                    <p className="flex gap-2 justify-center items-center ">
                                        <span className="font-light text-[11px]">آبی</span>
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7.5" cy="7.5" r="7.5" fill="#0F82D3" />
                                        </svg>
                                    </p>
                                </div>
                                <img className="size-30" src={item.image} alt="" />
                            </div>
                            {index !== items.length - 1 && (
                                <hr className="bg-[#00000033] border-none h-[2px]" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}