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

const ModalPrint = ({ show, onClose }: IProps) => {
    return (
        <Modal show={show} onClose={onClose}>
            <ModalHeader>
                <ModalTitle>Imprimir el informe</ModalTitle>
                <ModalClose onClose={onClose}>
                    <X />
                </ModalClose>
            </ModalHeader>
            <ModalBody>
                <p>¿Quieres imprimir el informe?</p>
            </ModalBody>
            <ModalFooter>
                <Button>Imprimir</Button>
                <Button color="secondary" onClick={onClose}>
                    Cancelar
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default ModalPrint;
