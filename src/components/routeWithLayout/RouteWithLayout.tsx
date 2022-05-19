import React from 'react';
import { Route, RouteProps } from 'react-router';

export interface RouteWithLayoutProps extends RouteProps {
    layout: React.FunctionComponent<any>;
}

export const RouteWithLayout: React.FC<RouteWithLayoutProps> = ({
                                                                    layout: Layout,
                                                                    element,
                                                                    ...rest
                                                                }) => {
    return <Layout>{element}</Layout>;
};