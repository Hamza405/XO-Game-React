import { Box, styled } from "@mui/material";

export const BoardContainer = styled(Box)(()=>({}))

export const BoardHeader = styled(Box)(()=>({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 50,
}))

export const BoardTurnStyle = styled(Box)(({theme})=>({
    borderRadius: 5,
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0 4px 0 rgba(0, 0, 0, 0.2)',
  padding: '8px 12px',
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  '&:active': {
    transform: 'translateY(2px)',
    boxShadow: `0 2px 0 rgba(0, 0, 0, 0.2)}`,
  },
}))

export const BoardRestart = styled(Box)(({theme})=>({
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    padding:'10px 15px',
    borderRadius:10,
    backgroundColor:theme.palette.info.main,
    boxShadow: `0 4px 0 ${theme.palette.info.dark}`,
    '&:active': {
      transform: 'translateY(2px)',
      boxShadow: `0 2px 0 ${theme.palette.info.dark}`,
    },
  'svg': {
    height:20,
    width:20,
    transformOrigin: 'center',
    transition: 'all 0.3s' 
  },
  '&:active svg':{
    transform: 'rotate(180deg)'
  }
}))

export const BoardBody = styled(Box)(()=>({}))

export const BoardFooter = styled(Box)(()=>({}))