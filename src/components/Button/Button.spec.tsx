import {fireEvent, render} from '@testing-library/react'
import { Button } from './Button';

describe('Button' , () => {
  it('should have the button in document', () => {
    const onClick = jest.fn()
    
    const {getByTestId} = render(<Button value='string'  onClick={onClick} children={'a'} data-testid="button"/>)
    const btnElement = getByTestId('button')
    fireEvent.click(btnElement)

    expect(btnElement).toBeInTheDocument()
    expect(btnElement).toHaveAttribute('value', 'string')
    expect(onClick).toHaveBeenCalled()
  })
})