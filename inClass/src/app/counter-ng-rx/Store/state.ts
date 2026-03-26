// What to include in the state obj
export interface CounterState {
    count:  number;
    // id: number;
    // username: string;
}
// Define the initial state
export const initialState: CounterState = {
    count: 0
}