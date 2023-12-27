import {TextField,Grid,Avatar,Button } from "@material-ui/core"
import { useState, useEffect  } from "react"
import {useStyles} from "./DisplaySubCategoryCss"
import MaterialTable from "@material-table/core"
import { getData,postData } from "../Services/NodeServices"
import { serverURL } from "../Services/NodeServices"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import { Delete, Edit } from "@mui/icons-material"







export default function DisplaySubCategory(props){
const classes=useStyles() 
const navigate=useNavigate()

const [categoryID,setcategoryID]=useState(' ')
const[ subcategoryId,setsubcategoryId]=useState(' ')
const [subcategoryName,setsubcategoryName]=useState('')
const[Icon,setIcon]=useState('')
const[oldIcon,setOldIcon]=useState('')

const[subcategorydata,setSubcategory]=useState([ ])
const FetchAllsubCategory=async()=>{
  var data=await getData('subcategory/display_all_subcategory')
  setSubcategory(data.data)  
}
 useEffect( function(){
  FetchAllsubCategory()
},[])

const[open,setopen]=useState(false)

const handleOpen=(rowData)=>{
   setopen(true)
   setsubcategoryId(rowData._id)
     setcategoryID(rowData.categoryid)
   setsubcategoryName(rowData.subcategoryname)
   setOldIcon({url:`${serverURL}/images/${rowData.icon}`,bytes:' '})
   setIcon({url:`${serverURL}/images/${rowData.icon}`,bytes:' '})
  
}
const handleClose=()=>{
  setbtn(false)
  setopen(false)
  setuploadbtn(false)
  FetchAllsubCategory()
}


const handleIcon=(event)=>{
  setIcon({url:URL.createObjectURL(event.target.files[0]),bytes:event.target.files[0]})
  setbtn(true)
  setuploadbtn(true)
}

const handleEditdata=async()=>{
  var body={categoryid:categoryID,subcategoryname:subcategoryName,subcategoryid:subcategoryId}
  var result=await postData('subcategory/edit_subcategory',body)
 if(result.status)
 {  Swal.fire({
  icon: 'success',
 title: 'EDIT-Record successfully submited',
 
})

}
else{
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
  })
}

  FetchAllsubCategory()

}
const handleDeletedata=async()=>{

  Swal.fire({
    title: 'Do you want to Delete the subcategory?',
    showDenyButton: true,
    confirmButtonText: 'Delete',
    denyButtonText: `Don't Delete`,
  }).then(async(res) => {
    /* Read more about isConfirmed, isDenied below */
    if (res.isConfirmed) {
      var body={subcategoryid:subcategoryId}
      var result=await postData('subcategory/delete_subcategory',body)
      if(result.status==true)
      {
      Swal.fire('Delete!', '', 'success')
      FetchAllsubCategory()
      }
      else{
        Swal.fire('Server error', '', 'error')
      }
      FetchAllsubCategory()
    } 
    else if (res.isDenied) {
      Swal.fire('Changes are not deleted', '', 'info')
    }
  })



  
  handleClose(true)

}
const [uploadbtn,setuploadbtn]=useState(false)
const[getbtn,setbtn]=useState(false)


const handleSave=async()=>{
    var formdata = new FormData()
   formdata.append('subcategoryid',subcategoryId)
   formdata.append('icon',Icon.bytes)
   var response= await postData('subcategory/update_icon',formdata,true)

   setbtn(false)
   uploadbtn(false)
   FetchAllsubCategory()

}
const handleCancel=()=>{
  
  setIcon({url:oldIcon.url,bytes:''})

  setOldIcon(' ')
  setbtn(false) 
  setuploadbtn(false)

}

function SaveAndCancel()
{
  return(<div>
    {getbtn?<div style={{display:'flex', width:180 ,justifyContent:'space-between'}}><Button onClick={handleSave} color="primary" variant="contained">Save</Button>
     <Button style={{backgroundColor:'green'}} variant="contained" onClick={handleCancel}>cancel</Button></div>:<></>}
      </div>)
}

const[categoryList,setcategoryList]=useState([ ])

const FetchAllCategory=async()=>{
   var data= await getData('category/display_all_category')
   setcategoryList(data.data)
}
useEffect(function(){
FetchAllCategory()
},[])

const FillAllcategory=()=>{
  return categoryList.map((item)=>{
    return(
      <MenuItem value={item._id}>{item.categoryname}</MenuItem>
    )
  })
}

const handleChange=(event)=>{
  setcategoryID(event.target.value)
}

const handleDelete=async(id)=>{

  Swal.fire({
    title: 'Do you want to Delete the subcategory?',
    showDenyButton: true,
    confirmButtonText: 'Delete',
    denyButtonText: `Don't Delete`,
  }).then(async(res) => {
    /* Read more about isConfirmed, isDenied below */
    if (res.isConfirmed) {
      var body={subcategoryid:id}
      var result=await postData('subcategory/delete_subcategory',body)
      if(result.status==true)
      {
      Swal.fire('Delete!', '', 'success')
      FetchAllsubCategory()
      }
      else{
        Swal.fire('Server error', '', 'error')
      }
      FetchAllsubCategory()
    } 
    else if (res.isDenied) {
      Swal.fire('Changes are not deleted', '', 'info')
    }
  })}


function DisplayDailog(){
  return(<div>
      <Dialog
      
        open={open}
        onClose={handleClose}
      >
        <DialogContent>
        <Grid container spacing={2}>
            <Grid item xs={12} style={{ fontSize:20,
        fontWeight:'bolder',}}> EDIT Sub Category</Grid>
        <Grid item xs={12}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={categoryID}
          label="category"
          onChange={handleChange}
        >
         {FillAllcategory()}
        </Select>
      </FormControl>
         </Grid>
            <Grid item xs={12}>
            <TextField  value={subcategoryName}  onChange={(event)=>setsubcategoryName(event.target.value)}  fullWidth  label="add subcategory"  />
            </Grid>
            <Grid item xs={12}>
            <Button  onClick={handleEditdata}  variant="contained"  style={{backgroundColor:'green'}} fullWidth> Edit </Button>
            </Grid>
            

            
        </Grid>
          
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
           Close
          </Button>
         
        </DialogActions>
      </Dialog>
  </div>)
}



function Displaytable() {
  return (
    <MaterialTable
      title="Subcategory-Details"
      columns={[
        { title: 'categoryid', field: 'categoryid' },
        { title: 'subcategoryid', field: '_id' },
        { title: 'subcategoryname', field: 'subcategoryname' },
       
      ]}
      data={subcategorydata}        
      actions={[
        {
          icon: ()=><Edit/>,
          tooltip: 'edit subcategory',
          onClick: (event, rowData) => {handleOpen(rowData)}
        },
        {
          icon: ()=><Delete/>,
          tooltip: 'Delete',
          onClick: (event, rowData) => {handleDelete(rowData._id)}
        },
       
      ]}
    />
  )
}
  
  
  
  
  
  
  return( <div style={{ height:'100vh',
  background:'#f5f6fa',
  justifyContent:'center',
  display:'flex'}}>
    <div style={{borderRadius:20,
      width:'100%',
      height:'40%',
      background:'white ',
      marginTop:'3%'}}>
       {Displaytable()}
    </div>
       {DisplayDailog()}
  </div>)
}