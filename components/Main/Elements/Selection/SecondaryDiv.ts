import styled from 'styled-components';

interface Props {
    direction: string;
}

export const SecondaryDiv = styled.div<Props>`
    width: ${ ( { direction } ) => (direction === 'horizontal') ? '100%' : 'auto'};
    height: ${ ( { direction } ) => (direction === 'vertical') ? '100%' : 'auto'};
`;