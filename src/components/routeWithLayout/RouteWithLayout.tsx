import React from 'react';
import { RouteProps } from 'react-router';

export interface RouteWithLayoutProps extends RouteProps {
    layout: React.FunctionComponent<any>;
}

export const RouteWithLayout: React.FC<RouteWithLayoutProps> = ({
                                                                    layout: Layout,
                                                                    element,
                                                                    ...rest
                                                                }) => {
    return <Layout children={element}/>;
};