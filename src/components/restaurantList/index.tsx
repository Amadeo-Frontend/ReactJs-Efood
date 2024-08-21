import React from 'react';
import Restaurant from '../restaurant';
import { Title } from '../restaurant/styles';
import { List, ListContainer } from './styles';
import { Promo } from '../../pages/Home';


export type Props = {
  title: string;
  types: Promo[];
};

const RestaurantsList = ({ title, types }: Props) => (
  <>
    <div className="container">
      <ListContainer>
        <Title>{title}</Title>
        <List>
          {types.map((type, index) => (
            <Restaurant
              key={type.id}
              title={type.titulo}
              category={type.tipo}
              score={type.avaliacao.toString()}
              description={type.descricao}
              isFeatured={index === 0}
              image={type.capa}
              star={type.destacado ? "★" : ""}
            />
          ))}
        </List>
      </ListContainer>
    </div>
  </>
);

export default RestaurantsList;
