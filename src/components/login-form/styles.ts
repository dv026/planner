import { adaptiveComponentFontSize } from './../../common/mixins';
import { Breakpoints } from './../../enums/breakpoints';
import { css } from '@emotion/css'

import { boxShadowAroundGreyMixin } from '../../common/mixins'

export const styles = {
  loginForm:  css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 650px;
    height: 700px;
    padding: 1.5em 2em;
    font-size: 28px;
    gap: 1.25em;
    border-radius: .25em;
    align-items: center;
    ${boxShadowAroundGreyMixin}
    ${adaptiveComponentFontSize}

    @media (max-width: ${Breakpoints.Desktop + 'px'}) {
      /* font-size: 26px; */
      width: 550px;
      height: 600px;
      /* padding-top: 40px; */
    }

    @media (max-width: ${Breakpoints.Laptop + 'px'}) {
      /* font-size: 22px; */
      width: 450px;
      height: 500px;
      /* padding-top: 30px;
      padding-left: 30px;
      padding-right: 30px; */
    }

    @media (max-width: ${Breakpoints.Tablet + 'px'}) {
      /* font-size: 22px; */
      width: 200px;
      height: 250px;
      /* padding-left: 30px; */
      /* padding-right: 30px; */
    }

    @media (max-width: ${Breakpoints.Mobile + 'px'}) {
      /* font-size: 20px; */
      width: 90vw;
      height: 200px;
      /* padding-left: 20px; */
      /* padding-right: 20px; */
    }
`,

    inputs: css`
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: 1.25em;
  `,
}