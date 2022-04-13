import { useState } from 'react'
import { SelectExcuse } from '../../components/SelectExcuse/SelectExcuse'
import { useFetch } from '../../hooks/useFetch'
import * as SC from './styles'
export const Home = () => {
 
  return (
    <SC.Container>
     <h1>Hello, do you need a excuse for some reason ?</h1>  
      <h3>
         You don't want go out or want stay play some games.
         let me help you.
      </h3>
      <SelectExcuse />
    </SC.Container>
  )
}