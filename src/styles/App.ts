import { Box, styled } from "@mui/material";

export const AppContainer = styled(Box)(({theme})=>({
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.background.default
}))

export const MainContainer = styled(Box)(({theme})=>({
    maxWidth: 450,
    width: "100%",
    marginInline: "auto",
    padding: "2rem 1rem",
    border: "1px solid white"
}))

export const Card = styled(Box)(({theme})=>({
    display:"flex",
    flexDirection:"column",
    gap:25,
    padding:25,
    borderRadius:15,
    backgroundColor: theme.palette.background.paper,
    textAlign:"center"

}))