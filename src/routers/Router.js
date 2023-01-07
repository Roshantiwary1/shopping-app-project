import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Cart from '../pages/Cart';
import ProductDetails from '../pages/PrductDetails';
import CheckOut from '../pages/CheckOut';
import ProtectedRoute from './ProtectedRoute';

import { AllProducts } from './../admin/AllProducts';
import { AddProduct } from './../admin/AddProduct';
import Dashboard from '../admin/Dashboard';
import User from '../admin/User';


const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/shop/:id' element={<ProductDetails/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />

        <Route path='/' element={<ProtectedRoute/>}>
        <Route path='/checkout' element={<CheckOut/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='dashboard/all-products' element={<AllProducts/>}/>
        <Route path='dashboard/add-products' element={<AddProduct/>}/>
        <Route path='dashboard/user' element={<User/>}/>
        </Route>

        <Route path='/checkout' element={<ProtectedRoute>
          <CheckOut/>
        </ProtectedRoute>} />
    </Routes>
  )
}

export default Router
