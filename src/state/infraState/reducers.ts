import { createReducer } from "@reduxjs/toolkit";
import { fetchCurrencyList, fetchTimeZoneList } from './actions'

export interface TInfraState {
  timeZone: Array<any>;
  currency: Array<any>;
}

export const initialInfraState : TInfraState = {
  timeZone: [],
  currency: [],
}

export default createReducer<TInfraState>(initialInfraState, builder => {
  builder.addCase(fetchTimeZoneList.pending, (state, { payload: { timeZoneList } }) => {
    return {
      ...state,
      timeZone: [],
    }
  })
  .addCase(fetchTimeZoneList.fullfilled, (state, { payload: { timeZoneList } }) => {
    return {
      ...state,
      timeZone: timeZoneList,
    }
  })
  .addCase(fetchTimeZoneList.rejected, (state, { payload: { timeZoneList } }) => {
    return {
      ...state,
      timeZone: []
    }
  })
  .addCase(fetchCurrencyList.pending, (state, { payload: { currencyList } }) => {
    return {
      ...state,
      currency: [],
    }
  })
  .addCase(fetchCurrencyList.fullfilled, (state, { payload: { currencyList } }) => {
    return {
      ...state,
      currency: currencyList,
    }
  })
  .addCase(fetchCurrencyList.rejected, (state, { payload: { currencyList } }) => {
    return {
      ...state,
      currency: [],
    }
  })
})