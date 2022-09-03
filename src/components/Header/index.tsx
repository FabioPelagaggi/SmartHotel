import { Bell, MagnifyingGlass } from 'phosphor-react'
import SmartHotelLogo from '../SmartHotelLogo'
import { HeaderBar, HeaderContainer, Input, LogoContainer, SearchFieldContainer } from './styles'

export default function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <SmartHotelLogo />
      </LogoContainer>
      <HeaderBar>
        <SearchFieldContainer>
          <MagnifyingGlass size={24} />
          <Input
            type={'text'}
            name={'busca'}
            placeholder={'Busca'}
          />
        </SearchFieldContainer>
        <Bell size={24} />
      </HeaderBar>
    </HeaderContainer>
  )
}
