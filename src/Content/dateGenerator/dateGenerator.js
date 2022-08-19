export function DateGenerator(date) {
    const day = date.getDate()+'.'+date.getMonth()+'.'+date.getFullYear()
    return day
}