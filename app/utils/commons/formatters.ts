export const formatMoney = (data: number, showCents = false, returnHyphen = false) => {
    // not rounded form
    if (returnHyphen && data === 0) {
        return '-'
    }
    const newData = Math.floor(data * 100) / 100
    const options = showCents
        ? { style: 'currency', currency: 'USD' }
        : { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }
    const newString = newData.toLocaleString('en-US', options)
    return newString
}

export function formatFromDate(inputDate: Date, format: string = 'dd/mm/yyyy'): string {
    const date = inputDate.getDate().toString().padStart(2, '0')
    const month = (inputDate.getMonth() + 1).toString().padStart(2, '0')
    const year = inputDate.getFullYear().toString()

    const hours = inputDate.getHours().toString().padStart(2, '0')
    const minutes = inputDate.getMinutes().toString().padStart(2, '0')

    switch (format) {
        case 'dd/mm/yyyy':
            return `${date}/${month}/${year}`
        case 'yyyy-mm-dd':
            return `${year}-${month}-${date}`
        case 'dd-mm-yyyy':
            return `${date}-${month}-${year}`
        case 'yyyy/mm/dd':
            return `${year}/${month}/${date}`
        case 'dd/mm/yyyy hh:mm':
            return `${date}/${month}/${year} ${hours}:${minutes}`
        default:
            throw new Error(`Invalid format: ${format}`)
    }
}