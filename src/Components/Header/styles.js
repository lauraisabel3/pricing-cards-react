import styled from "@emotion/styled";
import { breakPoints as bp } from "../../styles/breakPoints";

const Container = styled.div `
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 2rem;
    color: var(--blue);
    letter-spacing: 0.2rem;
  }

  ${bp.desktop} {
    height: 120px;
    align-items: end;

    h1 {
      font-size: 3rem;
    }
  }
`

export { Container }