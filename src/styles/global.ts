import { createGlobalStyle } from "styled-components";
import normalize from "./normalize";
import tw from "twin.macro";

const GlobalStyles = createGlobalStyle`
${normalize};

html, body {
    ${tw`h-full bg-black`};
    font-family: 'Raleway', sans-serif;
}
`;

export default GlobalStyles;
