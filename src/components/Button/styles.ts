import styled from "styled-components";

export const ButtonContainer = styled.button`
  height: 52px;
  border: none;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.blue.navi};
  font-size: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  color: #fff;
  font-weight: bold;
  border-radius: 4px;
  transition: background-color 0.2s ease-in;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray.steelBlue};
  }
`;