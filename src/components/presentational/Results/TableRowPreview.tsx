import React from 'react';
import styled from 'styled-components';

const PreviewContainer = styled.div`
    width: 24px;
    height: 24px;
    border: 1px solid #E6E6E6;
    border-radius: 50%;
`;

interface IProps {
    src: string,
}

const TableRowPreview: React.FC<IProps> = ({ src }) => {
    return (
        <PreviewContainer>
            <img src={src} alt="Preview" />
        </PreviewContainer>
    );
};

export default TableRowPreview;