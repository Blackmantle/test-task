import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface IProps extends RouteProps {
    render: (props: RouteProps) => JSX.Element,
}

const PrivateRoute: React.FC<IProps> = ({ render, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => (
                localStorage.getItem('jwt')
                ? render(props)
                : <Redirect to={{pathname: '/login', state: {from: props.location}}} />
            )}
        />
    );
}

export default PrivateRoute;