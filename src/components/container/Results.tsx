import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchResults } from '../../actions';
import { RouteProps } from 'react-router-dom';
import { IResults } from '../../types';
import styled from 'styled-components';
import ResultTable from '../presentational/Results/ResultTable';

const Container = styled.div`
    padding: 35px 55px;
`;

const Results: React.FC<RouteProps> = () => {
    const results = useSelector((state: { results: IResults }) => state.results);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchResults());
    }, [dispatch]);

    return (
        <Container>
            <ResultTable results={results} />
        </Container>
    );
};

export default Results;