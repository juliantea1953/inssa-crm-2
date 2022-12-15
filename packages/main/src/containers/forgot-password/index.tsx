import { Button, Input } from "@doar/components";
import image from "@doar/shared/images/img18.png";
import {
    StyledWrap,
    StyledImg,
    StyledTitle,
    StyledDesc,
    StyledResetForm,
    StyledNote,
} from "./style";
import { Auth } from "aws-amplify";

// Send confirmation code to user's email
/* Auth.forgotPassword(username)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// Collect confirmation code and new password, then
Auth.forgotPasswordSubmit(username, code, new_password)
  .then((data) => console.log(data))
  .catch((err) => console.log(err)); */

const PasswordContainer = () => {
    return (
        <StyledWrap>
            <StyledImg>
                <img src={image} alt="forgot password" />
            </StyledImg>
            <StyledTitle>Restablece tu contraseña</StyledTitle>
            <StyledDesc>
                Ingresa tu dirección de correo electrónico y te enviaremos un
                enlace para restablecer tu contraseña.
            </StyledDesc>
            <StyledResetForm>
                <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Ingresa tu dirección de correo electrónico"
                    width={[null, "250px"]}
                />
                <Button
                    type="submit"
                    color="brand2"
                    mt={["10px", 0]}
                    ml={[0, "10px"]}
                >
                    Restablece tu contraseña
                </Button>
            </StyledResetForm>
            {/* <StyledNote>
                Key business concept vector is created by{" "}
                <a
                    href="https://www.freepik.com/free-photos-vectors/background"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    freepik (freepik.com)
                </a>
            </StyledNote> */}
        </StyledWrap>
    );
};

export default PasswordContainer;
