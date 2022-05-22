
import React from 'react';
import {SideBar} from "../components/sidebar/SideBar";



interface Props {
    children: any;
}

const MainLayout: React.FC<Props> = (props) => {
    const { children } = props;
    // const classes = useStyles();
    return (
        <div >
            <SideBar />
            <main >{children}</main>
        </div>
    );
};

export default MainLayout;