import React, { ReactElement, FC } from 'react';
import { render, RenderOptions, screen } from '@testing-library/react';
import AppContext from "../../context/app-context";
import {BrowserRouter} from "react-router-dom";

interface ProvidersProps {
    children: React.ReactNode;
};
const GlobalProviders:FC<ProvidersProps> = ({ children }) => {
    return (
            <AppContext>
                <BrowserRouter>
                    {children}
                </BrowserRouter>
            </AppContext>

    )
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => render(ui, { wrapper: GlobalProviders, ...options });

export { customRender as render, screen };