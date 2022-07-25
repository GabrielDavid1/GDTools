import styled from 'styled-components';

interface Props {
    direction: string;
}

export const SecondaryDiv = styled.div<Props>`
    display: ${ ( { direction } ) => (direction === 'horizontal') ? 'flex' : 'unset'};
    width: ${ ( { direction } ) => (direction === 'horizontal') ? '100%' : 'auto'};
    height: ${ ( { direction } ) => (direction === 'vertical') ? '100%' : 'auto'};
    gap: ${ ( { direction } ) => (direction !== 'none') ? '10px' : '0px'};
`;