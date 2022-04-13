import { MouseEvent } from "react";
import * as SC from './styles';

type ITitle = {
  children: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  value: string;
}

export const Button = ({children, onClick, value}: ITitle) => {
   return (
    <>
      <SC.Button 
      data-testid="button"
      value={value} 
      onClick={onClick}
      > 
        {children} 
      </SC.Button>
    </>
  )
}