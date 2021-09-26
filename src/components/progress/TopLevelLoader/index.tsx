import React, { useEffect, useState } from "react";
import { Backdrop, CircularProgress } from "@material-ui/core";
import { useStylesTopLevelLoader } from "./styles";

interface ILoaderProps {
  open: boolean;
}

export default function TopLevelLoader({ open }: ILoaderProps) {
  const [height, setHeight] = useState(100);
  const classes = useStylesTopLevelLoader();

  useEffect(() => {
    setHeight(window.innerHeight / 2);
  }, []);
  return (
    <Backdrop className={classes.backdrop} open={open}>
      <CircularProgress size={height} />
    </Backdrop>
  );
}
