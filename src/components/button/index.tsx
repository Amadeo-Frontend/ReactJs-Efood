import { ButtonContainer, ButtonLink } from './styles';


export type Props = {
  type: 'button' | 'link';
  title: string;
  to?: string;
  onClick?: () => void;
  children: string;
  variant?: 'primary' | 'secondary';
};

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  variant = 'primary',
}: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer variant={variant} type="button" onClick={onClick} title={title}>
        {children}
      </ButtonContainer>
    );
  }

  return (
    <ButtonLink to={to || ''} title={title} onClick={onClick}>
      {children}
    </ButtonLink>
  );
};

export default Button;
