export const peopleNumber: Function = (): Array<string> => {
    let arr: Array<any> = new Array()
    let num: number = 0
    while (num < 180) {
        num = num+10
        let str: string = `${num} pessoas`
        arr.push(str)
    }
    return arr
}