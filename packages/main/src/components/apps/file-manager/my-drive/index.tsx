import { Folder, Monitor, Clock, Star, Trash } from "react-feather";
import { Nav, NavLink } from "@doar/components";
import Label from "../label";
import { StyledWrap } from "./style";

const MyDrive = () => {
    return (
        <StyledWrap>
            <Label pl={10}>Mi Drive</Label>
            <Nav customStyle="sidebar">
                <NavLink path="#!" active>
                    <Folder />
                    <span>Todos los archivos</span>
                </NavLink>
                <NavLink path="#!">
                    <Monitor />
                    <span>Mis dispositivos</span>
                </NavLink>
                <NavLink path="#!">
                    <Clock />
                    <span>Recientes</span>
                </NavLink>
                <NavLink path="#!">
                    <Star />
                    <span>Importantes</span>
                </NavLink>
                <NavLink path="#!">
                    <Trash />
                    <span>Papelera</span>
                </NavLink>
            </Nav>
        </StyledWrap>
    );
};

export default MyDrive;
