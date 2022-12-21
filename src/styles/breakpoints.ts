import { css } from "styled-components";

export const breakpoint = {
  mobile: "375px",
  tablet: "768px",
  laptop: "1280px",
  desktop: "1920px",
};

export const above = Object.keys(breakpoint).reduce((acc, name) => {
  acc[name] = (...args) => css`
    @media (min-width: ${breakpoint[name]}) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
