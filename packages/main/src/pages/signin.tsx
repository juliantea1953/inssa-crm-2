import Layout from "../layouts";
import Content from "../layouts/content";
import AuthContainer from "../containers/signin";
import SEO from "../components/seo";
import awsExports from "../aws-exports";
import { Amplify } from "aws-amplify";

Amplify.configure(awsExports);

const SignIn = () => {
    return (
        <>
            <SEO />
            <Content fullHeight>
                <AuthContainer />
            </Content>
        </>
    );
};

export default SignIn;
