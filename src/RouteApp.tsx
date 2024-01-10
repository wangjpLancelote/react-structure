import React, { ReactNode, Suspense } from 'react';
import { HashRouter, Route, Routes, Router, Navigate } from 'react-router-dom';
import Home from './pages/Home';


const RouteApp = (_props: any): ReactNode => {
  return (
    <>
      <Routes>
        <Route caseSensitive path='/' element={<Home/>} />
      </Routes>
    </>
  )
}

export default RouteApp;