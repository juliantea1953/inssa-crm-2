import { useState } from "react";
import { Save, Upload, Share2, Sliders } from "react-feather";
import Breadcrumb from "../../../components/breadcrumb";
import ModalSave from "../../../components/dashboard-two/modal-save";
import ModalExport from "../../../components/dashboard-two/modal-export";
import ModalShare from "../../../components/dashboard-two/modal-share";

import {
    StyledWelcomeArea,
    StyledWelcomeLeft,
    StyledWelcomeRight,
    StyledButton,
} from "./style";

const WelcomeArea = () => {
    const [showSaveModal, setShowSaveModal] = useState(false);
    const [showExportModal, setShowExportModal] = useState(false);
    const [showShareModal, setShowShareModal] = useState(false);
    const handleShowSaveModal = () => {
        setShowSaveModal((prev) => !prev);
    };
    const handleShowExportModal = () => {
        setShowExportModal((prev) => !prev);
    };
    const handleShowShareModal = () => {
        setShowShareModal((prev) => !prev);
    };
    return (
        <>
            <StyledWelcomeArea>
                <StyledWelcomeLeft>
                    <Breadcrumb
                        prev={[{ text: "Dashboard", link: "/" }]}
                        title="Análisis de sitios web"
                        wcText="Bienvenido al Dashboard"
                    />
                </StyledWelcomeLeft>
                <StyledWelcomeRight>
                    <StyledButton
                        size="sm"
                        color="white"
                        hasIcon
                        mt="10px"
                        onClick={handleShowSaveModal}
                    >
                        <Save />
                        Guardar
                    </StyledButton>
                    <StyledButton
                        size="sm"
                        color="white"
                        hasIcon
                        mt="10px"
                        ml="8px"
                        onClick={handleShowExportModal}
                    >
                        <Upload />
                        Exportar
                    </StyledButton>
                    <StyledButton
                        size="sm"
                        color="white"
                        hasIcon
                        mt="10px"
                        ml={[null, "8px"]}
                        onClick={handleShowShareModal}
                    >
                        <Share2 />
                        Compartir
                    </StyledButton>
                    <StyledButton
                        path="#!"
                        size="sm"
                        hasIcon
                        mt="10px"
                        ml="8px"
                    >
                        <Sliders />
                        Configuraciones
                    </StyledButton>
                </StyledWelcomeRight>
            </StyledWelcomeArea>
            <ModalSave show={showSaveModal} onClose={handleShowSaveModal} />
            <ModalExport
                show={showExportModal}
                onClose={handleShowExportModal}
            />
            <ModalShare show={showShareModal} onClose={handleShowShareModal} />
        </>
    );
};

export default WelcomeArea;
