import React from 'react';
import { render } from '../../util/testHelper/test-helper';
import Header from "./Header";

test('should render and show button', () => {
    const { getByText } = render(<Header title={'Customers'} showButton />);
    expect(getByText('Customers')).toBeInTheDocument();
    expect(getByText('Add')).toBeInTheDocument();
})

test('should render and not show button', () => {
    const { getByText, queryByText } = render(<Header title={'Customers'} showButton={false} />);
    expect(getByText('Customers')).toBeInTheDocument();
    expect(queryByText('Add')).not.toBeInTheDocument();
})