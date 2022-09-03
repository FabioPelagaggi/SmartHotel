import styled from 'styled-components';

export const NavbarSection = styled.aside`
  display: flex;
  position: absolute;
  z-index: 999;
  width: auto;
  height: 100%;
  padding: 2rem;
  background-color: #ffffff;
  
`;

export const NavMenuBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0.2rem;
  background-color: ${({ theme }) => theme.colors.yellow[100]};
`;

export const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  background-color: ${({ theme }) => theme.colors.blue['navi']};
  color: ${({ theme }) => theme.colors.gray['steelBlue']};
`;

export const NavMenuItem = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.red[100]};
`;

export const MenuText = styled.div`
  font-weight: bold;
  font-size: 1rem;
  color: black;
`;
