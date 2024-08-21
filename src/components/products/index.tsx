import { BottomCard, Card, CardHeader, Description, Title } from './styles'
import Button from '../button'

type Props = {
  title: string
  description: string
  image: string
}

const Products = ({
  title,
  description,
  image
}: Props) => {
const getDescription = (descricao: string) => {
  if (descricao.length > 150) {
    return descricao.slice(0,147)+'...'
  }
  return descricao
}

  return (
    <Card>
      <img src={image} alt={title} />
      <BottomCard>
        <CardHeader>
          <Title>{title}</Title>
        </CardHeader>
        <Description>{getDescription(description)}</Description>
        <Button variant="secundary"  to="/product" type={'button'} title={'Adicione ao carrinho'} children={'Adicionar ao carrinho'} />
      </BottomCard>
    </Card>
  )
};

export default Products