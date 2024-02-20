import { Grid, styled } from "@mui/material";

export const StyledContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minWidth: "700px",
  padding: "2rem",
}));
