import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, TOGGLED } from "./actionTypes";
import initialState from "./initialState";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
    color?: string;
}

interface Action {
    type: string;
    payload?: string | number | { todoId: number; color: string };
}

const nextTodoId = (todos: Todo[]): number => {
    const maxId = todos.reduce((maxId: number, todo: Todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1;
}


const reducer = (state: Todo[] = initialState, action: Action) => {
    switch (action.type) {
        case ADDED:
            return [
                ...state,
                {
                    id: nextTodoId(state),

                }
            ]
        case TOGGLED:
            return state.map(todo => {
                if (todo.id !== action.payload) {
                    return todo;
                }
                return {
                    ...todo,
                    completed: !todo.completed
                }
            })
        case COLORSELECTED:
            {
                const { todoId, color } = action.payload as { todoId: number; color: string };
                return state.map((todo) => {
                    if (todo.id !== todoId) {
                        return todo;
                    }
                    return { ...todo, color };
                });
            }

        case DELETED:
            return state.filter(todo => todo.id !== action.payload)


        case ALLCOMPLETED:
            return state.map(todo => {
                return {
                    ...todo,
                    completed: true
                }
            })
            
        case CLEARCOMPLETED:
            return state.filter(todo => !todo.completed);

        default:
            break
    }
};

export default reducer;
