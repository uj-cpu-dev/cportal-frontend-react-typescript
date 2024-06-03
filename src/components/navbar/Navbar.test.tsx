import React from 'react'
import { render } from '../../util/testHelper/test-helper'
import Navbar from "./Navbar";

test('<NavBar />', () => {
    const { getByText, getByTestId } = render(<Navbar />)
    expect(getByTestId('comp-logo')).toBeInTheDocument();
    expect(getByText('UJ-Portal')).toBeInTheDocument();
})
