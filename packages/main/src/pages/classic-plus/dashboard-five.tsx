import SEO from "../../components/seo";
import Layout from "../../layouts/layout-02";
import Content from "../../layouts/layout-02/content";
import WelcomeArea from "../../containers/dashboard-five/welcome-area";
import RowOne from "../../containers/dashboard-five/row-one";
import RowTwo from "../../containers/dashboard-five/row-two";
import RowThree from "../../containers/dashboard-five/row-three";
import RowFour from "../../containers/dashboard-five/row-four";
import ContentHeader from "../../layouts/layout-02/content-header";
import ContentBody from "../../layouts/layout-02/content-body";

const DashboardFive = () => {
    return (
        <Layout>
            <SEO />
            <Content>
                <ContentHeader />
                <ContentBody>
                    <WelcomeArea />

                    <RowOne />
                    <RowTwo />
                    <RowThree />
                    <RowFour />
                </ContentBody>
            </Content>
        </Layout>
    );
};

export default DashboardFive;
