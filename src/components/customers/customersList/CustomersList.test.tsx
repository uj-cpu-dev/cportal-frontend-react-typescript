import React from 'react';
import { render } from '../../../util/testHelper/test-helper';
import CustomersList from "./CustomersList";

test('<CustomersList />', async() => {
    render(<CustomersList/>)
})