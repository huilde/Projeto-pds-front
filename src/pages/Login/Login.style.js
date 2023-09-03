import styled from "styled-components";

const StyledLogin = styled.div`
  background: #f7f8f9;
  display: flex;
  padding: 0.94rem;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  min-width: 50rem;

  .main {
    min-width: 40%;
    align-items: center;
    justify-content: center;
  }
  .button {
    font-family: "Urbanist", sans-serif;
    display: flex;
    width: 100%;
    height: 3.5rem;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 0.5rem;
    background: var(--neutrals-neutral-01, #272727);
    color: #f7f8f9;
    cursor: pointer;
  }

  .button:hover {
    background: var(--neutrals-black, #1c1c1c);
  }

  .button:disable {
    opacity: 0.6000000238418579;
    background: var(--neutrals-neutral-02, #8391a1);
  }
  .ant-input {
    background: var(--neutrals-neutral-04, #f7f8f9);
  }

  .alert {
    margin: 30px 0;
    height: 72px;
    display: flex;
    align-items: center;
    padding: 0 24px;

    color: var(--semantics-error, #882525);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
  }

  .baseInput {
    display: flex;
    width: 100%;
    height: 56px;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    border-radius: 8px;
    border: 1px solid var(--neutrals-neutral-03, #e8ecf4);
    background: var(--neutrals-neutral-04, #f7f8f9);
    margin-bottom: 1rem;
    margin-top: 0.62rem;
  }

  .baseInput:focus {
    outline-color: #0fba91 !important;
  }
  .errorInput {
    outline-color: #882525 !important;
    border: 1px solid #882525;
  }

  .eye {
    position: relative;
    bottom: 3.5rem;
    left: 90%;
    cursor: pointer;
  }

  .mainText {
    color: #1e232c;
    font-size: 36px;
    font-style: normal;
    font-family: "Inter", sans-serif;

    font-weight: 700;
    line-height: 130%;
    letter-spacing: -0.36px;
    text-align: left;
    margin: 1.875rem 0 0;
    width: 100%;
  }
  .red {
    color: #e44a4a;
  }
  .label {
    color: var(--neutrals-neutral-01, #272727);
    font-size: 16px;
    font-family: "Urbanist", sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: 125%;
    margin-bottom: 1;
  }
  .submainText {
    color: var(--dark, #1e232c);
    font-size: 36px;
    font-family: "Inter", sans-serif;
    font-style: italic;
    font-weight: 200;
    line-height: 130%;
    letter-spacing: -0.36px;
    margin-bottom: 1.875rem;
  }

  .error {
    color: var(--semantics-error, #882525);
    font-size: 14px;
    font-family: "Urbanist", sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: 125%;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: -0.5rem;
    margin-bottom: 1rem;
  }

  .imagePlaceholder {
    width: 80%;
    height: 10px;
    display: block;
    position: relative;
  }

  .ola {
    max-width: 360px;
  }

  .top {
    margin-top: -2.2rem;
  }

  @media (min-width: 1200px) {
    .imagePlaceHolder {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 20.6875rem;
    }
    .metade {
      background: #d1e0ee;
      display: flex;
      width: 50vw;
      justify-content: center;
    }

    .metade2 {
      display: flex;
      flex-direction: column;
      width: 50vw;
      justify-content: center;
      padding: 154px;
    }
    .ola {
      display: flex;
      flex-direction: row;
      max-width: 20000px !important;
      height: 100%;
      justify-content: start;
      width: 100%;
    }
    .eye {
      left: 90%;
    }
    padding: 0;
  }

  @media (max-width: 1199px) {
    justify-content: center;
    width: 100%;
  }
`;

export { StyledLogin };
