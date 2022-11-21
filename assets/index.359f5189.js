import{c as o,j as i,a as s,r as m}from"./index.22200d46.js";var u=(e=>(e.CIRCLED="circled",e.NORMAL="normal",e))(u||{}),w=(e=>(e.SMALL="small",e.MEDIUM="medium",e.LARGE="large",e))(w||{}),t=(e=>(e[e.Mobile=375]="Mobile",e[e.Tablet=768]="Tablet",e[e.Laptop=1280]="Laptop",e[e.Desktop=1920]="Desktop",e))(t||{});const p="#53bceb",z="white",y="white",c="rgba(0,0,0,0.15)",M="rgba(0,0,0,0.3)",L=o`
  box-shadow: 4px 1px 3px 0px ${c};
`,b=o`
  box-shadow: 0px 0px 10px 0px ${c};
`,v=o`
  font-size: 58px;

  @media (max-width: ${t.Desktop+"px"}) {
    font-size: 52px;
  }

  @media (max-width: ${t.Laptop+"px"}) {
    font-size: 46px;
  }

  @media (max-width: ${t.Tablet+"px"}) {
    font-size: 26px;
  }

  @media (max-width: ${t.Mobile+"px"}) {
    font-size: 26px;
  }
`,x=o`
  font-size: 26px;

  @media (max-width: ${t.Desktop+"px"}) {
      font-size: 24px;
  }

  @media (max-width: ${t.Laptop+"px"}) {
    font-size: 22px;
  }

  @media (max-width: ${t.Tablet+"px"}) {
    font-size: 18px;
  }

  @media (max-width: ${t.Mobile+"px"}) {
    font-size: 16px;
  }
`,C={button:e=>o`
    color: ${y};
    background-color: ${p};
    border: none;
    font-size: 26px;
    padding: .5em 1em;
    border-radius: .25em;
    cursor: pointer;

    ${b}
    ${x}
  `},N=({children:e,size:n=w.MEDIUM,variant:a=u.NORMAL,...d})=>i("button",{className:C.button(n),...d,children:e}),D={input:o`
    outline: none;
    border: 1px solid ${c};
    border-radius: .25em;
    font-size: inherit;
    padding: .5em;

    &::placeholder {
      color:  ${M};
    }

    &:focus {
      border: 1px solid ${p};
    }

    ${x}
  `},h=e=>i("input",{...e,className:D.input}),g={loginForm:o`
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
    ${b}
    ${x}

    @media (max-width: ${t.Desktop+"px"}) {
      /* font-size: 26px; */
      width: 550px;
      height: 600px;
      /* padding-top: 40px; */
    }

    @media (max-width: ${t.Laptop+"px"}) {
      /* font-size: 22px; */
      width: 450px;
      height: 500px;
      /* padding-top: 30px;
      padding-left: 30px;
      padding-right: 30px; */
    }

    @media (max-width: ${t.Tablet+"px"}) {
      /* font-size: 22px; */
      width: 200px;
      height: 250px;
      /* padding-left: 30px; */
      /* padding-right: 30px; */
    }

    @media (max-width: ${t.Mobile+"px"}) {
      /* font-size: 20px; */
      width: 90vw;
      height: 200px;
      /* padding-left: 20px; */
      /* padding-right: 20px; */
    }
`,inputs:o`
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: 1.25em;
  `},T=()=>s("div",{className:g.loginForm,children:[s("div",{className:g.inputs,children:[i(h,{placeholder:"email"}),i(h,{placeholder:"password",type:"password"})]}),i(N,{children:"Submit"})]}),j=e=>i("svg",{...e,viewBox:"0 0 64.03200073242188 89.17823933455985",children:i("g",{transform:"matrix(1.6,0,0,1.6,0,-28.799993896484377)",fill:"currentColor",children:i("path",{d:"M9.96 60 c-8.82 0 -9.96 -5.64 -9.96 -10.56 l0 -17.1 c0 -10.32 4.14 -14.34 14.7 -14.34 l11.28 0 c10.62 0 14.04 3.84 14.04 15.66 c0 15.66 -8.28 14.52 -21.18 14.52 c-0.18 7.56 -1.14 11.82 -8.88 11.82 z M25.98 22.14 l-11.28 0 c-8.34 0 -10.56 2.16 -10.56 10.2 l0 17.1 c0 5.04 1.26 6.42 5.82 6.42 c2.88 0 3.48 -0.54 3.78 -1.2 c0.66 -1.14 0.78 -3.42 0.96 -6.48 c-4.56 0 -6.54 -2.16 -7.2 -3.9 c-1.92 -4.8 2.82 -9.48 7.32 -7.86 c3.78 1.44 4.02 5.16 4.02 7.62 c13.32 0 17.04 0.96 17.04 -10.38 c0 -10.08 -2.1 -11.52 -9.9 -11.52 z M11.34 42.72 c0.42 1.02 1.98 1.32 3.36 1.32 c-0.06 -2.82 -0.48 -3.48 -1.26 -3.78 c-1.14 -0.36 -2.76 0.96 -2.1 2.46 z"})})}),E={name:o`
    ${v}
  `},I=({className:e})=>{const[n,a]=m.exports.useState(f(window.innerWidth));return m.exports.useEffect(()=>{function d(){a(f(window.innerWidth))}return window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[]),s("div",{className:e,children:[i(j,{height:n}),i("div",{className:E.name,children:"PLANNER.IO"})]})},f=e=>{const n=Object.keys(l);for(let a=0;a<n.length;a++){const d=l[n[a]][0],$=l[n[a]][1];if(e>d&&e<=$)return parseInt(n[a])}return 40},l={40:[0,t.Mobile],90:[t.Mobile,t.Tablet],100:[t.Tablet,t.Laptop],120:[t.Laptop,t.Desktop],140:[t.Desktop,5e3]},r={loginPage:o`
    display: flex;
    height: 100vh;

    @media (max-width: ${t.Mobile+"px"}) {
      flex-direction: column;
      gap: 20px;
    }
  `,leftContainer:o`
    background-color: ${p};
    width: 35%;
    color: ${z};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    ${L}

    @media (max-width: ${t.Mobile+"px"}) {
      width: 100%;
      height: 80px;
    }
  `,rightContainer:o`
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: ${t.Mobile+"px"}) {
      width: 100%;
    }
  `,logo:o`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;

    @media (max-width: ${t.Mobile+"px"}) {
      margin: 0;
    }

    @media (max-width: ${t.Tablet+"px"}) {
      height: 80px;
    }
  `},S=()=>s("div",{className:r.loginPage,children:[i("div",{className:r.leftContainer,children:i(I,{className:r.logo})}),i("div",{className:r.rightContainer,children:i(T,{})})]});export{S as default};
