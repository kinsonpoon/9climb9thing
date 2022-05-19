import React, { useLayoutEffect } from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import {RouteWithLayout} from "./components/routeWithLayout/RouteWithLayout";
import {Home} from "./screen/home";
import MainLayout from "./layout/mainLayout";


const Wrapper = ({ children }: any) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
      <BrowserRouter>
        <Wrapper>
            <Routes>
                <Route path="/home" element={<RouteWithLayout children={<Home />} layout={MainLayout}/>}  />
            </Routes>
        </Wrapper>
      </BrowserRouter>
  );
}

export default App;
