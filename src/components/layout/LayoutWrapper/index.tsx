import React, { ReactNode } from "react";
import Header from "../Header";
import { Container } from "@material-ui/core";
import { useStyles_LayoutWrapper } from "./styles";

export interface ILayoutWrapperProps {
  children: ReactNode;
}

export default function LayoutWrapper({ children }: ILayoutWrapperProps) {
  const classes = useStyles_LayoutWrapper();
  return (
    <>
      <Header />
      <Container className={classes.container}>
        <>{children}</>
      </Container>
    </>
  );
}
