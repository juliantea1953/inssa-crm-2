import { File, Image, Video, Music, Package } from "react-feather";
import { Nav, NavLink } from "@doar/components";
import Label from "../label";
import { StyledWrap } from "./style";

const FileLibrary = () => {
    return (
        <>
            <StyledWrap>
                <Label pl={10}>File Library</Label>
                <Nav customStyle="sidebar">
                    <NavLink path="#!">
                        <File />
                        <span>Documentos</span>
                    </NavLink>
                    <NavLink path="#!">
                        <Image />
                        <span>Imagenes</span>
                    </NavLink>
                    <NavLink path="#!">
                        <Video />
                        <span>Videos</span>
                    </NavLink>
                    <NavLink path="#!">
                        <Music />
                        <span>Audios</span>
                    </NavLink>
                    <NavLink path="#!">
                        <Package />
                        <span>Archivos zip</span>
                    </NavLink>
                </Nav>
            </StyledWrap>
        </>
    );
};

export default FileLibrary;
