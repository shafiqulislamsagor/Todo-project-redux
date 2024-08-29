import { COLORCHANGE, STATUSCHANGE } from "./actionTypes"

export const colorSelected = (color:string, changeType:string) => {
    return {
        type: COLORCHANGE,
        payload: {
            color, changeType
        }
    }
}

export const statuschange = (status:boolean) => {
    return {
        type: STATUSCHANGE,
        payload: status
    }
}