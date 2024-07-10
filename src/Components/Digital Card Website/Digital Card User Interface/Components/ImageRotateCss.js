import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    app: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#282c34',
    },
    imageContainer: {
    border:'3.5px solid #fff',  width:'164px',
    height: '164px',display:'flex',justifyContent:'normal',alignItems:'center',background: 'transparent',flexDirection:'column',borderRadius:'16px',overflow:'hidden',
    '&:hover': {
    background : '#fff', // Color when hovered
    justifyContent:'center',
    },
     '&:hover $animatedImage': {
        transform: 'rotate(-15deg) scale(1.2)',
      },
    },
    animatedImage: {
      marginTop:'-5%',
      width: '100%',
      height: '100%',
      transform: 'scale(0.9)', 
      transition: 'transform .3s ease-in-out, margin-top .3s ease-in-out',
      transformOrigin: 'center',
      display:'flex',
      justifyContent:'center',alignItems:'center',
      '&:hover': {
        marginTop:'0%',

      },
    },
  });


export {useStyles}