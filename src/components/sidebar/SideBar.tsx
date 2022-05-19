import React from 'react';
import  {styled} from "@mui/material";

import { List, ListItem, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

const Sidebar = styled('div')((props: SideBarProps) =>  ({

        width: props.width,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: props.width,
            boxSizing: 'border-box',
        },

    listItem: {
        display: 'flex',
        alignItems: 'center',
        height: 40,
        marginBottom: 6,
        borderRadius: 12,
        '&.MuiListItem-gutters': {
            paddingLeft: 9,
        },
        '&.MuiListItem-root:hover': {
            // backgroundColor: theme.palette.grey[50],

            // fontWeight: theme.typography.fontWeightBold,
            '&:hover $navIcon': {
                // color: theme.palette.grey[400],
            },
            '&:hover $listItemText': {
                // color: theme.palette.grey[700],
            },
        },
        '&.MuiListItem-root.Mui-selected:hover': {
            // backgroundColor: theme.palette.primary.light,
        },
        '&.MuiListItem-root.Mui-selected': {
            // backgroundColor: theme.palette.primary.light,
        },
    },
}));

interface SideBarProps{
    width: any
}

export const SideBar = (props: SideBarProps) =>{
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
            <List >
                <ListItem
                    // key
                    button
                    selected={true}
                    component={Link}
                    to="/home"
                >
                        Home
                    <Typography>
                        Home
                    </Typography>
                </ListItem>
            </List>
    );
}