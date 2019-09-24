import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { loginValidate as validate } from '../../utils';
import LoginForm from '../presentational/Login/LoginForm';
import Copyright from '../presentational/Copyright';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    copyright: {
        marginTop: '65px',
    },
});

interface IProps extends RouteComponentProps { }

const Login: React.FC<IProps> = (props) => {
    const [formFields, setFormFields] = useState({
        email: '',
        password: '',
        isPasswordSaved: false,
    });
    const [errors, setErrors] = useState<any>({
        email: '',
        password: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (localStorage.getItem('jwt')) {
        props.history.push('/results');
    }

    const handleChange = (name: string, isCheckable: boolean = false) => (e: any) => {
        const value = !isCheckable ? e.target.value : e.target.checked;
        if (errors[name]) {
            const errors = validate({ [name]: value });
            setErrors((prev: any) => ({ ...prev, ...errors }));
        }
        setFormFields({ ...formFields, [name]: value });
    };

    const handleBlur = (name: string) => (e: any) => {
        const value = e.target.value;
        const errors = validate({ [name]: value });
        setErrors((prev: any) => ({ ...prev, ...errors }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const errors = validate(formFields);
        for (const field in errors) {
            if (errors[field]) {
                setErrors(errors);
                return;
            }
        }

        setIsSubmitting(true);
        setTimeout(() => {
            localStorage.setItem('jwt', '86fasfgfsogHGad');
            props.history.push('/results');
        }, 1000);
    };

    const classes = useStyles();
    return (
        <div className={classes.container}>
            <LoginForm
                formFields={formFields}
                errors={errors}
                isSubmitting={isSubmitting}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                handleBlur={handleBlur}
            />
            <div className={classes.copyright}>
                <Copyright />
            </div>
        </div>
    );
}

export default Login;
