import styled from 'styled-components';

export const SmartHotelSection = styled.a`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.blue.navi};
  cursor: pointer;

  span {
    font-weight: bolder;
    color: ${({ theme }) => theme.colors.gray[900]};
  }
`;