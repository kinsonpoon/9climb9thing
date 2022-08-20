
import React from 'react';
import {SideBar} from "../components/sidebar/SideBar";

interface Props {
    children: any;
}

const drawerWidth = 240;

const MainLayout: React.FC<Props> = (props) => {
    const { children } = props;
    console.log(children)
    // const classes = useStyles();
    return (
        <div style={{display: 'flex'}}>
            <SideBar drawerWidth={drawerWidth}/>
            <main>{children}</main>
        </div>
    );
};

export default MainLayout;