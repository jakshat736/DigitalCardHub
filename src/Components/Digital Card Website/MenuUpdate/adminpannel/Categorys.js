import React, { useState, useEffect } from "react";
import MaterialTable from "@material-table/core";
import { Button, Divider, Grid, TextField, Typography, Stack, IconButton } from '@mui/material';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { getData, postData } from "../../../Services/NodeServices";
import img1 from "../assets/dch logooo.png";
import categoryimg from "../assets/category.png";
import { Edit, Save } from '@mui/icons-material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Categorys() {
  const matches = useMediaQuery("(max-width:600px)");
  const location = useLocation();
  const menuId = location.state.menuId;
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const [CategoryName, setCategoryName] = useState('');
  const [selectedId, setSelectedId] = useState('');
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState('');

  const handleReset = () => {
    setCategoryName('');
  };

  const handleSubmit = async () => {
    var formData = new FormData();
    formData.append('categoryName', CategoryName);
    formData.append('menuId', menuId);
    var response = await postData('menucategories/submit_category', formData);
    if (response.status) {
      Swal.fire({
        icon: 'success',
        title: 'Category',
        text: response.message,
        toast: true
      });
      fetchAllCategory();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        toast: true
      });
    }
  };

  const handleDelete = (rowData) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        var result = await postData("menucategories/delete_category_data", { categoryId: rowData?._id });
        if (result.status) {
          Swal.fire('Deleted!', 'category has been deleted.', 'success');
          fetchAllCategory();
        } else {
          Swal.fire('Deleted!', 'category does not deleted', 'error');
        }
      }
    });
  };

  const fetchAllCategory = async () => {
    var formData = new FormData();
    formData.append('menuId', menuId);
    var response = await postData('menucategories/display_all_category', formData);
    setCategory(response.data);
  };

  const handleEdit = (row) => {
    setSelectedId(row?._id);
    setValue(row?.categoryName);
    setEdit(true);
  };

  const handleSave = async (row) => {
    const newData = category.map(item => {
      if (item._id === row._id) {
        return { ...item, categoryName: value };
      }
      return item;
    });
    setCategory(newData);
    setEdit(false);
    setSelectedId(null);
    var formData = new FormData();
    formData.append('categoryId', row._id);
    formData.append('categoryName', value);
    await postData('menucategories/edit_category_data', formData);
    fetchAllCategory();
  };

  useEffect(() => {
    fetchAllCategory();
  }, []);

  return (
    <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 2 }}>
      <Grid container spacing={2} sx={{ width: matches ? '100%' : 400 }}>
        <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'row', }}>
          <img src={img1} alt="Masala Grill" width={120} />
        </Grid>

        <Grid item xs={6}>
          <Button variant="outlined" sx={{ bgcolor: "#f3b419", color: "black", "&:hover": { bgcolor: "#f3b419", color: "black" }, mt: 2 }}>
            <WhatsAppIcon />Live support
          </Button>
        </Grid>

        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Divider sx={{ backgroundColor: 'black', width: '98%', marginTop: '1%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
        </Grid>

        <Grid item xs={12} sx={{ display: 'flex', gap: 3 }}>
          <Button
            onClick={() => navigate(`/menudashboard/${menuId}`)}
            variant='contained'
            sx={{ bgcolor: "#f3b419", color: "black", "&:hover": { bgcolor: "#f3b419", color: "black" } }}
          >
            Back
          </Button>
          <Grid>
            <Typography sx={{ fontFamily: 'poppins', fontSize: matches ? 25 : 30, fontWeight: 400 }}>Fill Category</Typography>
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Divider sx={{ backgroundColor: 'black', width: '98%', marginTop: '1%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
        </Grid>

        <Grid item xs={12} sx={{ marginTop: '3%' }}>
          <TextField onChange={(event) => setCategoryName(event.target.value)} value={CategoryName} id="outlined-basic" fullWidth label="Category Name" variant="outlined" />
        </Grid>

        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 3, marginTop: '3%' }}>
          <Grid item xs={6}>
            <Button sx={{ bgcolor: "#f3b419", color: "black", "&:hover": { bgcolor: "#f3b419", color: "black" } }} onClick={handleSubmit} fullWidth variant="contained" disableElevation>
              Submit
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant="contained" sx={{ bgcolor: "#f3b419", color: "black", "&:hover": { bgcolor: "#f3b419", color: "black" } }} onClick={handleReset} disableElevation>
              Reset
            </Button>
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{ mt: matches ? 1 : 1 }}>
          <Typography sx={{ fontFamily: 'poppins', fontSize: matches ? 25 : 30, fontWeight: 400 }}>View Category</Typography>
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-2%' }}>
          <Divider sx={{ backgroundColor: 'black', width: '98%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
        </Grid>

        <MaterialTable
          style={{ marginTop: '1%' }}
          title={
            <Grid sx={{ display: "flex", flexDirection: "row" }}>
              <Grid>
                <img src={categoryimg} width="25" />
              </Grid>
            </Grid>
          }
          columns={[
            {
              title: 'Category Name',
              field: 'categoryName',
              render: rowData => (
                edit && selectedId === rowData._id ? (
                  <Stack direction='row' spacing={2}>
                    <TextField
                      onChange={(event) => setValue(event.target.value)}
                      value={value}
                      id="outlined-basic"
                      fullWidth
                      label="Name"
                      variant="outlined"
                      autoFocus
                    />
                  </Stack>
                ) : (
                  <Stack direction='row' spacing={2}>
                    <Typography>{rowData?.categoryName}</Typography>
                  </Stack>
                )
              )
            },
            {
              title: 'Action',
              render: rowData => (
                edit && selectedId === rowData._id ? (
                  <Stack direction='row' spacing={2}>
                    <IconButton onClick={() => handleSave(rowData)}>
                      <Save />
                    </IconButton>
                  </Stack>
                ) : (
                  <Stack direction='row' spacing={2}>
                    <IconButton onClick={() => handleEdit(rowData)}>
                      <Edit />
                    </IconButton>
                  </Stack>
                )
              )
            }
          ]}
          data={category}
          actions={[
            {
              icon: 'delete',
              tooltip: 'Delete Category',
              onClick: (event, rowData) => handleDelete(rowData)
            },
          ]}
        />
      </Grid>
    </Grid>
  );
}
