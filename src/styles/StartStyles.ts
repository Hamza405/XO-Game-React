import { Box, styled } from "@mui/material";

export const StartContainer = styled(Box)(({theme})=>({
    display:"flex",
    flexDirection:"column",
    gap:25,
}))

export const StartHeader = styled(Box)(({theme})=>({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}))

export const StartPlayers = styled(Box)(({theme})=>({
    backgroundColor:theme.palette.background.default,
    padding:10,
    borderRadius:15,
    display:"flex",
    alignItems:"center",
    boxShadow: "inset 0 0 8px rgba(0,0,0,0.2)"
}))

export const StartPlayerType = styled(Box)<{isActive: boolean}>(({theme,isActive})=>({
    width: "50%",
    display:"flex",
    alignItems:"center",
    justifyContent: "center",
    padding: "15px 10px",
    cursor: "pointer",
    borderRadius:10,
    backgroundColor: isActive ?theme.palette.info.main: theme.palette.background.default,
    boxShadow: isActive ? "0 0 8px rgba(255,255,255,0.2)" : ""

}))

export const StartButton = styled(Box)(({theme})=>({
    display:"flex",
    flexDirection:"column",
    gap:12,
}))