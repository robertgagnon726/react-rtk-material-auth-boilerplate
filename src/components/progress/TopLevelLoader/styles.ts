import { makeStyles } from "@material-ui/core";

export const useStylesTopLevelLoader = makeStyles(() => ({
  backdrop: {
    zIndex: 1000000,
    color: "#fff",
  },
}));
