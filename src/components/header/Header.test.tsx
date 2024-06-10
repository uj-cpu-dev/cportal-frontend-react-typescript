import React from 'react';
import { render } from '../../util/testHelper/test-helper';
import Header from "./Header";

test('should render and show button', () => {
    const { getByText } = render(<Header showButton btnText={'Add'} />);
    expect(getByText('Add')).toBeInTheDocument();
})

test('should render and not show button', () => {
    const { getByText, queryByText } = render(<Header showButton={false} btnText={'Add'} />);
    expect(queryByText('Add')).not.toBeInTheDocument();
})