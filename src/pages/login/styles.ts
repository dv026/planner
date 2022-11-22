import { Breakpoints } from './../../enums/breakpoints';
import { css } from '@emotion/css'
import { themeBlueColor, themeSecondaryColor } from '../../common/colors'
import { boxShadowRightGreyMixin } from '../../common/mixins'

export const styles = {
  loginPage: css`
    display: flex;
    height: 100vh;

    @media (max-width: ${Breakpoints.Mobile + 'px'}) {
      flex-direction: column;
      gap: 20px;
    }
  `,

  leftContainer: css`
    background-color: ${themeBlueColor};
    width: 35%;
    color: ${themeSecondaryColor};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    ${boxShadowRightGreyMixin}

    @media (max-width: ${Breakpoints.Mobile + 'px'}) {
      width: 100%;
      height: 80px;
    }
  `,

  rightContainer: css`
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: ${Breakpoints.Mobile + 'px'}) {
      width: 100%;
    }
  `,

  logo: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;

    @media (max-width: ${Breakpoints.Mobile + 'px'}) {
      margin: 0;
    }

    @media (max-width: ${Breakpoints.Tablet + 'px'}) {
      height: 80px;
    }
  `,
}