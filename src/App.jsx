import React from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { configureStore } from "@reduxjs/toolkit";
import Header from './pages/homePage/components/header'
import Home from './pages/homePage/components/home'
import Products from './pages/homePage/components/products'
import Layout from './components/partial'
import Sale from './pages/homePage/components/sale'
import About from './pages/homePage/components/about'
import Login from './pages/homePage/components/login'
import Detail from './pages/homePage/components/Detail'
export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path='/Detail/:id' element={<Detail />}></Route>
      </Routes>
    </Layout>
  )
}