import Menu from "../components/Menu";
import GlobalStyles from "../styles/global";
import * as React from "react";
import Hamburger from "../components/Hamburger";
import styled from "styled-components";
import tw from "twin.macro";
import Logo from "../images/logo.png";
import { Link } from "gatsby";

const StyledHeader = styled.header`
  ${tw`h-11 flex my-0 mx-5 flex-row items-center`};
  height: 6.5em;
`;

const StyledHamburger = styled(Hamburger)`
  ${tw`justify-end`};
`;

const StyledLogo = styled.img`
  width: 150px;
`;

const StyledLink = styled(Link)`
  flex: 1;
`;

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <GlobalStyles />
      <StyledHeader>
        <StyledLink to="/">
          <StyledLogo src={Logo} alt="Reading School of Dance logo" />
        </StyledLink>
        <StyledHamburger {...{ open, setOpen }} />
      </StyledHeader>
      {open && <Menu />}
      <main>{children}</main>
    </>
  );
};

export default Layout;
