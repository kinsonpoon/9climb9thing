import React from 'react';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles({
    title: {
        fontSize: 40,
        display: 'flex'
    },
});

export const HomePage = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.title}>
                <div className={'waviy'}>Hi</div>
                <div style={{width: 12}}> </div>
                <div className={'flipX'}>I am Kinson</div>
            </div>
        </div>)
}