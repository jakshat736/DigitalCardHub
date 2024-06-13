import MaterialTable from "@material-table/core";
import { useState,useEffect } from "react";
import { Grid,TextField, Avatar } from "@mui/material";
import { postData } from "../../../Services/NodeServices";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import categoryimg from "../assets/category.png"
import { getData } from "../../../Services/NodeServices"
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import {useLocation} from "react-router-dom";
import { makeStyles } from "@mui/styles";
var useStyles=makeStyles({
  Reportroot:{
      width:"100%",
      Height:"100%",
      display:"flex",
      justifyContent:"center"
  },
  Reportbox:{
      width:800,
      height:"auto",
      backgroundColor:"#ecf0f1",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
      borderRadius:10,
      padding:10,
      margin:10,
      marginTop:'6%'

  },
  center:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
  },

  right:{
    display:"flex",
    justifyContent:"right",
    alignItems:"center"
},
  box:{
    width:500,
    height:"auto",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    borderRadius:10,
    padding:10,
    margin:10
},
})

export default function DisplayAllTheCategory()
{
  const location = useLocation()
  const menuId = location.state.menuId
  var classes=useStyles()
  var navigate=useNavigate()
  const [category,setCategory]=useState([])
  const [open,setOpen]=useState(false)

  ///////////////////////////Category  edit///////////////////////////////////////////////////

  const [CategoryName,setCategoryName]=useState('')
  const [categoryId,setCategoryId]=useState('')


 const handleDelete=(rowData)=>{
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor:'#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then(async(result) => {
    if (result.isConfirmed) {
  var result=await postData("")
    if(result.status)
    {
      Swal.fire(
        'Deleted!',
        'category has been deleted.',
        'success'
      )
      fetchAllCategory()
    }
    else
    {
      Swal.fire(
        'Deleted!',
        'category does not deleted',
        'error'
      )
    }
  }
  })
 }


 const handleSubmit=async()=>{
 var body={categoryid:categoryId,categoryname:CategoryName}
 var response= await postData('',body)
if(response.status)
{
  Swal.fire({
    icon: 'success',
    title: 'Category',
    text: response.message,
    toast:true
  })
  fetchAllCategory()
}
else
{
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    toast:true
  })
}
}


  const categoryForm=()=>{
    return(
          <Grid className={classes.box}>
              <Grid container spacing={3}>
                  <Grid item xs={12}>
                   <TextField label="Category name"
                    value={CategoryName} onChange={(event)=>setCategoryName(event.target.value)} fullWidth/>
                  </Grid>                 
              </Grid>
      </Grid>)}
  
  //////////////////////////////////////////////////////////////////////////////////////////////////
  
  const fetchAllCategory=async()=>{
   var response=await getData('category/display_all_category')
   setCategory(response.data)
  }
  
    useEffect(function(){
        
    fetchAllCategory()

    },[])

    const handleOpen=(rowData)=>{
      setCategoryId(rowData.categoryid)
      setCategoryName(rowData.categoryname)
      setOpen(true)
    }

    const handleClose=()=>{
      setOpen(false)
    }


    const showCategoryDialog=()=>{
      return(
      <Dialog open={open}>
        <DialogTitle>
         Update category  
        </DialogTitle>
        <DialogContent>
          {categoryForm()}
        </DialogContent>
        <DialogActions>
        <Button onClick={handleSubmit}>Edit Data</Button>
        <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>)
    }
    function displaycategory() { 
        return (
          <MaterialTable
            title={<div style={{display:"flex",flexDirection:"row"}}>
            <div>
             <img src={categoryimg} width="25"/>
            </div>
            <div style={{fontFamily:'dosis',fontSize:18,fontWeight:'bold',paddingLeft:5}}>
               Category List
            </div>
            </div>}
            columns={[
              { title: 'Categoryid', field: 'categoryid' },
              { title: 'Categoryname', field: 'categoryname' },          
            ]}
            data={category}
            actions={[
              {
                icon: 'edit',
                tooltip: 'edit Category',
                onClick: (event, rowData) => handleOpen(rowData)
              },
              {
              icon: 'delete',
                tooltip: 'delete Category',
                onClick: (event, rowData) => handleDelete(rowData)
              },
              {
                icon: 'add',
                tooltip: 'Add Category',
                isFreeAction: true,
                onClick: (event) =>  navigate('/category',{state:{menuId:menuId}})
              }
            ]}
          />
        )
      }

    return(<div className={classes.Reportroot}>
      <div className={classes.Reportbox}>
       {displaycategory()}
       {showCategoryDialog()}
      </div>
    </div>)
}








// import MaterialTable from "@material-table/core";
// import {useLocation, useNavigate } from "react-router-dom";
// import {
//   Grid,
// } from "@mui/material";
//  export default function DisplayAllTheCategory() {
 
//   const location = useLocation()
//   const menuId = location.state.menuId
//   var navigate=useNavigate()
//     return (
//       <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'100vh',background:'#f5f6fa'}}>
//         <Grid sx={{width:600,height:500,display:'flex',justifyContent:'center',alignItems:'center'}}>
//       <MaterialTable
//         title="List of Category"
//         columns={[
//           { title: 'CategoryId', field: 'CategoryId' },
//           { title: 'CategoryName', field: 'CategoryName' },
        
//         ]}
//         data={[
//           { CategoryId: 12, CategoryName: 'South India'},
//           { CategoryId: 13, CategoryName: 'North India'},
//           { CategoryId: 14, CategoryName: 'Chines India'},
//           { CategoryId: 15, CategoryName: 'Pizza'},
//           { CategoryId: 16, CategoryName: 'Burgur'},
//           { CategoryId: 17, CategoryName: 'Thai'},
//         ]}          
//         actions={[
//           {
//             icon: 'edit',
//             tooltip: 'edit Category',          
//           },
//           {
//           icon: 'delete',
//             tooltip: 'delete Category',
          
//           },
//           {
//             icon: 'add',
//             tooltip: 'Add Category',
//             isFreeAction: true,
//             onClick: (event) =>  navigate('/category',{state:{menuId:menuId}})
//           }
//         ]}
//       />
//       </Grid>
//    </Grid>)
//   }
