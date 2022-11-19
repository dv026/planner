import { boxShadowAroundGreyMixin, adaptiveComponentFontSize } from './../../common/mixins';
import { Breakpoints } from './../../enums/breakpoints';
import { ButtonSizes } from './types';
import { buttonTextColor, themeBlueColor } from './../../common/colors';
import { css } from "@emotion/css"

export const styles = {
  button: (size: ButtonSizes) => css`
    color: ${buttonTextColor};
    background-color: ${themeBlueColor};
    border: none;
    font-size: 26px;
    padding: .5em 1em;
    border-radius: .25em;
    cursor: pointer;

    ${boxShadowAroundGreyMixin}
    ${adaptiveComponentFontSize}
  `,
}
