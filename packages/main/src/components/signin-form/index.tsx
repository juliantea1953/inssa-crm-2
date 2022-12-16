import React, { lazy, useEffect, useState } from "react";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import awsExports from "../../aws-exports";
import { FormGroup, Label, Input, Anchor, Button } from "@doar/components";
import { useForm, SubmitHandler } from "react-hook-form";
import { hasKey } from "@doar/shared/methods";
import { Auth } from "aws-amplify";
import {
    StyledWrap,
    StyledTitle,
    StyledDesc,
    StyledLabelWrap,
    StyledDivider,
    StyledBottomText,
} from "./style";
import { Hub } from "aws-amplify";
import { User } from "react-feather";
import { Route } from "react-router-dom";
import DashboardOne from "../../pages/dashboard-one";
import path from "path";
import { StyledDropItem } from "../header/header-dropdown-elements";
import { Navigate } from "react-router-dom";
import { readdir } from "fs";

Amplify.configure(awsExports);

interface IFormValues {
    username: string;
    password: string;
}

/* const BotonClip = () => {
    return (
        <div>
            <p>holaaaa</p>
            <p>mundo</p>
        </div>
    );
}; */

const SigninForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormValues>();

    const [search, setSearch] = useState(String);

    const redir = () => {
        window.location.href = `/dashboard-one${search}`;
    };

    const signIn = async (username: string, password: string) => {
        const { username: user } = await Auth.signIn({
            username,
            password,
        });
        redir();
    };

    const onSubmit: SubmitHandler<IFormValues> = async (data) => {
        /* alert(JSON.stringify(data, null)); */

        let err: string;

        await signIn(data.username, data.password).catch((error) => {
            err = error;
            alert(err);
        });

        console.log("asdasd");
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
                        type="username"
                        id="username"
                        placeholder="correo@.com"
                        feedbackText={errors?.username?.message}
                        state={hasKey(errors, "username") ? "error" : "success"}
                        showState={!!hasKey(errors, "username")}
                        {...register("username", {
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
