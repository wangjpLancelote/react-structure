import { createAction, ActionCreatorWithPayload, createAsyncThunk } from '@reduxjs/toolkit';

import { getMenu } from '../../apis/layout';

/** 菜单是否收起来 */
export const toggleCollapsed = createAction<{ifCollapsed: boolean}>('layout/toggleCollapsed');

/** 菜单属性更新，title, 路由route */
export const siderBarUpdate = createAction<{ menuList: any[] }>('layout/updateSiderbar');

export const menuInit = createAction<unknown>('layout/initMenu');

/** 菜单key */
export const menuKeyUpdate = createAction<unknown>('layout/updateMenuKey');

export const menuOpenKeyUpdate = createAction<unknown>('layout/updateOpenKey');

export const pathUpdate = createAction<{pathname: string}>('layout/updatePath');

/** 响应菜单路由 */
export const activeMenuByPath = createAction<{ pathname: string }>('layout/activeMenu');

/** 更新登录代理商信息 */
export const userInfoUpdate = createAction<{ userInfo: any }>('layout/updateUserInfo');

/** 异步请求 */
export const fetchMenuData = createAsyncThunk('layout/fetchMenuData', async () => {
  const rt = await getMenu();
  return rt.data;
})

/** 获取菜单列表 */
export const fetchMenuList: Readonly<{
  pending: ActionCreatorWithPayload<{ menuList: any[] }>
  fullfilled: ActionCreatorWithPayload<{ menuList: any[] }>
  rejected: ActionCreatorWithPayload<{ menuList: any[] }>
}> = {
  pending: createAction('layout/fetchMenuList/pending'),
  fullfilled: createAction('layout/fetchMenuList/fulfilled'),
  rejected: createAction('layout/fetchMenuList/rejected'),
}

export const fetchUserInfo: Readonly<{
  pending: ActionCreatorWithPayload<{ userInfo: any, timeZone?: string, timeZoneUtc?: string }>
  fullfilled: ActionCreatorWithPayload<{ userInfo: any, timeZone: string, timeZoneUtc: string }>
  rejected: ActionCreatorWithPayload<{ userInfo: any, timeZone?: string, timeZoneUtc?: string }>
}> = {
  pending: createAction('layout/fetchUserInfo/pending'),
  fullfilled: createAction('layout/fetchUserInfo/fullfilled'),
  rejected: createAction('layout/fetchUserInfo/rejected'),
}

export const updateRights = createAction<{ rights: Array<string> }>('layout/updateRights');

export const fetchRightsAction: Readonly<{
  pending: ActionCreatorWithPayload<{ rights: any[] }>
  fullfilled: ActionCreatorWithPayload<{ rights: any[] }>
  rejected: ActionCreatorWithPayload<{ rights: any[] }>
}> = {
  pending: createAction('layout/fetchRights/pending'),
  fullfilled: createAction('layout/fetchRights/fullfilled'),
  rejected: createAction('layout/fetchRights/rejected'),
}

export const updateTimeZone = createAction<{ timeZone: string }>('layout/updateTimeZone');

export default createAction;