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
import PrivateRoute from '../components/PrivateRoute';

import LayoutAdmin from '../components/LayoutAdmin';
import HomeAdmin from '../pages/admin/HomeAdmin';
import UsersAdmin from '../pages/admin/UsersAdmin';
import ProductsAdmin from '../pages/admin/ProductsAdmin';
import CategoriesAdmin from '../pages/admin/CategoriesAdmin';

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
          </Route>

          <Route path="admin" element={
            <PrivateRoute>
              <LayoutAdmin />
            </PrivateRoute>
          }>
            <Route index element={<HomeAdmin />} />
            <Route path="usuarios" element={<UsersAdmin />} />
            <Route path="productos" element={<ProductsAdmin />} />
            <Route path="categorias" element={<CategoriesAdmin />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  )
}

export default RouterMain
