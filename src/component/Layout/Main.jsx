import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Main = () => {
      return (
            <div className=' text-2xl text-center p-10'>
                 <Header></Header>

                 <Outlet />
            </div>
      );
};

export default Main;