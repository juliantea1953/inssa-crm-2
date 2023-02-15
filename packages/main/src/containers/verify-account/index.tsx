import {
    Button,
    Col,
    Container,
    Dropdown,
    Input,
    Row,
    Textarea,
    Select,
} from "@doar/components";

import { StyledWrap } from "./style";

import React from "react";
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Font,
    Canvas,
    Svg,
    Line,
} from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";

import ReactDOM from "react-dom";
import { PDFViewer } from "@react-pdf/renderer";
import { marginBottom, marginRight } from "styled-system";

// Create styles

const nombre = "David Escobar";
const ciudad = "Bogota";
const identificacion = "1031137171";
const var1 = "12312312313";
const nit = "342334556565";
const compraventa = "0384929389";
const taller = "05945829877";

Font.register({
    family: "Oswald",
    src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
        fontFamily: "Oswald",
    },
    author: {
        fontSize: 12,
        textAlign: "center",
        marginBottom: 40,
    },
    subtitle: {
        fontSize: 16,
        margin: 12,
        fontFamily: "Oswald",
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Times-Roman",
    },
    image: {
        marginVertical: 15,
        marginHorizontal: 100,
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: "center",
        color: "grey",
    },
    pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
    },
    viewer: {
        width: "100%",
        height: "98vh",
    },
    textNegrilla: {
        margin: 12,
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Times-Roman",
    },
    aparte: {
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Times-Roman",
        marginLeft: 12,
        marginRight: 12,
    },
    textNorm: {
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Times-Roman",
        marginLeft: 12,
        marginRight: 12,
    },
    textTop: {
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Times-Roman",
        marginLeft: 12,
        marginRight: 12,
        marginBottom: 12,
    },

    title2: {
        fontSize: 10,
        textAlign: "center",
        fontFamily: "Times-Roman",
        marginBottom: 12,
    },

    text2: {
        margin: 12,
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Times-Roman",
        lineHeight: 2,
    },

    firma2: {
        margin: 12,
        fontSize: 14,
        textAlign: "left",
        fontFamily: "Times-Roman",
        lineHeight: 2,
    },
    firma2F: {
        fontSize: 13,
        textAlign: "left",
        fontFamily: "Times-Roman",
        lineHeight: 2,
        marginLeft: 12,
    },
    huella: {
        fontSize: 14,
        textAlign: "left",
        fontFamily: "Times-Roman",
        lineHeight: 2,
        marginLeft: 318,
    },

    canvas: {
        backgroundColor: "black",
        height: 500,
        width: 500,
    },
});

// Create Document Component

