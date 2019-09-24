import React from 'react';
import { IProduct } from '../../../types';
import TableRow from './TableRow';

interface IProps {
    results: IProduct[],
}

const TableBody: React.FC<IProps> = ({ results }) => {
    return (
        <tbody>
            {
                results.map((result: IProduct, key: number) => (
                    <TableRow
                        key={key}
                        productPreview={result.productPreview}
                        productName={result.productName}
                        productQuantity={result.productQuantity}
                        productQuantityType={result.productQuantityType}
                        priceForOne={result.priceForOne}
                    />
                ))
            }
        </tbody>
    );
};

export default TableBody;