import React from 'react';
import { render } from '../../util/testHelper/test-helper';
import Header from "./Header";

test('<Header />', () => {
    const { getByText } = render(<Header />);
    expect(getByText('Customers')).toBeInTheDocument();
    expect(getByText('Add')).toBeInTheDocument();
})