import React from 'react';
import styled from 'styled-components';
import { IResults } from '../../../types';
import TableHead from './TableHead';
import TableBody from './TableBody';

const Table = styled.table`
    position: relative;
    width: 100%;
    border-collapse: collapse;
    ::before {
        content: '';
        display: flex;
        position: absolute;
        top: 40px;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #E6E6E6;
    }
`;

const Caption = styled.caption`
    margin-bottom: 50px;
    font-size: 18px;
    font-weight: bold;
    text-align: left;
    color: #C6213C;
`;

const Loading = styled.caption`
    text-align: left;
`;

export const TR = styled.tr`
    height: 40px;
    font-size: 14px;
    background-color: ${({ bgColor }: { bgColor?: string }) => bgColor};
`;

interface IProps {
    results: IResults,
}

const ResultTable: React.FC<IProps> = ({ results: { isLoading, data }}) => {
    return (
        <Table>
            <Caption>Результаты расчёта</Caption>
            {
                isLoading
                    ? <Loading>Загрузка таблицы...</Loading>
                    : (
                        <>
                            <TableHead />
                            <TableBody results={data} />
                        </>
                    )
            }
        </Table>
    );
};

export default ResultTable;