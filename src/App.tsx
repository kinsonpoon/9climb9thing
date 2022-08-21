import React, { useLayoutEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import {RouteWithLayout} from "./components/routeWithLayout/RouteWithLayout";
import {HomePage} from "./screen/home";
import MainLayout from "./layout/mainLayout";
import {createTheme} from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import {ProductsPage} from "./screen/products";
import {ProjectsPage} from "./screen/projects";
import {ContactMePage} from "./screen/contactMe";

const Wrapper = ({ children }: any) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
    const theme =
            createTheme({
                palette: {
                    mode: 'dark'
                },
            })
  return (
          <ThemeProvider theme={theme}>
              <BrowserRouter>
                  <Wrapper>
                      <Routes>
                          <Route path="/home" element={<RouteWithLayout element={<HomePage/>} layout={MainLayout}/>}/>
                          <Route path="/products" element={<RouteWithLayout element={<ProductsPage/>} layout={MainLayout}/>}/>
                          <Route path="/projects" element={<RouteWithLayout element={<ProjectsPage/>} layout={MainLayout}/>}/>
                          <Route path="/contactMe" element={<RouteWithLayout element={<ContactMePage/>} layout={MainLayout}/>}/>
                          <Route path="/" element={<RouteWithLayout element={<HomePage/>} layout={MainLayout}/>}/>

                      </Routes>
                  </Wrapper>
              </BrowserRouter>
          </ThemeProvider>
  );
}

export default App;
