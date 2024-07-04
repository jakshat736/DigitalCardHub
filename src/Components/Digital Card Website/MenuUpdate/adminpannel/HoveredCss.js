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

  buttonss: {
   background: '#fff', 
   border:'1px solid #fff',
   borderColor:'#fff',
   color:'#000',
    '&:hover': {
        background: '#000', 
        border:'1px solid #000',
        color:'#fff',
        borderColor:'#000',
    },
  },

  

}));


export {useStyles}