import { ChartLine } from 'phosphor-react';
import UserData from "../UserData";
import { MenuText, NavbarSection, NavMenu, NavMenuItem } from "./style";

export default function Navbar() {
    return (
        <NavbarSection>
            <NavMenu>
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