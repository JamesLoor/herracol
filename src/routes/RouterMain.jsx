import React, { useLayoutEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from '../pages/Home'
import Products from '../pages/Products'
import Contact from '../pages/Contact'
import Question from '../pages/Question';
import NotFound from '../pages/NotFound'
import Login from '../pages/Login';
import Layout from '../components/Layout'

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}

const RouterMain = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/productos/:category" element={<Products />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/pregunta/:id" element={<Question />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Wrapper>
    </BrowserRouter>
  )
}

export default RouterMain
