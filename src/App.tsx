import { Suspense } from 'react'
import './App.css'
import { ModalProvider } from './contenxt/ModalContext';
import { AppWrapper, ContentWrapper } from './AppWrapper';
import { LeftMenu } from './layout/LeftMenu';
import { LayoutHeader } from './layout/Header';
import { LayoutContent } from './layout/Content';
import { Layout } from 'antd';
import RouteApp from './RouteApp';
import { HashRouter } from 'react-router-dom';

const { Footer } = Layout


function App() {
  return (
    <Suspense fallback={null}>
      <HashRouter>
         <ModalProvider>
          <AppWrapper id='app'>
            <Layout style={{ height: '100%' }}>
              <LeftMenu/>
              <Layout>
                <LayoutHeader/>
                <LayoutContent>
                  <RouteApp/>
                </LayoutContent>
                <Footer style={{ textAlign: 'center' }}>
                  Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
              </Layout>
            </Layout>
          </AppWrapper>
        </ModalProvider>
      </HashRouter>
    </Suspense>
  )
}

export default App
