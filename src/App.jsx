import React from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { configureStore } from "@reduxjs/toolkit";
import Home from './pages/homePage/components/home'
import Products from './pages/homePage/components/products'
import Layout from './components/partial'
import Sale from './pages/homePage/components/sale'
import About from './pages/homePage/components/about'
import Login from './pages/homePage/components/login'
import Login2 from './pages/homePage/components/login2'
export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login2" element={<Login2 />} />
      </Routes>
    </Layout>
  )
}