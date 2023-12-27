import { useEffect, useState } from "react";
import MaterialTable from "@material-table/core";
import { getData, postData, serverURL } from "../Services/NodeServices";
// import React from "react";
import { Button, Grid, Avatar, TextField } from "@material-ui/core";
import { useStyles } from "./DisplayAllCategoryCss";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Delete, Edit } from "@mui/icons-material";


export default function DisplayAllCategory(props) {
  const classes = useStyles();
  const navigate = useNavigate();
  const [categoryID, setCategoryID] = useState(" ");
  const [getcategory, setcategory] = useState(" ");
  const [Icon, setIcon] = useState({ url: "/girl.png", bytes: "" });
  const [oldicon, setOldicon] = useState(" ");
  const [uploadbtn, setuploadbtn] = useState(false);

  const handleIcon = (event) => {
    setIcon({
      url: URL.createObjectURL(event.target.files[0]),
      bytes: event.target.files[0],
    });
    setBtnStatus(true);
    setuploadbtn(true);
  };

  const [open, setOpen] = useState(false);
  const [btnStatus, setBtnStatus] = useState(false);
  const [priority, setPriority] = useState("");

  const [category, setCategory] = useState([]);
  const FetchAllCategory = async () => {
    var data = await getData("category/display_all_category");

    setCategory(data.data);
  };

  const handleChange=(event)=>{
    setPriority(event.target.value)

}
  useEffect(function () {
    FetchAllCategory();
  }, []);

  const handleOpen = (rowData) => {
    setCategoryID(rowData._id);
    setcategory(rowData.categoryname);
    setOldicon({ url: `${serverURL}/images/${rowData.icon}`, bytes: " " });
    setIcon({ url: `${serverURL}/images/${rowData.icon}`, bytes: " " });
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleEditData = async () => {
    var body = { categoryname: getcategory, categoryid: categoryID,priority:priority };
    var result = await postData("category/edit_category_data", body);

    if (result.status) {
      Swal.fire({
        icon: "success",
        title: " EDIT Record successfully submited",
      });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }

    FetchAllCategory();
  };
  const handleDelete = async (rowData) => {
    Swal.fire({
      title: "Do you want to Delete the subcategory?",
      showDenyButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't Delete`,
    }).then(async (res) => {
      /* Read more about isConfirmed, isDenied below */
      if (res.isConfirmed) {
        var body = { categoryid: rowData._id };
        var result = await postData("category/delete_category_data", body);
        if (result.status) {
          Swal.fire("Delete!", "", "success");
          FetchAllCategory();
        } else {
          Swal.fire("Server error", "", "error");
        }
        FetchAllCategory();
      } else if (res.isDenied) {
        Swal.fire("Changes are not deleted", "", "info");
      }
    });

    FetchAllCategory();
    handleClose();
  };
  const handleCancel = () => {
    setBtnStatus(false);
    setIcon({ url: oldicon.url, bytes: "" });
    setuploadbtn(false);
    setOldicon(" ");
  };

  const handleSavePicture = async () => {
    var formdata = new FormData();
    formdata.append("categoryid", categoryID);
    formdata.append("icon", Icon.bytes);

    var response = await postData("category/update_icon", formdata, true);

    setBtnStatus(false);
    setuploadbtn(false);
    FetchAllCategory();
  };

  const SaveAndCancel = () => {
    return (
      <div>
        {btnStatus ? (
          <div
            style={{
              display: "flex",
              width: 180,
              justifyContent: "space-between",
            }}
          >
            <Button
              onClick={handleSavePicture}
              color="primary"
              variant="contained"
            >
              Save
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleCancel}
            >
              cancel
            </Button>
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  };

  const showCategory = () => {
    return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={12} style={{ fontSize:20,
        fontWeight:'bolder',}}>
                Category_details
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={getcategory}
                  onChange={(event) => setcategory(event.target.value)}
                  fullWidth
                  label="Category Name"
                  variant="outlined"
                />
              </Grid>
              

              <Grid item xs={12}>
                <Button
                  onClick={handleEditData}
                  style={{ marginTop: 40 }}
                  fullWidth
                  color="primary"
                  variant="contained"
                >
                  Edit
                </Button>
              </Grid>
              

            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };

  function DisplayCategory() {
    return (
      <MaterialTable
        title="List of Category"
        columns={[
          { title: "Category-ID", field: "_id" },
          { title: "Category-Name", field: "categoryname" },
          
        ]}
        data={category}
        actions={[
          {
            icon: ()=><Edit/>,
            tooltip: "edit category details",
            onClick: (event, rowData) => {
              handleOpen(rowData);
            },
          },
          {
            icon: ()=><Delete/>,
            tooltip: "Delete",
            onClick: (event, rowData) => {
              handleDelete(rowData);
            },
          },
          
        ]}
      />
    );
  }

  return (
    <div style={{ height:'100vh',
    background:'#f5f6fa',
    justifyContent:'center',
    display:'flex'}}>
      <div style={{borderRadius:20,
        width:'100%',
        height:'40%',
        background:'white ',
        marginTop:'3%'}}>{DisplayCategory()}</div>
      {showCategory()}
    </div>
  );
}
