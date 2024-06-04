import React from 'react';
import { render } from '../../../util/testHelper/test-helper'
import Select from "./Select";

test('<Select />', () => {
    const {getByText} = render(<Select options={['Newest']} additionalClassName={''} />);
    expect(getByText('Newest')).toBeInTheDocument()
})