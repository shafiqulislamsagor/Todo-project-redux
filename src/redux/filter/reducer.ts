import { COLORCHANGE, STATUSCHANGE } from "./actionTypes"


interface StateProps {
    status: string,
    colors: []
}

interface ActionProps {
    type: string;
    payload?: string | { color: string, changeType: string, };
}

const reducer = (state: StateProps, action: ActionProps) => {
    switch (action.type) {
        case STATUSCHANGE:
            return {
                ...state,
                status: action.payload,
            }
        case COLORCHANGE:
            {
                const { color, changeType } = action.payload as { color: string, changeType: string }
                switch (changeType) {
                    case 'added':
                        return {
                            ...state,
                            colors: [...state.colors, color]
                        }
                    case 'removed':
                        return {
                            ...state,
                            colors: state.colors.filter(existingColor => existingColor !== color)
                        }
                    default:
                        return state;
                }
            }
        default:
            return state
    }
}

export default reducer;