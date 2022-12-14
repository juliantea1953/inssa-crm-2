import { X } from "react-feather";
import {
    Modal,
    ModalHeader,
    ModalTitle,
    ModalClose,
    ModalBody,
    ModalFooter,
    Button,
} from "@doar/components";

interface IProps {
    show: boolean;
    onClose: () => void;
}

const ModalExport = ({ show, onClose }: IProps) => {
    return (
        <Modal show={show} onClose={onClose}>
            <ModalHeader>
                <ModalTitle>Exportar el informe</ModalTitle>
                <ModalClose onClose={onClose}>
                    <X />
                </ModalClose>
            </ModalHeader>
            <ModalBody>
                <p>¿Quieres exportar el informe?</p>
            </ModalBody>
            <ModalFooter>
                <Button>Exportar</Button>
                <Button color="secondary" onClick={onClose}>
                    Cancelar
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default ModalExport;
