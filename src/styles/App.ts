import { Box, styled,Button } from "@mui/material";

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

export const ButtonStyle = styled(Button)(({theme,color})=>(
    {
    transition: 'all 0.2s',
    borderRadius: 10,
     boxShadow: `0 6px 0 ${color==='primary'?theme.palette.primary.dark:theme.palette.secondary.dark}`,
     marginBottom:'8px',
   '&:hover': {
        backgroundColor: color==='primary'?theme.palette.primary.main:theme.palette.secondary.main,
        boxShadow: `0 6px 0 ${color==='primary'?theme.palette.primary.dark:theme.palette.secondary.dark}`,    
        transform: 'translateY(-2px)'
    },
    '&:active': {
        transform: 'translateY(2px)',
        boxShadow: `0 6px 0 ${color==='primary'?theme.palette.primary.dark:theme.palette.secondary.dark}`,
      }
}))

export const IconContainer = styled(Box)<{size:string,color:string}>(({theme,color,size})=>({
    display: "inline-block",
    svg: {
        fill: color==="blue"?theme.palette.primary.main: color ==="yellow" ?  theme.palette.secondary.main : color==="dark"? theme.palette.background.default :theme.palette.info.main,
        width: size==="lg"?'65px': size==="sm" ? "30px" : '50px',
        height:size==="lg"?'65px': size==="sm" ? "30px" : '50px',
        verticalAlign: 'middle',
    }
}))