import { useEffect, useState } from 'react';
import { Banner, Infos, SpinnerContainer } from './styles';
import ClipLoader from "react-spinners/ClipLoader";
import { colors } from '../../styles';
import { useParams } from 'react-router-dom';

interface Promo {
  capa: string;
  tipo: string;
  cardapio: { nome: string }[]; // Ajuste conforme a estrutura dos seus dados
}

const ProductHero = () => {
  const [restaurantTypeHero, setRestaurantTypeHero] = useState<Promo | null>(null); // Estado inicial ajustado para null
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
        .then(res => res.json())
        .then(data => {
          setRestaurantTypeHero(data);
          setIsLoading(false);
        })
        .catch(error => {
          setError(error);
          setIsLoading(false);
        });
  }}, [id]);

  if (isLoading) {
    return (
      <SpinnerContainer>
        <ClipLoader
          color={colors.red}
          loading={isLoading}
          className="custom-spinner"
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </SpinnerContainer>
    );
  }
  if (error) return <div>Erro ao carregar os dados.</div>;
  if (!restaurantTypeHero) return <div>Nenhum restaurante encontrado.</div>; // Verifica se restaurantTypeHero é null

  // Acesso direto a restaurantTypeHero, sem tratar como array
  const heroMenuItem = restaurantTypeHero?.cardapio[0]; // Acesso seguro com optional chaining

  return (
    <Banner style={{ backgroundImage: `url(${restaurantTypeHero?.capa})` }}> {/* Acesso seguro com optional chaining */}
      <div className="container">
        <Infos>
          <p>{restaurantTypeHero?.tipo}</p> {/* Acesso seguro com optional chaining */}
          <h2>{heroMenuItem?.nome}</h2> {/* Acesso seguro com optional chaining */}
        </Infos>
      </div>
    </Banner>
  );
};

export default ProductHero;
