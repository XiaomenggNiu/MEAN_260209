import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./state";
// create feature selector first
export const selectFeature = createFeatureSelector
<CounterState>('counter');
// select specific properties from featureState
export const selectCount = createSelector(
    selectFeature,
    (state: CounterState)=>{return state.count}
)