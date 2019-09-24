import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    btn: {
        maxWidth: '380px',
        height: '38px',
        textTransform: 'none',
    },
});

const SubmitButton: React.FC = ({ children }) => {
    const classes = useStyles();
    return (
        <Button
            className={classes.btn}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
        >
            {children}
        </Button>
    );
};

export default SubmitButton;