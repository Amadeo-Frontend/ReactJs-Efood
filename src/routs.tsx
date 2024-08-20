import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'


const AppRouts = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/product" element={<Product />} />
  </Routes>
)

export default AppRouts