const App = () => (
    <PDFViewer style={styles.viewer}>
        <Document>
            <Page style={styles.body}>
                <Text style={styles.header} fixed></Text>
                {/* <Text style={styles.title}></Text>
                <Text style={styles.author}></Text> */}
                <Text style={styles.text}></Text>

                <Text style={styles.subtitle}>
                    Política de ETICA, ANTI-SOBORNO Y ANTI-CORRUPCION para
                    EMPLEADOS, PROVEEDORES Y CLIENTES de INSSA
                </Text>
                <Text style={styles.textNorm}>
                    El Código de Ética de INSSA dispone que{" "}
                    <Text style={styles.text}>
                        no toleramos ninguna forma de soborno o corrupción entre
                        nuestros empleados, nuestros proveedores y nuestros
                        clientes.
                    </Text>
                </Text>
                <Text style={styles.textTop}>
                    No sobornamos a ningún funcionario público ni tampoco
                    aceptamos sobornos o actos de corrupción que provengan de
                    nuestros proveedores y/o clientes.
                </Text>

                <Text style={styles.text}>
                    En INSSA propendemos y difundimos para que los proveedores y
                    clientes con los que trabajamos y hacemos negocios, cumplan
                    con la ley, observen las mejores prácticas éticas y
                    mantengan los más altos estándares de conducta que permitan
                    rechazar y/o proponer cualquier acto de corrupción para
                    favorecerse a sí mismos en sus actividades comerciales,
                    industriales y/o de servicio.
                </Text>

                <Text style={styles.text}>
                    Por soborno se entiende el acto de otorgar, ofrecer,
                    proponer o recibir un beneficio en dinero o especie, con la
                    intención de influir sobre el comportamiento de otra persona
                    y obtener o mantener así una ventaja comercial.
                </Text>

                <Text style={styles.text}>
                    El ofrecimiento de comisiones o coimas para derivar ventas
                    de máquinas o localización de las mismas, solicitud de los
                    clientes o aceptación para reparar máquinas sin estar
                    coordinadas y programadas siguiendo el protocolo de servicio
                    al cliente de INSSA, aún en tiempos de descanso o fuera de
                    los horarios laborales y que estén directamente relacionadas
                    con el objeto social de INSSA, son consideradas inapropiadas
                    y por tanto se consideran conductas graves contra el código
                    de ética que rige los principios de nuestra empresa.
                </Text>
                <Text style={styles.text}>
                    Con la firma de este documento certifico que he leído esta
                    política de ética empresarial y actuaré con rigurosidad
                    conforme a los principios anticorrupción y soborno aquí
                    definidos.
                </Text>
                <Text style={styles.text}></Text>
                <Text style={styles.text}></Text>
                <Text style={styles.text}></Text>
                <Text style={styles.text}>
                    Nombre _______________________ {"     "}Firma
                    ________________________
                </Text>
                <Text style={styles.text}>Fecha _______________________</Text>

                <Text style={styles.text}></Text>

                <Text style={styles.text}></Text>

                <Text style={styles.title2} break>
                    EXCLUSIÓN DE RESPONSABILIDAD POR ALMACENAMIENTO DE MÁQUINA
                </Text>

                <Text style={styles.text2}>
                    {nombre} mayor y vecino(a) de {ciudad}, identificado(a) con
                    la cedula de ciudadanía N.{identificacion}, quien actúa en
                    su propio nombre y/o en representación de la sociedad {var1}{" "}
                    con Nit {nit} , por medio del presente documento, refrendado
                    con su firma y huella, excluye de toda responsabilidad a
                    INSSA SAS y a su representante legal, frente a cualquier
                    perdida y/o daño parcial o total que puedan ocasionarse a la
                    maquina (s) referenciadas en el contrato de compraventa No.
                    {compraventa} u orden de taller N. {taller}, donde se
                    describen los productos adquiridos, así mismo, lo que
                    obedezca por siniestro, motín, incendio, hurto con
                    violencia, asonada y terremoto o cualquier otra condición
                    ajena al control de las personas que laboran en INSSA SAS.
                </Text>
                <Text style={styles.text2}>
                    Atención: Cabe resaltar que pasados 60 días de la maquina
                    encontrarse en las instalaciones de INSSA SAS se iniciara
                    cobro de bodegaje por cada máquina de acuerdo con las
                    tarifas vigentes. De igual manera, pasados 90 días a partir
                    de la fecha de facturación, en caso de no retirar la misma,
                    se autoriza a INSSA SAS para disponer del equipo y con el
                    producto de su venta cancelar el valor de bodegaje generado.
                </Text>

                <Text style={styles.firma2}>
                    Razón Social y/o Nombre/Apellido:
                    _________________________________________
                </Text>

                <Text></Text>

                <Text style={styles.firma2F}>Firma. _____________________</Text>
                <Text style={styles.firma2F}>C.C: _______________________</Text>
                <Text style={styles.firma2F}>Fecha: _____________________</Text>

                <Text style={styles.firma2F}>Sede: ______________________</Text>
                <Svg height="70" width="500">
                    <Line
                        x1="300"
                        y1="00"
                        x2="300"
                        y2="70"
                        strokeWidth={1}
                        stroke="rgb(0,0,0)"
                    />
                    <Line
                        x1="370"
                        y1="00"
                        x2="370"
                        y2="70"
                        strokeWidth={1}
                        stroke="rgb(0,0,0)"
                    />
                    <Line
                        x1="370"
                        y1="00"
                        x2="300"
                        y2="0"
                        strokeWidth={1}
                        stroke="rgb(0,0,0)"
                    />
                    <Line
                        x1="370"
                        y1="70"
                        x2="300"
                        y2="70"
                        strokeWidth={1}
                        stroke="rgb(0,0,0)"
                    />
                </Svg>
                <Text style={styles.huella}>Huella</Text>

                <Text fixed />
            </Page>
        </Document>
    </PDFViewer>
);

