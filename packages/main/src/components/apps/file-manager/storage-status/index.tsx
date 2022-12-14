import { Database } from "react-feather";
import { Media, MediaBody, Text, Progress, Anchor } from "@doar/components";
import Label from "../label";
import { StyledWrap } from "./style";

const StorageStatus = () => {
    return (
        <StyledWrap>
            <Label mb="15px">Estado de almacenamiento</Label>
            <Media>
                <Database size={30} />
                <MediaBody pl={10}>
                    <Text fontSize={12} mb="4px">
                        10.2GB de 50GB
                    </Text>
                    <Progress now={15} height="3px" mb={20} />
                </MediaBody>
            </Media>
        </StyledWrap>
    );
};

export default StorageStatus;
