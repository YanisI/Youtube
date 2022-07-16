import { createContext, useReducer } from "react";


const initialState = {
    subs: []
};



const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_SUB":
            if (state.subs.includes(action.payload)) {
                let a = state.subs.filter(sub => sub !== action.payload);
                return {
                    ...state, subs: a
                }
            }
            else {
                return {
                    ...state, subs: [...state.subs, action.payload]
                }
            }

        default: return state;
    }

}


export const AppContext = createContext();

export const AppProvider = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider
            value={{
                subs: state.subs,
                dispatch
            }}>
            {props.children}
        </AppContext.Provider>
    )
}