const VerifyContainer = () => {
    return (
        <StyledWrap>
            {/*  <StyledImg>
                <img src={image} alt="verify" />
            </StyledImg>
            <StyledTitle>Verify your email address</StyledTitle>
            <StyledDesc>
                Please check your email and click the verify button or link to
                verify your account.
            </StyledDesc>
            <StyledBtnWrap>
                <Button path="/" color="brand2">
                    Resend Verification
                </Button>
                <Button path="/" color="white" ml="5px">
                    Contact Support
                </Button>
            </StyledBtnWrap>
            <StyledNote>
                Mailbox with envelope vector is created by{" "}
                <a
                    href="https://www.freepik.com/free-photos-vectors/background"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    freepik (freepik.com)
                </a>
            </StyledNote> */}

            <Container>
                <Row>
                    <Col col>
                        <Input
                            placeholder="Nombres"
                            mb="10px"
                            id={""}
                            name={""}
                        />
                        <Select marginBottom={10} id={""} name={""}>
                            <option value="DEFAULT" disabled>
                                Tipo de documento
                            </option>
                            <option value="1">NIT</option>
                            <option value="2">C.C.</option>
                            <option value="3">C.E.</option>
                        </Select>
                        <Input
                            placeholder="Ciudad"
                            mb="10px"
                            id={""}
                            name={""}
                        />
                        <Input
                            placeholder="# contrato de compraventa"
                            mb="10px"
                            id={""}
                            name={""}
                        />

                        <Input
                            placeholder="Fecha"
                            mb="10px"
                            id={""}
                            name={""}
                        />
                        <Select marginBottom={10} id={""} name={""}>
                            <option value="DEFAULT" disabled>
                                Tipo de persona
                            </option>
                            <option value="Persona Natural">
                                Persona Natural
                            </option>
                            <option value="Persona juridica">
                                Persona juridica
                            </option>
                            <option value="Persona juridica">Oficial</option>
                            <option value="Persona juridica">
                                Sin animo de lucro
                            </option>
                        </Select>
                        <Input
                            placeholder="Barrio"
                            mb="10px"
                            id={""}
                            name={""}
                        />
                        <Input
                            placeholder="Telefono fijo"
                            mb="10px"
                            id={""}
                            name={""}
                        />
                        <Input placeholder="Fax" mb="10px" id={""} name={""} />
                        <Input
                            placeholder="Pagina web"
                            mb="10px"
                            id={""}
                            name={""}
                        />
                    </Col>
                    <Col col>
                        <Input
                            placeholder="Apellidos"
                            mb="10px"
                            id={""}
                            name={""}
                        />
                        <Input
                            placeholder="Documento"
                            mb="10px"
                            id={""}
                            name={""}
                        />
                        <Input
                            placeholder="Sociedad"
                            mb="10px"
                            id={""}
                            name={""}
                        />
                        <Input
                            placeholder="# orden de taller"
                            mb="10px"
                            id={""}
                            name={""}
                        />
                        <Select marginBottom={10} id={""} name={""}>
                            <option value="DEFAULT" disabled>
                                Tipo de solicitud
                            </option>
                            <option value="1">Nueva</option>
                            <option value="2">Actualizacion</option>
                        </Select>
                        <Input
                            placeholder="Direccion"
                            mb="10px"
                            id={""}
                            name={""}
                        />
                        <Input
                            placeholder="Celular"
                            mb="10px"
                            id={""}
                            name={""}
                        />
                        <Input placeholder="Pais" mb="10px" id={""} name={""} />
                        <Input
                            placeholder="Email Factura"
                            mb="10px"
                            id={""}
                            name={""}
                        />
                        <Input
                            placeholder="Email contacto"
                            mb="10px"
                            id={""}
                            name={""}
                        />
                    </Col>
                </Row>
                <Button
                    onClick={() => {
                        ReactDOM.render(
                            <App />,
                            document.getElementById("root")
                        );
                    }}
                >
                    descargar
                </Button>
            </Container>
        </StyledWrap>
    );
};

export default VerifyContainer;
