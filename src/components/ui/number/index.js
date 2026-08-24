function toPersianNumber(number) {
    const prsianNUmbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

    return String(number).replace(/\d/g, (digit) =>
        prsianNUmbers[digit])
}
export default toPersianNumber
