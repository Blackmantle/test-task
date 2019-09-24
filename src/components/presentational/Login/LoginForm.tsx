import React from 'react';
import { ILoginFields } from '../../../types';
import { makeStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import blue from '@material-ui/core/colors/blue';
import LoginIcon from './LoginIcon';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import SubmitButton from './SubmitButton';
import FormLink from './FormLink';

const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
});

const useStyles = makeStyles({
    form: {
        maxWidth: '380px',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    fieldset: {
        marginTop: '34px',
        border: 'none',
    },
    title: {
        marginTop: '10px',
    },
    inputs: {
        '& > *:not(:first-child)': {
            marginTop: '25px',
        },
    },
    input: {
        maxWidth: '380px',
        height: '56px',
    },
    checkbox: {
        marginTop: '15px',
        userSelect: 'none',
    },
    submitBtn: {
        marginTop: '25px',
    },
    bottomLinks: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '15px',
    },
});

interface IProps {
    handleSubmit: (e: any) => void,
    isSubmitting: boolean,
    formFields: ILoginFields,
    handleChange: (name: string, isCheckable?: boolean) => (e: any) => void,
    handleBlur: (name: string) => (e: any) => void,
    errors: {
        email: string,
        password: string,
    }
}

const LoginForm: React.FC<IProps> = (props) => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <form className={classes.form} onSubmit={props.handleSubmit}>
                <div className={classes.header}>
                    <LoginIcon />
                    <Typography className={classes.title} variant="h5">Вход в аккаунт</Typography>
                </div>
                <fieldset className={classes.fieldset} disabled={props.isSubmitting}>
                    <div className={classes.inputs}>
                        <TextField
                            label="Почта*"
                            className={classes.input}
                            value={props.formFields.email}
                            onChange={props.handleChange('email')}
                            onBlur={props.handleBlur('email')}
                            error={!!props.errors.email}
                            helperText={props.errors.email}
                            autoComplete="email"
                            variant="outlined"
                            fullWidth
                        />
                        <TextField
                            label="Пароль*"
                            className={classes.input}
                            value={props.formFields.password}
                            onChange={props.handleChange('password')}
                            onBlur={props.handleBlur('password')}
                            error={!!props.errors.password}
                            helperText={props.errors.password}
                            type="password"
                            autoComplete="current-password"
                            variant="outlined"
                            fullWidth
                        />
                    </div>
                    <FormControlLabel
                        className={classes.checkbox}
                        control={
                            <Checkbox
                                checked={props.formFields.isPasswordSaved}
                                onChange={props.handleChange('isPasswordSaved', true)}
                                value="is-password-saved"
                                color="primary"
                            />
                        }
                        label="Запомнить меня"
                    />
                    <div className={classes.submitBtn}>
                        <SubmitButton>Войти в аккаунт</SubmitButton>
                    </div>
                </fieldset>
                <div className={classes.bottomLinks}>
                    <FormLink to="/login">Забыли пароль?</FormLink>
                    <FormLink to="/login">Ещё нет аккаунта? Регистрация</FormLink>
                </div>
            </form>
        </ThemeProvider>
    );
}

export default LoginForm;
