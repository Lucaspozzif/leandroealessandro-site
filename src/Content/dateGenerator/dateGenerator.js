export function DateGenerator(date) {
    const day = date.getDate()+'.'+date.getMonth()+'.'+date.getFullYear()+'$'+date.getDay()
    return day
}