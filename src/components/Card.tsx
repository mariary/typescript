import React, {FC, useState} from 'react';

export enum CardVariant {
  outline = 'outline',
  primary = 'primary',
}

interface CardProps {
  width?: string,
  height?: string,
  children?: React.ReactNode,
  variant: CardVariant,
  onClick: (num: number) => void
}

const Card: FC<CardProps> = ({
  width,
  height,
  children,
  variant,
  onClick
}) => {
  const [state, setState] = useState(0)

  return (
    <div
      style={{width, height, border: variant === CardVariant.outline ? '1px solid grey' : 'none'}}
      onClick={() => onClick(state)}
    >
      {children}
    </div>
  );
}

export default Card;
