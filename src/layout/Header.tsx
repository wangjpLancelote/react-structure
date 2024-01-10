import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Button, theme } from 'antd';
import { AppDispatch } from '../state';
import { useDispatch, useSelector } from 'react-redux';

const { Header } = Layout;

export const LayoutHeader: React.FC = () => {
  const { ifCollapsed } = useSelector((state: any) => { return state.layout })
  const dispatch = useDispatch<AppDispatch>();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Header style={{ padding: 0, background: colorBgContainer, display: 'flex', justifyContent: 'flex-start' }}>
      <Button
        type="text"
        icon={ifCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => { dispatch({
            type: 'layout/toggleCollapsed',
            payload: { ifCollapsed: ifCollapsed },
          }); 
        }}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
        }}
      />
    </Header>
  );
};