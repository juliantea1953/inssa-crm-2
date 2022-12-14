import { Heart } from "react-feather";
import {
    StyledFooter,
    StyledFooterLeft,
    StyledFooterRight,
    StyledFooterNav,
    StyledFotterNavLink,
} from "./style";

const Footer = () => {
    return (
        <StyledFooter>
            <StyledFooterRight>
                <StyledFooterNav>
                    <StyledFotterNavLink path="https://themeforest.net/licenses/standard">
                        Licenses
                    </StyledFotterNavLink>
                    <StyledFotterNavLink path="/">
                        Change Log
                    </StyledFotterNavLink>
                    <StyledFotterNavLink path="https://hasthemes.com/contact-us/">
                        Get Help
                    </StyledFotterNavLink>
                </StyledFooterNav>
            </StyledFooterRight>
            <StyledFooterLeft>
                <span>&copy; CRM {new Date().getFullYear()} </span>
                <span className="copright-link">
                    HECHO <Heart size="24" /> POr{"  "}
                    <a
                        href="https://inssa.com.co/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Inssa S.A.S
                    </a>
                </span>
            </StyledFooterLeft>
        </StyledFooter>
    );
};

export default Footer;
