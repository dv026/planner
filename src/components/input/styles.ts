import { css } from '@emotion/css';

import { adaptiveComponentFontSize } from './../../common/mixins';
import { themeBlueColor, lightgreyColor, lightgreyTextColor } from './../../common/colors';

export const styles = {
  input: css`
    outline: none;
    border: 1px solid ${lightgreyColor};
    border-radius: .25em;
    font-size: inherit;
    padding: .5em;

    &::placeholder {
      color:  ${lightgreyTextColor};
    }

    &:focus {
      border: 1px solid ${themeBlueColor};
    }

    ${adaptiveComponentFontSize}
  `,
}