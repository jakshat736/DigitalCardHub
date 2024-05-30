import { Grid } from '@mui/material';
import NewHeader from '../Components/NewHeader';
import NewContainer from '../Components/NewContainer';
export default function NewHome()
{
    return(<Grid sx={{width:'100%',height:'100%',background:'#070707',fontFamily:'Muli, sans-serif' }}>
    <Grid  sx={{position:'sticky',top:'0',zIndex:'5'}}>
        <NewHeader/>
    </Grid>
    <Grid>
        <NewContainer/>
    </Grid>
    </Grid>)
}