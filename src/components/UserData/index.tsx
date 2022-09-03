import { UserDataSection, UserEmail, UserImg, UserName, UserText } from "./style";

import Profile from '../../assets/images/profile.png';

export default function UserData() {
    return (
        <UserDataSection>
            <UserImg>
                <img src={Profile} alt={'profile picture'} />
            </UserImg>
            <UserText>
                <UserName>
                    Severina Araújo
                </UserName>
                <UserEmail>
                    s.araujo@gmail.com
                </UserEmail>
            </UserText>
        </UserDataSection>
    )
}