import SmartHotelLogo from "../SmartHotelLogo";
import UserData from "../UserData";
import { ChartLine, } from 'phosphor-react';
import { MenuText, NavbarSection, NavMenu, NavMenuItem } from "./style";

export default function Navbar() {
    return (
        <NavbarSection>
            <NavMenu>
                <SmartHotelLogo />
                <UserData />
                <NavMenu>
                    <NavMenuItem>
                        <ChartLine size={20} />
                        <MenuText>Painel</MenuText>
                    </NavMenuItem>
                </NavMenu>
            </NavMenu>
        </NavbarSection>
    )
}