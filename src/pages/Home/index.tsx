
import RestaurantsList from '../../components/restaurantList'
import Header from '../../components/header'
import { Container } from '../../styles'
import Footer from '../../components/footer'
import { useEffect, useState } from 'react'


export type CardapioItem = {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
};

export type Promo = {
  id: number;
  titulo: string;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  destacado: boolean;
  cardapio: CardapioItem[]
};


const Home = () => {
const [restaurantType, setRestaurantType] = useState<Promo[]>([])

useEffect(() => {
  fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
    .then(res => res.json())
    .then(res => setRestaurantType(res));
}, []);

  return (
    <>
      <Header />
      <Container>
        <RestaurantsList types={restaurantType} title='' />
      </Container>
      <Footer />
    </>
  )
}

export default Home
//https://fake-api-tau.vercel.app/api/efood/restaurantes