import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

interface IProps {
    to: string,
}

const FormLink: React.FC<IProps> = ({ to, children }) => {
    return (
        <Link
            component={RouterLink}
            to={to}
            variant="body2"
            color="primary"
        >
            {children}
        </Link>
    );
};

export default FormLink;