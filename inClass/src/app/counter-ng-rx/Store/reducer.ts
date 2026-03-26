import { createReducer, on } from "@ngrx/store";
import { initialState } from "./state";
import { increment } from "./action";

export const counterReducer = createReducer(initialState,
    on(increment, (state)=> {
        console.log("in reducer",state)
        return {
            // spread the values from prev state
            ...state,
            count: state.count + 1
        }
    }),
    // other on()
)
