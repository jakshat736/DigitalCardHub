import MaterialTable from "@material-table/core";
import {useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  DialogContent,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Stack,TextField,Typography,
} from "@mui/material";
 export default function DisplayAllTheCategory() {
 
  const location = useLocation()
  const menuId = location.state.menuId
  var navigate=useNavigate()
    return (
      <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'100vh',background:'#f5f6fa'}}>
        <Grid sx={{width:600,height:500,display:'flex',justifyContent:'center',alignItems:'center'}}>
      <MaterialTable
        title="List of Category"
        columns={[
          { title: 'CategoryId', field: 'CategoryId' },
          { title: 'CategoryName', field: 'CategoryName' },
        
        ]}
        data={[
          { CategoryId: 12, CategoryName: 'South India'},
          { CategoryId: 13, CategoryName: 'North India'},
          { CategoryId: 14, CategoryName: 'Chines India'},
          { CategoryId: 15, CategoryName: 'Pizza'},
          { CategoryId: 16, CategoryName: 'Burgur'},
          { CategoryId: 17, CategoryName: 'Thai'},
        
        ]}          
        actions={[
          {
            icon: 'edit',
            tooltip: 'edit Category',
           
          },
          {
          icon: 'delete',
            tooltip: 'delete Category',
          
          },
          {
            icon: 'add',
            tooltip: 'Add Category',
            isFreeAction: true,
            onClick: (event) =>  navigate('/category',{state:{menuId:menuId}})
          }
        ]}
      />
      </Grid>
   </Grid> )
  }