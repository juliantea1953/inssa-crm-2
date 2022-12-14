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

const ModalSave = ({ show, onClose }: IProps) => {
    return (
        <Modal show={show} onClose={onClose}>
            <ModalHeader>
                <ModalTitle>Guardar el Reporte</ModalTitle>
                <ModalClose onClose={onClose}>
                    <X />
                </ModalClose>
            </ModalHeader>
            <ModalBody>
                <p>¿Quieres guardar el informe?</p>
            </ModalBody>
            <ModalFooter>
                <Button>Guardar</Button>
                <Button color="secondary" onClick={onClose}>
                    Cancelar
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default ModalSave;
