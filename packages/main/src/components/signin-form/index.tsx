import React, { useEffect, useState } from "react";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import awsExports from "../../aws-exports";
import { FormGroup, Label, Input, Anchor, Button } from "@doar/components";
import { useForm, SubmitHandler } from "react-hook-form";
import { hasKey } from "@doar/shared/methods";
import {
    StyledWrap,
    StyledTitle,
    StyledDesc,
    StyledLabelWrap,
    StyledDivider,
    StyledBottomText,
} from "./style";

Amplify.configure(awsExports);

interface IFormValues {
    email: string;
    password: string;
}

const BotonClip = () => {
    return (
        <div>
            <p>holaaaa</p>
            <p>mundo</p>
        </div>
    );
};

import { Auth } from "aws-amplify";

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
            <StyledTitle>Inicio de sesión</StyledTitle>
            <StyledDesc>
                ¡Bienvenido de nuevo! Por favor inicie sesión para continuar.
            </StyledDesc>
            <form action="#" onSubmit={handleSubmit(onSubmit)} noValidate>
                <FormGroup mb="20px">
                    <Label display="block" mb="5px" htmlFor="email">
                        Correo
                    </Label>
                    <Input
                        type="email"
                        id="email"
                        placeholder="correo@.com"
                        feedbackText={errors?.email?.message}
                        state={hasKey(errors, "email") ? "error" : "success"}
                        showState={!!hasKey(errors, "email")}
                        {...register("email", {
                            required: "Correo requerido",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Correo invalido",
                            },
                        })}
                    />
                </FormGroup>
                <FormGroup mb="20px">
                    <StyledLabelWrap>
                        <Label display="block" mb="5px" htmlFor="password">
                            Contraseña
                        </Label>
                        <Anchor path="/forgot-password" fontSize="13px">
                            ¿Se te olvidó tu contraseña?
                        </Anchor>
                    </StyledLabelWrap>
                    <Input
                        id="password"
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        feedbackText={errors?.password?.message}
                        state={hasKey(errors, "password") ? "error" : "success"}
                        showState={!!hasKey(errors, "password")}
                        {...register("password", {
                            required: "Contraseña requerida",
                            minLength: {
                                value: 6,
                                message:
                                    "La longitud mínima es de 6 caracteres",
                            },
                            maxLength: {
                                value: 10,
                                message:
                                    "La longitud maxima es de 10 caracteres",
                            },
                        })}
                    />
                </FormGroup>
                <Button type="submit" color="brand2" fullwidth>
                    Ingresar
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
                    <Anchor path="/signup">Create an Account</Anchor>
                </StyledBottomText> */}
            </form>
        </StyledWrap>
    );
};

export default SigninForm;
