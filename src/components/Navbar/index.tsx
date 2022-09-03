import { ChartLine } from 'phosphor-react';
import UserData from "../UserData";
import { MenuText, NavbarSection, NavMenuBox, NavMenu, NavMenuItem } from "./style";

export default function Navbar() {
    return (
        <NavbarSection>
            <NavMenuBox>
                <UserData />
                <NavMenu>
                    <NavMenuItem>
                        <ChartLine />
                        <MenuText>Painel</MenuText>
                    </NavMenuItem>
                </NavMenu>
            </NavMenuBox>
        </NavbarSection>
    )
}