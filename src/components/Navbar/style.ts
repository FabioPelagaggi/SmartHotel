import styled from 'styled-components';

export const NavbarSection = styled.aside`
  display: flex;
  position: absolute;
  z-index: 999;
  width: 15rem;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.blue['light']};
`;

export const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  
  color: white;
`;

export const NavMenuItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const MenuText = styled.div`
  font-weight: bold;
  font-size: 1rem;
  color: black;
`;
