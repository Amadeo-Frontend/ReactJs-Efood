import React from 'react';
import Restaurant from '../restaurant'; // Assumindo que este componente existe e é compatível com os dados da API
import { Title } from '../restaurant/styles';
import { List, ListContainer } from './styles';
import { Promo } from '../../pages/Home';

// Atualize o tipo Props para refletir corretamente a estrutura dos dados esperados
export type Props = {
  title: string;
  types: Promo[]; // Certifique-se de que Promo corresponda à estrutura do JSON da API
};

const RestaurantsList = ({ title, types }: Props) => (
  <>
    <div className="container">
      <ListContainer>
        <Title>{title}</Title>
        <List>
          {types.map((type) => (
            <Restaurant
              key={type.id}
              title={type.titulo} // Atualizado para corresponder ao campo "titulo" do JSON
              category={type.tipo} // Atualizado para corresponder ao campo "tipo"
              score={type.avaliacao.toString()} // Atualizado para corresponder ao campo "avaliacao"
              description={type.descricao} // Atualizado para corresponder ao campo "descricao"
              infos={type.cardapio.length > 0 ? type.cardapio[0].descricao : ''} // Exemplo de como acessar uma descrição de um item do cardápio
              image={type.capa} // Atualizado para corresponder ao campo "capa"
              star={type.destacado ? "★" : ""} // Exemplo de como lidar com o campo "destacado", assumindo que você quer mostrar uma estrela se for verdadeiro
            />
          ))}
        </List>
      </ListContainer>
    </div>
  </>
);

export default RestaurantsList;
