import React, { ReactNode, Suspense } from 'react';
import { HashRouter, Route, Routes, Router, Navigate } from 'react-router-dom';


const RouteApp = (_props: any): ReactNode => {
  return (
     <Suspense fallback={ null }>
        <HashRouter>
          <></>
        </HashRouter>
     </Suspense>
  )
}

export default RouteApp;