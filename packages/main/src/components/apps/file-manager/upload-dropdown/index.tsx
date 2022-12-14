import { ChevronDown, Folder, File } from "react-feather";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from "@doar/components";

const UploadDropdown = () => {
    return (
        <Dropdown direction="down">
            <DropdownToggle
                size="xs"
                fullwidth
                hasIcon
                iconSize="xs"
                iconPosition="right"
                iconSpace="5px"
            >
                Subir
                <ChevronDown />
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem path="#!">
                    <File />
                    <span>Archivo</span>
                </DropdownItem>
                <DropdownItem path="#!">
                    <Folder />
                    <span>Carpeta</span>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

export default UploadDropdown;
