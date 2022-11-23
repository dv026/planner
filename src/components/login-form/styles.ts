import { css } from '@emotion/css'

import { adaptiveComponentFontSize, adaptiveComponentFontSizeSmall } from './../../common/mixins';
import { Breakpoints } from './../../enums/breakpoints';
import { boxShadowAroundGreyMixin } from '../../common/mixins'
import { errorColor } from '../../common/colors';


export const styles = {
  loginForm:  css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 650px;
    height: 500px;
    padding: 1.5em 2em 1.5em 2em;
    font-size: 28px;
    gap: 0.5em;
    border-radius: .25em;
    align-items: center;
    position: relative;
    ${boxShadowAroundGreyMixin}
    ${adaptiveComponentFontSize}

    @media (max-width: ${Breakpoints.Desktop + 'px'}) {
      width: 550px;
      height: 400px;
    }

    @media (max-width: ${Breakpoints.Laptop + 'px'}) {
      width: 450px;
      height: 400px;
    }

    @media (max-width: ${Breakpoints.Tablet + 'px'}) {
      width: 300px;
      height: 250px;
    }

    @media (max-width: ${Breakpoints.Mobile + 'px'}) {
      width: 90vw;
      height: 200px;
    }
  `,

  inputs: css`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 0.25em;
  `,

  formElement: css`
    display: flex;
    flex-direction: column;
    gap: 5px;
  `,

  input: css`
    border: 1px solid ${errorColor} !important;
  `,

  error: css`
    height: 20px;
    color: ${errorColor};
    font-size: 14px;
    margin-left: 10px;
    ${adaptiveComponentFontSizeSmall}
  `
}