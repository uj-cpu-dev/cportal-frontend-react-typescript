import React from 'react';
import { render } from '../../util/testHelper/test-helper';
import Header from "./Header";

test('should render and show button', () => {
    const { getByText } = render(<Header handleBackClick={() => jest.fn()} showButton btnText={'Add'} onEditClick={() => jest.fn()} openDeleteModal={() => jest.fn()} />);
    expect(getByText('Add')).toBeInTheDocument();
})

test('should render and not show button', () => {
    const { getByText, queryByText } = render(<Header handleBackClick={() => jest.fn()} showButton={false} btnText={'Add'} onEditClick={() => jest.fn()} openDeleteModal={() => jest.fn()} />);
    expect(queryByText('Add')).not.toBeInTheDocument();
})