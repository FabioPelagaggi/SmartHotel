import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  width: 100vw;
  height: 60px;
  background-color: #ffffff;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

export const LogoContainer = styled.div`
  width: 15rem;
`;