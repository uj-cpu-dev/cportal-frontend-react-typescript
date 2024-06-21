import React from 'react';
import { render } from '../../../util/testHelper/test-helper';
import Button from "./Button";

test('<Button />', () => {
    const { getByText } = render(<Button disabled={false} onClick={() => jest.fn()} title={'test button'} additionalClassName={'test-btn-class'} />);
    expect(getByText('test button')).toBeInTheDocument();
})