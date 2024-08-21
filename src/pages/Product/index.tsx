import ProductHeader from '../../components/productHeader'
import ProductHero from '../../components/productHero'
import ProductList from '../../components/productsList'
import Footer from '../../components/footer'
import { useEffect, useState } from 'react'
import { CardapioItem } from '../Home'

const Product = () =>  {
  const [productType, setProductType] = useState<CardapioItem[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then(res => res.json())
      .then(res => setProductType(res));
  }, []);
  return (
    <>
      <ProductHeader />
      <ProductHero />
      <ProductList types={productType} title='' />
      <Footer />
    </>
  )
}

export default Product