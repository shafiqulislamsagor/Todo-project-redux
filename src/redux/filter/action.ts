import { COLORCHANGE, STATUSCHANGE } from "./actionTypes"

export const colorSelected = (color:string, changeType:boolean) => {
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