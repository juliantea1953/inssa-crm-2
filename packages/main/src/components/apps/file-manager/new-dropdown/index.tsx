import { ChevronDown, Folder, File, FileText } from "react-feather";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    DropdownDivider,
} from "@doar/components";

const NewDropdown = () => {
    return (
        <Dropdown direction="down">
            <DropdownToggle
                size="xs"
                color="white"
                fullwidth
                hasIcon
                iconSize="xs"
                iconPosition="right"
                iconSpace="5px"
                className="btn-white"
            >
                Nuevo
                <ChevronDown />
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem path="#!">
                    <Folder />
                    <span>Carpeta</span>
                </DropdownItem>
                <DropdownItem path="#!">
                    <File />
                    <span>Nota</span>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem path="#!">
                    <FileText />
                    <span>Documento Word</span>
                </DropdownItem>
                <DropdownItem path="#!">
                    <FileText />
                    <span>Powepoint</span>
                </DropdownItem>
                <DropdownItem path="#!">
                    <FileText />
                    <span>Excel</span>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

export default NewDropdown;
