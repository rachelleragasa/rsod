import * as React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "gatsby";
import Portal from "./Portal";

const StyledModal = styled.nav`
  width: 18em;

  ${tw`pt-9 pr-6 pb-2 pl-6 h-full max-w-full rounded bg-black`};
`;

const StyledModalHeader = styled.h3`
  ${tw`uppercase text-white text-center m-0 pb-6 border-x-0 border-b-2 border-t-0 border-white border-solid font-bold text-lg`};
`;

const StyledNav = styled.ul`
  ${tw`list-none p-0`};
`;

const StyledListItem = styled.li`
  ${tw`py-3 text-center hover:bg-yellow-500 rounded cursor-pointer`};
`;

const StyledLink = styled(Link)`
  ${tw`no-underline text-white uppercase text-base font-thin `};
`;

const Menu = () => {
  return (
    <Portal>
      <StyledModal>
        <StyledModalHeader>Menu</StyledModalHeader>
        <StyledNav>
          <StyledListItem>
            <StyledLink to="/">Home</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="/about-us">About us</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="/meet-the-team">Meet the team</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="/classes">Classes</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="/gallery">Gallery</StyledLink>
          </StyledListItem>
        </StyledNav>
      </StyledModal>
    </Portal>
  );
};

export default Menu;
