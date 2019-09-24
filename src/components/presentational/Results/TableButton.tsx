import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';

const Button = styled.button.attrs(({ isClicked }: { isClicked: boolean }) => ({ isClicked }))`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    background-color: ${({ isClicked }) => isClicked ? '#C6213C' : '#FAFAFA'};
    color: ${({ isClicked }) => isClicked ? 'white' : '#6B7F94'};
    border: 1px solid ${({ isClicked }) => isClicked ? '#C6213C' : '#E6E6E6'};
    border-radius: 50%;
    transform: ${({ isClicked }) => isClicked && 'rotate(45deg)'};
    transition: transform 0.3s ease;
    outline: none;
    cursor: pointer;
`;

interface IProps {
    setRowIsActive: React.Dispatch<React.SetStateAction<boolean>>,
}

const TableButton: React.FC<IProps> = ({ setRowIsActive }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(prev => !prev)
        setRowIsActive(prev => !prev);
    };

    return (
        <Button isClicked={isClicked} onClick={handleClick}>
            <FontAwesomeIcon icon={faTimes} />
        </Button>
    );
};

export default TableButton;