import React, { useState } from 'react';
import styled from 'styled-components';
import { IProduct } from '../../../types';
import { TR } from './ResultTable';
import Currency from 'react-currency-formatter';
import TableRowPreview from './TableRowPreview';
import TableButton from './TableButton';

const TD = styled.td`
    padding: 0 10px;
    text-align: ${({ textAlign = 'center' }: { textAlign?: string }) => textAlign};
    vertical-align: middle;
    color: #364657;
    border: 1px solid #E6E6E6;
`;

const TableRow: React.FC<IProduct> = ({
    productPreview,
    productName,
    productQuantity,
    productQuantityType,
    priceForOne 
}) => {
    const [rowIsActive, setRowIsActive] = useState(false);

    return (
        <TR bgColor={rowIsActive ? '#FAFAFA' : ''}>
            <TD>
                <TableRowPreview src={productPreview} />
            </TD>
            <TD textAlign="left">{productName}</TD>
            <TD>{productQuantity} {productQuantityType}.</TD>
            <TD>
                <Currency
                    quantity={priceForOne}
                    currency="RUB"
                    symbol=""
                    decimal="."
                    locale="ru"
                />
            </TD>
            <TD>
                <Currency
                    quantity={priceForOne * productQuantity}
                    currency="RUB"
                    symbol=""
                    decimal="."
                    locale="ru"
                />
            </TD>
            <TD>
                <TableButton setRowIsActive={setRowIsActive} />
            </TD>
        </TR>
    );
};

export default TableRow;