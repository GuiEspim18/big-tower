export const eventHours: Function = (): Array<string> => {
    let arr: Array<string> = new Array()
    let date: Date = new Date()
    date.setHours(7)
    while (date.getHours() !== 2) {
        let hours : any = date.getHours()
        let str: string = `${hours}:00 `
        if (hours <= 11) str += 'AM'
        if (hours > 11) str += 'PM' 
        arr.push(str)
        date.setHours(hours + 1)
    }
    return arr
}