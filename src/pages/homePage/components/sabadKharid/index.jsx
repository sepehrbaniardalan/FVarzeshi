import { useSelector } from "react-redux";
import toPersianNumber from "../../../../components/ui/number";

export default function SabadKharid() {
    const items = useSelector(state => state.cart.items)
    return (
        <div>
            <div>
                <hr />
                <p></p>
            </div>
            <div></div>
            <div>
                <div></div>
                <hr />
                {items.map((item, index) => (
                    <div key={index}>
                        <button>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 1L1 11M1 1L11 11" stroke="#282828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <div>
                            {item.newprice && item.oldPrice ? (
                                <>
                                    <p className="flex text-[24px] text-[#FFB800] gap-1">
                                        <span>تومان</span>
                                        {toPersianNumber(item.newprice.toLocaleString())}
                                    </p>

                                    <p className="flex text-[16px] text-[#000000B2] line-through gap-1">
                                        <span>تومان</span>
                                        {toPersianNumber(item.oldPrice.toLocaleString())}
                                    </p>
                                </>
                            ) : (
                                <p className="flex text-[24px] font-normal gap-1">
                                    <span>تومان</span>
                                    {item.price ? toPersianNumber(item.price.toLocaleString()) : ""}
                                </p>
                            )}
                        </div>
                        <div>
                            <button>-</button>
                            <p>{item.quantity}</p>
                            <button>+</button>
                        </div>
                        <div>
                            <p>{item.title}</p>
                            <p className="flex ">
                                <span>آبی</span>
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="7.5" cy="7.5" r="7.5" fill="#0F82D3" />
                                </svg>
                            </p>
                        </div>
                        <img src={item.image} alt="" />
                    </div>
                ))}
            </div>
        </div>
    )
}