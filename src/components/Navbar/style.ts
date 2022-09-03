import styled from 'styled-components';

export const NavbarSection = styled.aside`
  display: flex;
  position: absolute;
  z-index: 999;
  width: 15rem;
  height: 100%;
  background-color: #ffffff;
`;

export const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;

  color: white;
`;

export const NavMenuItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  width: 100%;
`;

export const MenuText = styled.div`
  font-weight: bold;
  font-size: 1rem;
  color: black;
`;
