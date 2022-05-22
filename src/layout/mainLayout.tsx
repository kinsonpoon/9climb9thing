
import React from 'react';
import {SideBar} from "../components/sidebar/SideBar";

export const SIDEBAR_WIDTH = 250;

interface Props {
    children: any;
}

const MainLayout: React.FC<Props> = (props) => {
    const { children } = props;
    // const classes = useStyles();
    return (
        <div >
            <SideBar width={SIDEBAR_WIDTH} />
            <main >{children}</main>
        </div>
    );
};

export default MainLayout;