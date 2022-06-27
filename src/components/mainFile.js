
import React, { useEffect } from 'react';
import { Route, Routes ,Navigate } from 'react-router-dom';

import APPLICATION_URL from '../constant/application-routes';

import DataTableBasicDemo from './Layout'

const MainFile = () =>{
  
    return (
        <>
          <Routes >
            <Route path="/" element={<DataTableBasicDemo />} />   
            <Route exact path={APPLICATION_URL.MAIN_PAGE} element={<DataTableBasicDemo />} />
            <Route render={() => <Navigate to={APPLICATION_URL.MAIN_PAGE} />} />
            </Routes >
            </> )
}
    




export default MainFile;