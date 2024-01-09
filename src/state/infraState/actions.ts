import { createAction, ActionCreatorWithPayload, createAsyncThunk } from '@reduxjs/toolkit';


/** 获取时区列表 */
export const fetchTimeZoneList: Readonly<{
  pending: ActionCreatorWithPayload<{ timeZoneList: any[] }>
  fullfilled: ActionCreatorWithPayload<{ timeZoneList: any[] }>
  rejected: ActionCreatorWithPayload<{ timeZoneList: any[] }>
}> = {
  pending: createAction('layout/fetchTimeZoneList/pending'),
  fullfilled: createAction('layout/fetchTimeZoneList/fulfilled'),
  rejected: createAction('layout/fetchTimeZoneList/rejected'),
}

/** 获取币种列表 */
export const fetchCurrencyList: Readonly<{
  pending: ActionCreatorWithPayload<{ currencyList: any[] }>
  fullfilled: ActionCreatorWithPayload<{ currencyList: any[] }>
  rejected: ActionCreatorWithPayload<{ currencyList: any[] }>
}> = {
  pending: createAction('layout/fetchCurrencyList/pending'),
  fullfilled: createAction('layout/fetchCurrencyList/fulfilled'),
  rejected: createAction('layout/fetchCurrencyList/rejected'),
}