import { makeStyles } from '@material-ui/core/styles';

const useStyles2 = makeStyles({
    app: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#282c34',
    },
    imageContainer: {
     '&:hover $animatedImage': {
        width: '97%',
      },
      '&:hover $animatedImage4': {
        width: '97%',
      },
      '&:hover $animatedImage2': {
        fontSize:'26px',
        },
        '&:hover $animatedImage3': {
        fontSize:'15px',
        },
    },

    animatedImage: {
      width: '95%',
      transition: 'all 0.3s ease',
      transformOrigin: 'center',
      '&:hover': {
      },
    },
    
    animatedImage4: {
        width: '95%',
        transition: 'all 0.3s ease',
        transformOrigin: 'center',
        '&:hover': {
        },
      },


    animatedImage2: {
        fontSize:'24px',
      transition: 'all 0.3s ease',
      transformOrigin: 'center',
      '&:hover': {
      },
    },

    
    animatedImage3: {
        fontSize:'14px',
      transition: 'all 0.3s ease',
      transformOrigin: 'center',
      '&:hover': {
      },
    },



  });


export {useStyles2}