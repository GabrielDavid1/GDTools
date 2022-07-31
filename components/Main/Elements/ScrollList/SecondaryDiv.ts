//React
import styled from 'styled-components';

//Types
import { Config } from '../../../../types/Funcs';

interface Props extends Config{
    direction: string;
}

export const SecondaryDiv = styled.div<Props>`
    display: flex;
    width: ${(p) => p.width};
    height: ${(p) => p.height}; 
    gap: ${(p) => p.gap};
`;