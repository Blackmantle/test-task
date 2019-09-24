import React from 'react';
import { makeStyles } from '@material-ui/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: '#E10050',
    },
    icon: {
        color: 'white',
    }
});

const LoginIcon: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <LockOutlinedIcon className={classes.icon} />
        </div>
    );
}

export default LoginIcon;
