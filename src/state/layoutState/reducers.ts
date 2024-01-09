import { createReducer } from "@reduxjs/toolkit";
import { toggleCollapsed, fetchMenuList, siderBarUpdate, menuKeyUpdate, pathUpdate, activeMenuByPath, userInfoUpdate, 
  fetchUserInfo, updateRights, fetchRightsAction, menuOpenKeyUpdate, menuInit, updateTimeZone,
} from "./actions";
// import { customerManagetransformSidebarData, customerManageRenderData } from '../../pages/routes';
import useWrapperIntl from "../../hooks/useWrapperIntl";


export interface TLayoutState {
  title: string, // 网页标题
  originData: any[],
  data: any[],
  dataFlat: any[],
  selectedKeys: any[],
  openKeys: any[],
  pathname: string,
  ifCollapsed: boolean,
  isVisible: boolean,
  userInfo: any;
  rights: Array<string>;
  timeZone: string; // 代理商时区
  timeZoneUtc: string;
}

export const initialLayoutState : TLayoutState = {
  title: '代理商平台',
  originData:[],
  data: [],
  dataFlat: [],
  selectedKeys: [],
  openKeys: [],
  pathname: '',
  ifCollapsed: false,
  isVisible: true,
  userInfo: null,
  rights: [],
  timeZone: '',
  timeZoneUtc: ''
}

/** 切换ifCollapsed */
export default createReducer<TLayoutState>(initialLayoutState, (builder) =>
  builder.addCase(toggleCollapsed, (state, { payload: { ifCollapsed } }) => {
    return {
      ...state,
      ifCollapsed: ifCollapsed,
    }
  })
  .addCase(fetchMenuList.pending, (state, { payload: { menuList } }) => {
    const title = 'Agency Platform';
    return {
      ...state,
    }
  })
  .addCase(fetchMenuList.fullfilled, (state, { payload: { menuList } }) => {
    const indexPath = window.location.hash.replace(/#/, '');
    const menuData = menuList || state.originData;
    // const transformSidebarData = customerManagetransformSidebarData;
    // const renderData = customerManageRenderData;
    const transformSidebarData: any = [];
    const renderData: any = [];
    const title = 'Agency Platform';
    const dataTransformed = transformSidebarData(menuData);
    const dataFlat = menuData.map(e => {
      const key = e.resKey
      const icon = renderData[key]? renderData[key].icon : null
      const path = renderData[key]? renderData[key].path : null
      const name = renderData[key]? renderData[key].name : null
      return {
          ...e,
          key: e.id,
          name: name,
          icon: icon,
          path: path
      };
    });
    const selectedKeysItem = dataFlat.find(v => v.path === indexPath);
    const openKeysItem = dataFlat.find(v => {
      if (!selectedKeysItem) return false;
      return v.id === selectedKeysItem.pid;
    });
    return {
      ...state,
      originData: menuData,
      data: dataTransformed,
      title,
      dataFlat,
      selectedKeys: selectedKeysItem ? ['' + selectedKeysItem.id] : [],
      openKeys: openKeysItem ? [`${openKeysItem.id}`] : []
    }
  })
  .addCase(fetchMenuList.rejected, (state, { payload: { menuList } }) => {
    const title = 'Agency Platform';
    return {
      ...state,
      title
    }
  })
  .addCase(siderBarUpdate, (state, { payload: { menuList } }) => {
    const { wrapperIntl } = useWrapperIntl();
    const menuData = menuList || state.originData;
    // const transformSidebarData = customerManagetransformSidebarData;
    // const renderData = customerManageRenderData;
    const transformSidebarData: any = [];
    const renderData: any = [];
    const title = wrapperIntl('title');
    const dataTransformed = transformSidebarData(menuData);
    const dataFlat = menuData.map(e => {
      const key = e.resKey
      const icon = renderData[key]? renderData[key].icon : null
      const path = renderData[key]? renderData[key].path : null
      const name = renderData[key]? renderData[key].name : null
      return {
        ...e,
        key: e.id,
        name: name,
        icon: icon,
        path: path
      };
    });
    return {
      ...state,
      originData: menuData,
      data: dataTransformed,
      title,
      dataFlat,
    }
  })
  .addCase(menuInit, (state, { payload }) => {
  })
  .addCase(menuKeyUpdate, (state, { payload }) => {
    const key = payload;
    const sidebarData = state.data.reduce((p, n) => {
      return [...p, n, ...n.children];
    }, []);
    const item = sidebarData.find((e: any) => e.key === key);
    console.log('site', item, item.key);
    return {
      ...state,
      // openKeys: ['' + item.key],
      selectedKeys: [''+item.key],
    };
  })
  .addCase(menuOpenKeyUpdate, (state, { payload }) => {
    const openKey = payload;
    return {
      ...state,
      openKeys: ['' + openKey],
    }
  })
  .addCase(pathUpdate, (state, { payload: { pathname } }) => {
    return {
      ...state,
      pathname,
    };
  })
  .addCase(activeMenuByPath, (state, { payload: { pathname } }) => {
    const { data } = state;
    if (!data || !data.length) {
      return {
        ...state,
        pathname
      };
    }
    try {
        // 有可能出现找不到的情况
        const sidebarData = state.data.reduce((p, n) => {
            return [...p, n, ...n.children];
        }, []);
        let item = sidebarData.find((e: any) => e.path === pathname);
        //如果找不到点击的路由
        if(!item){
            //路由可能并不在左侧导航栏里面 此时匹配父模块
              item = state.data.find(e =>  new RegExp("^\\" + e.path+".+").test(pathname) )
            
            if(!item){
                return {
                    ...state,
                    pathname
                };
            }
        }
        const parent = sidebarData.find((e: any) => e.id === item.pid) || false;
        const openKeys = (parent?[''+ parent.key]:[''+item.key]);
        return {
            ...state,
            pathname,
            selectedKeys: [''+item.key],
            openKeys,
        };
    } catch (e) {
        console.log(
            `sidebar: active menu item failed. "${pathname}" not found`
        );
        return {
            ...state,
            pathname
        };
    }
  })
  .addCase(userInfoUpdate, (state, { payload: { userInfo } }) => {
    return {
      ...state,
      userInfo,
    }
  })
  .addCase(fetchUserInfo.pending, (state, { payload: { userInfo } }) => {
    return {
      ...state,
      userInfo: null,
      timeZone: '',
      timeZoneUtc: '',
    }
  })
  .addCase(fetchUserInfo.fullfilled, (state, { payload: { userInfo, timeZone, timeZoneUtc } }) => {
    return {
      ...state,
      userInfo,
      timeZone,
      timeZoneUtc
    }
  })
  .addCase(fetchUserInfo.rejected, (state, { payload: { userInfo } }) => {
    return {
      ...state,
      userInfo: null,
      timeZone: '',
      timeZoneUtc: '',
    }
  })
  .addCase(updateRights, (state, { payload: { rights } }) => {
    return {
      ...state,
      rights,
    }
  })
  .addCase(fetchRightsAction.pending, (state, { payload: { rights } }) => {
    return {
      ...state,
      rights,
    }
  })
  .addCase(fetchRightsAction.fullfilled, (state, { payload: { rights } }) => {
    return {
      ...state,
      rights,
    }
  })
  .addCase(fetchRightsAction.rejected, (state, { payload: { rights } }) => {
    return {
      ...state,
      rights,
    }
  })
  .addCase(updateTimeZone, (state, { payload: { timeZone } }) => {
    return {
      ...state,
      timeZone,
    }
  })
)