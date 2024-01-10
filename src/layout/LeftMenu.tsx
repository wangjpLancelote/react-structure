import React, { useState } from 'react';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Typography } from 'antd';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const { Sider } = Layout;
const { Text } = Typography

const renderSubMenus = () => {

}

export const LeftMenu: React.FC = () => {
  const { ifCollapsed } = useSelector((state: any) => state.layout);

  const handleUpdateActiveKey = (key: string) => {
    
  }

  return (
    <Sider trigger={null} collapsible collapsed={ifCollapsed}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        // items={[
        //   {
        //     key: '1',
        //     icon: <UserOutlined />,
        //     label: 'nav 1',
        //   },
        //   {
        //     key: '2',
        //     icon: <VideoCameraOutlined />,
        //     label: 'nav 2',
        //   },
        //   {
        //     key: '3',
        //     icon: <UploadOutlined />,
        //     label: 'nav 3',
        //   },
        // ]}
      >
        <Menu.Item onClick={() => handleUpdateActiveKey('1')}>
          <Link to={'/'} key={'1'} >
            <Text>首页</Text>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};