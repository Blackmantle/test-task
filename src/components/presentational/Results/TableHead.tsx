import React from 'react';
import styled from 'styled-components';
import { TR } from './ResultTable';

const TH = styled.th.attrs(({ width }: { width: string | number }) => ({ width }))`
    width: width;
    padding: 0 10px;
    text-align: ${({ textAlign = 'center' }: { textAlign?: string }) => textAlign};
    color: #4F525A;
    border: 1px solid #E6E6E6;
`;

const TableHead: React.FC = () => {
    return (
        <thead>
            <TR bgColor="#F3F3F3">
                <TH width={45}></TH>
                <TH textAlign="left">Наименование</TH>
                <TH>Кол-во</TH>
                <TH>Цена за ед, ₽</TH>
                <TH>Стоимость, ₽</TH>
                <TH width={45}></TH>
            </TR>
        </thead>
    );
};

export default TableHead;