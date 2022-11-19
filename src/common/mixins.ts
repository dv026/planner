import { css } from "@emotion/css";
import { Breakpoints } from "../enums/breakpoints";

import { lightgreyColor } from './colors';

export const boxShadowRightGreyMixin = css`
  box-shadow: 4px 1px 3px 0px ${lightgreyColor};
`

export const boxShadowAroundGreyMixin = css`
  box-shadow: 0px 0px 10px 0px ${lightgreyColor};
`

export const adaptiveHeader = css`
  font-size: 58px;

  @media (max-width: ${Breakpoints.Desktop + 'px'}) {
    font-size: 52px;
  }

  @media (max-width: ${Breakpoints.Laptop + 'px'}) {
    font-size: 46px;
  }

  @media (max-width: ${Breakpoints.Tablet + 'px'}) {
    font-size: 26px;
  }

  @media (max-width: ${Breakpoints.Mobile + 'px'}) {
    font-size: 26px;
  }
`

export const adaptiveComponentFontSize = css`
  font-size: 26px;

  @media (max-width: ${Breakpoints.Desktop + 'px'}) {
      font-size: 24px;
  }

  @media (max-width: ${Breakpoints.Laptop + 'px'}) {
    font-size: 22px;
  }

  @media (max-width: ${Breakpoints.Tablet + 'px'}) {
    font-size: 18px;
  }

  @media (max-width: ${Breakpoints.Mobile + 'px'}) {
    font-size: 16px;
  }
`