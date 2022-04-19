import { useState,MouseEvent } from 'react';
import { api } from '../../service/api';
import { Button } from '../Button/Button';
import * as SC from './styles'

type ExcuseProps = {
  id: number;
  excuse: string;
}

export const SelectExcuse = () => {
 const [category, setCategory] = useState<String>('');
 const [excuse, setExuse] = useState<ExcuseProps []>([])

 const handleClick = async(event: MouseEvent<HTMLButtonElement>) => {
  setCategory(event.currentTarget.value)

  const response = await api.get(`${category}`)
  setExuse(response.data)
 }

  return (
    <SC.Container>
      <h2>Select the type of excuse 😏</h2>
      <SC.ButtonContainer>
        <Button value="family" children='Family' onClick={handleClick} />
        <Button value="office" children='Office' onClick={handleClick}/>
        <Button value="children" children='Children' onClick={handleClick}/>
        <Button value="college" children='College' onClick={handleClick}/>
        <Button value="party" children='Party' onClick={handleClick}/>
      </SC.ButtonContainer>
    
      {excuse && (
        excuse.map(item => (
          <div key={item.id}>
            <h3 data-testid="text-test">{item.excuse}</h3>
          </div>
        ))
      )}
    </SC.Container>
  )
}