import {render, screen} from '@testing-library/react';
import { SelectExcuse } from './SelectExcuse';

describe('Select Excuse ', () => {
  it('Should render list of buttons', () => {
    const {getByText} = render(<SelectExcuse />)
   
    expect(getByText('Family')).toBeInTheDocument();
    // expect(getByText('Office')).toBeInTheDocument();
    // expect(getByText('Children')).toBeInTheDocument();
    // expect(getByText('College')).toBeInTheDocument();
    // expect(getByText('Party')).toBeInTheDocument();
  })
})