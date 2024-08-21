import Tag from '../tag';
import { BottomCard, Card, CardHeader, Description, Infos, Rating, Score, Title } from './styles';
import star from '../../assets/images/estrela.svg';
import { ButtonLink } from '../button/styles';

type Props = {
  title: string;
  category: string;
  score: string;
  description: string;
  image: string;
  star: string;
  isFeatured?: boolean;
  id: number;
};

const Restaurant = ({
  title,
  category,
  score,
  description,
  image,
  isFeatured,
  id,
}: Props) => {
  return (
    <Card>
      <img src={image} alt={title} />
      <Infos>
        {isFeatured && <Tag>Destaque da Semana</Tag>}
        <Tag>{category}</Tag>
      </Infos>
      <BottomCard>
        <CardHeader>
          <Title>{title}</Title>
          <Rating>
            <Score>{score}</Score>
            <img src={star} alt="" />
          </Rating>
        </CardHeader>
        <Description>{description}</Description>
        <ButtonLink to={`/restaurant/${id}`} type="link" title={'Conheça nosso cardápio'} children={'Saiba mais'} />
      </BottomCard>
    </Card>
  )
};

export default Restaurant;
