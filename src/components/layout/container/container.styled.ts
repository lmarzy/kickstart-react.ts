import styled from 'styled-components';

export const StyledContainer = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding-left: ${({ theme }) => theme.spacers[4]};
  padding-right: ${({ theme }) => theme.spacers[4]};
`;
