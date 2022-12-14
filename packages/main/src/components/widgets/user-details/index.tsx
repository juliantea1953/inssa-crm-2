import { Anchor, Button } from "@doar/components";
import {
    StyledName,
    StyledUserName,
    StyledBtnWrap,
    StyledDesc,
    StyledBottom,
    StyledSkillset,
    StyledSkillNumb,
    StyledSkillLabel,
} from "./style";

const UserDetails = () => {
    return (
        <>
            <div>
                <StyledName>Pepito Perez</StyledName>
                <StyledUserName>Pepito1234@gmail.com</StyledUserName>
                <StyledBtnWrap>
                    <Button size="xs" color="white">
                        Mensaje
                    </Button>
                    <Button size="xs" ml="10px">
                        Follow
                    </Button>
                </StyledBtnWrap>
                <StyledDesc>
                    Redhead, Innovator, Saviour of Mankind, Hopeless Romantic,
                    Attractive 20-something Yogurt Enthusiast...{" "}
                    <Anchor path="#!">Read More</Anchor>
                </StyledDesc>
                <StyledBottom>
                    <StyledSkillset>
                        <StyledSkillNumb>
                            <Anchor path="#!" color="text">
                                1.4k
                            </Anchor>
                        </StyledSkillNumb>
                        <StyledSkillLabel>Stars</StyledSkillLabel>
                    </StyledSkillset>
                    <StyledSkillset>
                        <StyledSkillNumb>
                            <Anchor path="#!" color="text">
                                2.8k
                            </Anchor>
                        </StyledSkillNumb>
                        <StyledSkillLabel>Followers</StyledSkillLabel>
                    </StyledSkillset>
                    <StyledSkillset>
                        <StyledSkillNumb>
                            <Anchor path="#!" color="text">
                                437
                            </Anchor>
                        </StyledSkillNumb>
                        <StyledSkillLabel>Following</StyledSkillLabel>
                    </StyledSkillset>
                </StyledBottom>
            </div>
        </>
    );
};

export default UserDetails;
