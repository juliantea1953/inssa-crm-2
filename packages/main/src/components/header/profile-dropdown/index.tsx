import {
    Edit3,
    User,
    HelpCircle,
    LifeBuoy,
    Settings,
    LogOut,
} from "react-feather";
import {
    DropdownToggle,
    Dropdown,
    Avatar,
    AvatarInitial,
} from "@doar/components";
import {
    StyledDropMenu,
    StyledAuthorName,
    StyledAuthorRole,
    StyledDropItem,
    StyledDivider,
    StyledAvatar,
} from "./style";

const ProfileDropdown = () => {
    return (
        <Dropdown direction="down" className="dropdown-profile">
            <DropdownToggle variant="texted">
                <StyledAvatar size="sm" shape="circle">
                    <AvatarInitial>df</AvatarInitial>
                </StyledAvatar>
            </DropdownToggle>
            <StyledDropMenu>
                <Avatar size="lg" shape="circle">
                    <AvatarInitial>KP</AvatarInitial>
                </Avatar>
                <StyledAuthorName>Katherine Pechon</StyledAuthorName>
                <StyledAuthorRole>Administrador</StyledAuthorRole>
                <StyledDropItem path="/profile-view">
                    <Edit3 size="24" />
                    Editar perfil
                </StyledDropItem>
                <StyledDropItem path="/profile-view" mt="10px">
                    <User size="24" />
                    Ver perfil
                </StyledDropItem>
                <StyledDivider />
                <StyledDropItem
                    path="https://hasthemes.com/contact-us/"
                    mt="10px"
                >
                    <HelpCircle size="24" />
                    Centro de ayuda
                </StyledDropItem>
                <StyledDropItem path="/" mt="10px">
                    <LifeBuoy size="24" />
                    Foro
                </StyledDropItem>
                <StyledDropItem path="/profile-view" mt="10px">
                    <Settings size="24" />
                    Configuraciones de la cuenta
                </StyledDropItem>
                <StyledDropItem path="/profile-view" mt="10px">
                    <Settings size="24" />
                    Configuración de privacidad
                </StyledDropItem>
                <StyledDropItem path="/signin" mt="10px">
                    <LogOut size="24" />
                    Desconectar
                </StyledDropItem>
            </StyledDropMenu>
        </Dropdown>
    );
};

export default ProfileDropdown;
