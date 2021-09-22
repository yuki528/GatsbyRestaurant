import React from "react"
import styled from "styled-components"
import { styles } from "."

export function Title({ title, message }) {
  return (
    <TitleWrapper>
      <h3>{message}</h3>
      <h1>{title}</h1>
      <div className="underline" />
    </TitleWrapper>
  )
}

Title.defaultProps = { message: "our message", title: "our title" }

const TitleWrapper = styled.div`
  text-align: center;
  h3 {
    ${styles.textSlanted};
    ${styles.letterSpacing({ spacing: "0.3rem" })};
    font-size: 2rem;
    color: ${styles.colors.mainYellow};
  }
  h1 {
    ${styles.letterSpacing({ spacing: "0.3rem" })};
    font-size: 2rem;
    text-transfrom: uppercase;
  }
  .underline {
    width: 5rem;
    height: 0rem;
    background: ${styles.colors.mainYellow};
    margin: 0.5rem auto;
  }
`
