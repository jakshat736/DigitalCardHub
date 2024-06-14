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
     width:'350px',height:'452px',borderRadius:'20px',border:'3px solid #757575',background:'#fff',cursor:'pointer',
    '&:hover': {
    background : '#fff', // Color when hovered
    justifyContent:'center',
    },
     '&:hover $animatedImage': {
      width: '75%',
      },
      '&:hover $animatedImage2': {
        width:'56%',
        },
        '&:hover $animatedImage3': {
          display:'flex',
          marginTop:'-5%',
          },

    },
    animatedImage: {
      width: '69%',
      transition: 'all 0.3s ease',
      transformOrigin: 'center',
      '&:hover': {
      },
    },


    animatedImage2: {
      width:'52.2%',
      transition: 'all 0.3s ease',
      transformOrigin: 'center',
      '&:hover': {
      },
    },

    animatedImage3: {
      display:'none',
      marginTop:'8.8%',
      transition: 'all 0.3s ease',
      transformOrigin: 'center',
      '&:hover': {
      },
    },



  });


export {useStyles}