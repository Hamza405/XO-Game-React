import { Box, styled } from "@mui/material";

export const AppContainer = styled(Box)(({theme})=>({
    width: "100%",
    height: "100vh",
    backgroundColor: theme.palette.primary.main
}))