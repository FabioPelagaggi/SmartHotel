import { ButtonContainer } from "./styles";

interface Props {
  children: String;
}

export default function Button({ children }: Props) {
  return (
    <ButtonContainer>
      { children }
    </ButtonContainer>
  )
}
