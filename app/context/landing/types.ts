import { Dispatch, SetStateAction } from "react"

export type LandingContextT = {
    amount: number[]
    setAmount: Dispatch<SetStateAction<number[]>>
    months: number[]
    setMonths: Dispatch<SetStateAction<number[]>>
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}