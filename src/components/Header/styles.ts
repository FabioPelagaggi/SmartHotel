import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 60px;
  background-color: #ffffff;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 15rem;
  height: 100%;
  border-right: 0.1rem solid ${({ theme }) => theme.colors.gray[200]};
  padding-left: 2rem;

`;

export const HeaderBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 15rem);
  padding: 0 3rem;
  height: 100%;
  color: ${({ theme }) => theme.colors.gray[300]};
`;

export const SearchFieldContainer = styled.div`
  height: 100%;
  display: flex;
  width: 100%;
  align-items: center;
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;
  padding: 1rem 15rem 1rem 1rem;
  border: none;
  outline: none;
`;
