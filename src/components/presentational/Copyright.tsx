import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    copyright: {
        color: 'gray',
    },
});

const Copyright: React.FC = () => {
    const classes = useStyles();
    return (
        <Typography
            className={classes.copyright}
            variant="body2"
            align="center"
        >
            Copyright© Ваш сайт 2019.
        </Typography>
    );
};

export default Copyright;