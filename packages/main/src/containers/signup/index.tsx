import loginImage from "@doar/shared/images/img16.png";
import SignupForm from "../../components/signup-form";
import {
    StyledMedia,
    StyledMediaBody,
    StyledImage,
    StyledImgText,
    StyledSignin,
} from "./style";

const AuthContainer = () => {
    return (
        <StyledMedia>
            <StyledSignin>
                <SignupForm />
            </StyledSignin>
            <StyledMediaBody>
                <StyledImage>
                    <img src={loginImage} alt="Login" />
                </StyledImage>
            </StyledMediaBody>
        </StyledMedia>
    );
};

export default AuthContainer;
