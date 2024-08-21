import Products from '../products'
import { Title } from '../restaurant/styles'
import { List, ListContainer } from './styles'
import { CardapioItem } from '../../pages/Home';

export type Props = {
  title: string
  types: CardapioItem[];
}
const RestaurantsList = ({ title, types }: Props) => (
  <>
    <div className="container">
      <ListContainer>
      <Title>{title}</Title>
      <List>
        {types.map((type) => (
          <Products
            key={type.id}
            title={type.nome}
            description={type.descricao}
            image={type.foto}
          />
        ))}
      </List>
      </ListContainer>
    </div>
  </>
)

export default RestaurantsList