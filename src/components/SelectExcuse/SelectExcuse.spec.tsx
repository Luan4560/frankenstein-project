import { render, screen} from '@testing-library/react';
import { SelectExcuse } from './SelectExcuse';

describe('SelectExcuse Compononent ', () => {
  render(<SelectExcuse />)
  
  it('should render a description', () => {
    const description = screen.getByText('Select the type of excuse 😏')
    expect(description).toBeInTheDocument()
  })

  it('Should render list of buttons', () => {
    render(<SelectExcuse />)

    screen.getByRole('button', {name: /Family/i})
    screen.getByRole('button', {name: /Office/i})
    screen.getByRole('button', {name: /Children/i})
    screen.getByRole('button', {name: /College/i})
    screen.getByRole('button', {name: /Party/i})
  })
})