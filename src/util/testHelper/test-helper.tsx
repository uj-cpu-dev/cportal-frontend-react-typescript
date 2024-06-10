import React, { ReactElement, FC } from 'react';
import { render, RenderOptions, screen } from '@testing-library/react';
import AppContext from "../../context/app-context";

interface ProvidersProps {
    children: React.ReactNode;
};

const GlobalProviders:FC<ProvidersProps> = ({ children }) => {
    return <AppContext> {children} </AppContext>
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => render(ui, { wrapper: GlobalProviders, ...options });

export { customRender as render, screen };