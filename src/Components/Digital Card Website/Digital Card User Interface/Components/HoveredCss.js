import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  
    '@keyframes vibrate': {
        '0%': { transform: 'translate(0, 0)' },
        '25%': { transform: 'translate(1px, -1px)' },
        '50%': { transform: 'translate(-1px, 1px)' },
        '75%': { transform: 'translate(1px, 1px)' },
        '100%': { transform: 'translate(-1px, -1px)' },
      },

    root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button: {
   background: '#fff', // Default color
   border:'1px solid #fff',
   color:'#000',
    '&:hover': {
        background: '#00cec9', // Default color
        border:'1px solid #00cec9',
        color:'#fff',
        animation: '$vibrate 1s',
    },
  },

  button1: {
    color:'#fff',
    fontSize:'14px',
    fontWeight:500,
     '&:hover': {
         color:' #fff',
         fontSize:'17px',
         fontWeight:700,
     },
   },

   button5: {
    color:'#fff',
    fontSize:'24px',
    fontWeight:400,
     '&:hover': {
         color:' #fff',
         fontSize:'25px',
         fontWeight:500,
     },
   },

   
   button55: {
    color:'#fff',
    fontSize:'15px',
    fontWeight:400,
     '&:hover': {
         color:' #fff',
         fontSize:'16px',
         fontWeight:500,
     },
   },

   
  button3: {
    fontSize:'15px',
    fontWeight:300,
     '&:hover': {
      fontSize:'17px',
      fontWeight:400,
     },
   },
 


   button2: {
    background: '#fff', // Default color
     '&:hover': {
      background : '#09cc7f', // Color when hovered
     },
     
   },


}));


export {useStyles}