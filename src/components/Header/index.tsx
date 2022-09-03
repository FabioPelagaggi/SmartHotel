import SmartHotelLogo from '../SmartHotelLogo'
import { HeaderContainer, LogoContainer } from './styles'

export default function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <SmartHotelLogo />
      </LogoContainer>
    </HeaderContainer>
  )
}
