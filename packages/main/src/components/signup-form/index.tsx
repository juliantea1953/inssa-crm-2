import {
    Label,
    FormGroup,
    Input,
    Anchor,
    Button,
    Text,
} from "@doar/components";
import { useForm, SubmitHandler } from "react-hook-form";
import { hasKey } from "@doar/shared/methods";
import {
    StyledWrap,
    StyledTitle,
    StyledDesc,
    StyledDivider,
    StyledBottomText,
} from "./style";

interface IFormValues {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
}

const SigninForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormValues>();

    const onSubmit: SubmitHandler<IFormValues> = (data) => {
        alert(JSON.stringify(data, null));
    };

    return (
        <StyledWrap>
            <StyledTitle>Crear nuevo usuario</StyledTitle>
            {/* <StyledDesc>
                It&apos;s free to signup and only takes a minute.
            </StyledDesc> */}
            <form action="#" onSubmit={handleSubmit(onSubmit)} noValidate>
                <FormGroup mb="20px">
                    <Label display="block" mb="5px" htmlFor="email">
                        Correo
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="correo@.com"
                        feedbackText={errors?.email?.message}
                        state={hasKey(errors, "email") ? "error" : "success"}
                        showState={!!hasKey(errors, "email")}
                        {...register("email", {
                            required: "Correo es requerido",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Correo es invalido",
                            },
                        })}
                    />
                </FormGroup>
                <FormGroup mb="20px">
                    <Label display="block" mb="5px" htmlFor="password">
                        Contraseña
                    </Label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="Ingresa una contraseña"
                        feedbackText={errors?.password?.message}
                        state={hasKey(errors, "password") ? "error" : "success"}
                        showState={!!hasKey(errors, "password")}
                        {...register("password", {
                            required: "Contraseña requerida",
                            minLength: {
                                value: 6,
                                message: "Minimo 6 caracteres",
                            },
                            maxLength: {
                                value: 10,
                                message: "Maximo 10 caracteres",
                            },
                        })}
                    />
                </FormGroup>
                <FormGroup mb="20px">
                    <Label display="block" mb="5px" htmlFor="first_name">
                        Nombre
                    </Label>
                    <Input
                        id="first_name"
                        type="text"
                        placeholder="Ingresa un nombre"
                        feedbackText={errors?.first_name?.message}
                        state={
                            hasKey(errors, "first_name") ? "error" : "success"
                        }
                        showState={!!hasKey(errors, "first_name")}
                        {...register("first_name", {
                            required: "Nombre requerido",
                            minLength: {
                                value: 2,
                                message: "Minimo 2 caracteres",
                            },
                        })}
                    />
                </FormGroup>
                <FormGroup mb="20px">
                    <Label display="block" mb="5px" htmlFor="last_name">
                        Apellido
                    </Label>
                    <Input
                        id="last_name"
                        type="text"
                        placeholder="Ingresa un apellido"
                        feedbackText={errors?.last_name?.message}
                        state={
                            hasKey(errors, "last_name") ? "error" : "success"
                        }
                        showState={!!hasKey(errors, "last_name")}
                        {...register("last_name", {
                            required: "Apellido requerido",
                            minLength: {
                                value: 2,
                                message: "Minimo 2 caracteres",
                            },
                        })}
                    />
                </FormGroup>
                {/* <FormGroup mb="20px">
                    <Text fontSize="12px">
                        By clicking <strong>Create an account</strong> below,
                        you agree to our terms of service and privacy statement.
                    </Text>
                </FormGroup> */}
                <Button type="submit" color="brand2" fullwidth>
                    Sign In
                </Button>
                {/* <StyledDivider>or</StyledDivider>
                <Button variant="outlined" color="facebook" fullwidth>
                    Sign In With Facebook
                </Button>
                <Button
                    variant="outlined"
                    color="twitter"
                    mt="0.5rem"
                    fullwidth
                >
                    Sign In With Twitter
                </Button>
                <StyledBottomText>
                    Don&apos;t have an account?{" "}
                    <Anchor path="/signin">Sign In</Anchor>
                </StyledBottomText> */}
            </form>
        </StyledWrap>
    );
};

export default SigninForm;
