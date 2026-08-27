

const products = [
    {
        id: 1,
        image: "/new.png",
        title: "طناب ورزشی 1.5 متری مدل 023",
        price: 98000
    },
    {
        id: 2,
        image: "/new2.png",
        title: "کلاه محافظ دوچرخه سواری حرفه ای مدل limar",
        price: 1450000
    },
    {
        id: 3,
        image: "/new3.jpg",
        title: "کفش کوهنوردی مردانه مدل RUNNER",
        price: 540000
    },
    {
        id: 4,
        image: "/new4.png",
        title: "ساک ورزشی مدل 90",
        price: 700000
    },
    {
        id: 5,
        image: "/new5.png",
        title: "شیکر بدنسازی مدل pro0097 سفید",
        price: 350000
    },
    {
        id: 6,
        title: "کیسه خواب کوهنوردی 1.8 متر",
        image: "/p.png",
        price: 298000
    },
    {
        id: 7,
        title: "عینک شنا حرفه‌ای مدل Z09",
        img: "/offer.png",
        image: "/p2.png",
        newprice: 1197000,
        oldPrice: 1390000
    },
    {
        id: 8,
        title: "دستکش بدنسازی مچ‌بند دار",
        image: "/p3.png",
        price: 540000
    },
    {
        id: 9,
        title: "ظرف غذا داخل مناسب کوهنوردی و سفر مدل Laba",
        image: "/p4.png",
        price: 385000
    },
    {
        id: 10,
        title: "ساک ورزشی مدل Jordan",
        img: "/offer.png",
        image: "/p5.png",
        newprice: 440000,
        oldPrice: 550000
    },
    {
        id: 11,
        title: "کفش کوهنوردی مردانه مدل RUNNER",
        image: "/p6.png",
        price: 980000
    },
    {
        id: 12,
        title: "کلاه محافظ دوچرخه سواری مدل Bima",
        image: "/p7.png",
        price: 1350000
    },
    {
        id: 13,
        title: "چادر مسافرتی کمپینگ مدل MARSAUSA",
        image: "/p8.png",
        price: 2450000
    },
    {
        id: 14,
        title: "ست ورزشی مردانه شامل تیشرت و شلوارک",
        image: "/p9.png",
        price: 330000
    },
    {
        id: 15,
        title: "دستکش بوکس مارک RIVERS",
        image: "/p10.png",
        price: 175000
    },
    {
        id: 16,
        image: "/new.png",
        title: "طناب ورزشی 1.5 متری مدل 023",
        price: 98000
    },
    {
        id: 17,
        image: "/new2.png",
        title: "کلاه محافظ دوچرخه سواری حرفه ای مدل limar",
        price: 1450000
    },
    {
        id: 18,
        image: "/new3.jpg",
        title: "کفش کوهنوردی مردانه مدل RUNNER",
        price: 540000
    },
    {
        id: 19,
        image: "/new4.png",
        title: "ساک ورزشی مدل 90",
        price: 700000
    },
    {
        id: 20,
        image: "/new5.png",
        title: "شیکر بدنسازی مدل pro0097 سفید",
        price: 350000
    },
    {
        id: 21,
        image: "/same.png",
        title: "کفش کوهنوردی مردانه مدل RUNNER",
        price: 3980000
    },
    {
        id: 22,
        image: "/same2.jpg",
        title: "کلاه محافظ دوچرخه سواری حرفه ای مدل limar",
        price: 1450000
    },
    {
        id: 23,
        image: "/same3.jpg",
        title: "چادر صحرایی کینگ کمپ مدل MARASUSA",
        price: 2540000
    },
    {
        id: 24,
        image: "/same4.jpg",
        title: "ست ورزشی مردانه مدل باشگاهی نایک",
        price: 430000
    },
    {
        id: 25,
        image: "/same5.jpg",
        title: "دستکش بوکس مارک reves",
        price: 970000
    },
    {
        id: 26,
        image: "/new.png",
        title: "طناب ورزشی 1.5 متری مدل 023",
        price: 98000
    },
    {
        id: 27,
        image: "/new2.png",
        title: "کلاه محافظ دوچرخه سواری حرفه ای مدل limar",
        price: 1450000
    },
    {
        id: 28,
        image: "/new3.jpg",
        title: "کفش کوهنوردی مردانه مدل RUNNER",
        price: 540000
    },
    {
        id: 29,
        image: "new4.png",
        title: "ساک ورزشی مدل 90",
        price: 700000
    },
    {
        id: 30,
        image: "new5.png",
        title: "شیکر بدنسازی مدل pro0097 سفید",
        price: 350000
    },
    {
        id: 31,
        title: "کیسه خواب کوهنوردی 1.8 متر",
        image: "/p.png",
        price: 298000
    },
    {
        id: 32,
        title: "عینک شنا حرفه‌ای مدل Z09",
        img: "/offer.png",
        image: "/p2.png",
        newprice: 1197000,
        oldPrice: 1390000
    },
    {
        id: 33,
        title: "دستکش بدنسازی مچ‌بند دار",
        image: "/p3.png",
        price: 540000
    },
    {
        id: 34,
        title: "ظرف غذا داخل مناسب کوهنوردی و سفر مدل Laba",
        image: "/p4.png",
        price: 385000
    },
    {
        id: 35,
        title: "ساک ورزشی مدل Jordan",
        img: "/offer.png",
        image: "/p5.png",
        newprice: 440000,
        oldPrice: 550000
    },
    {
        id: 36,
        title: "کفش کوهنوردی مردانه مدل RUNNER",
        image: "/p6.png",
        price: 980000
    },
    {
        id: 37,
        title: "کلاه محافظ دوچرخه سواری مدل Bima",
        image: "/p7.png",
        price: 1350000
    },
    {
        id: 38,
        title: "چادر مسافرتی کمپینگ مدل MARSAUSA",
        image: "/p8.png",
        price: 2450000
    },
    {
        id: 39,
        title: "ست ورزشی مردانه شامل تیشرت و شلوارک",
        image: "/p9.png",
        price: 330000
    },
    {
        id: 40,
        title: "دستکش بوکس مارک RIVERS",
        image: "/p10.png",
        price: 175000
    },
];
const same = [
    {
        id: 1,
        image: "/same.png",
        title: "کفش کوهنوردی مردانه مدل RUNNER",
        price: 3980000
    },
    {
        id: 2,
        image: "/same2.jpg",
        title: "کلاه محافظ دوچرخه سواری حرفه ای مدل limar",
        price: 1450000
    },
    {
        id: 3,
        image: "/same3.jpg",
        title: "چادر صحرایی کینگ کمپ مدل MARASUSA",
        price: 2540000
    },
    {
        id: 4,
        image: "/same4.jpg",
        title: "ست ورزشی مردانه مدل باشگاهی نایک",
        price: 430000
    },
    {
        id: 5,
        image: "/same5.jpg",
        title: "دستکش بوکس مارک reves",
        price: 970000
    }

]
const sort = [
    {
        name: "پرفروش ترین",
        value: "normal1"
    },
    {
        name: "گران ترین",
        value: "high"
    },
    {
        name: "ارزان ترین",
        value: "low"
    },
    {
        name: "پربازدیدترین",
        value: "normal2"
    },
    {
        name: "جدیدترین",
        value: "normal"
    }

]
const newp = products.filter(item => item.id < 6)
const btn = [
    {
        id: 1,
        name: "نظرات",
        value: "comments"
    },
    {
        id: 2,
        name: "مشخصات",
        value: "info"
    },
    {
        id: 3,
        name: "توضیحات",
        value: "description"
    }
]
const specifications = [
  {
    name: "نام برند",
    value: "کینگتکس، Kingtex"
  },
  {
    name: "کاربرد",
    value: "کمربندی چند روزه"
  },
  {
    name: "جنس رویه",
    value: "نیوپان (چرم طبیعی-گاو)"
  },
  {
    name: "نوع کفی",
    value: "معمولی"
  },
  {
    name: "جنس زیره",
    value: "Vibram"
  },
  {
    name: "وزن",
    value: "640 گرم"
  },
  {
    name: "خاصیت ضد آب",
    value: "دارد"
  },
  {
    name: "سایر ویژگی ها",
    value: "دارای لایه تقویتی KINGTEX"
  }
]
export { newp, products, same, sort, btn  , specifications }
