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


function App() {
  return (
    <Suspense fallback={null}>
      <HashRouter>
         <ModalProvider>
          <AppWrapper id='app'>
            <ContentWrapper>
              <Layout>
                <LeftMenu/>
              </Layout>
              <Layout>
                <LayoutHeader/>
                <LayoutContent>
                  <RouteApp/>
                </LayoutContent>
              </Layout>
            </ContentWrapper>
          </AppWrapper>
        </ModalProvider>
      </HashRouter>
    </Suspense>
  )
}

export default App
