import styled from 'styled-components';

export const UserDataSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

`;

export const UserImg = styled.div`
  padding: 1rem;

  img {
    border-radius: 50%;
  }
`;

export const UserText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 0.25rem;
`;

export const UserName = styled.div`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.black['darkGrey']};
`;

export const UserEmail = styled.div`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.gray['steelBlue']};
`;
