import React from 'react';
import { render } from '../../../util/testHelper/test-helper';
import Search from "./Search";

test('<Search />', () => {
    const { getByTestId } = render(<Search />);
    expect(getByTestId('search-input')).toBeInTheDocument();
})