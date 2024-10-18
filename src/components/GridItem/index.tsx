import { Grid2, styled } from "@mui/material";

export const GridItem = styled(Grid2)(({ theme }) => ({
  '.MuiPaper-root': {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    height: "300px",

    [theme.breakpoints.up("sm")]: {
      height: "400px"
    },
    [theme.breakpoints.up("md")]: {
      height: "300px"
    },
    [theme.breakpoints.up("lg")]: {
      height: "350px"
    }
  },
  '.MuiTypography-root': {
    textAlign: "center",
    mb: 2
  }
}));