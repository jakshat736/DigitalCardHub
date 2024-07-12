import { Button, Divider, Grid, InputBase } from "@mui/material";
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import { useState } from "react";
import whatsapp from "../../Digital Card Assets/whatsappimage.png";
import cross from "../../Digital Card Assets/crs.png";

import s1 from "../../Digital Card Assets/snack1.png";
import s2 from "../../Digital Card Assets/snack2.png";
import s3 from "../../Digital Card Assets/snack3.png";
import s4 from "../../Digital Card Assets/snack4.png";
import s5 from "../../Digital Card Assets/snack2.png";
import s6 from "../../Digital Card Assets/snack6.png";

import b1 from "../../Digital Card Assets/bur1.png";
import b2 from "../../Digital Card Assets/bur2.png";
import b3 from "../../Digital Card Assets/bur3.png";
import b4 from "../../Digital Card Assets/bur4.png";
import b5 from "../../Digital Card Assets/bur1.png";
import b6 from "../../Digital Card Assets/bur2.png";

import c1 from "../../Digital Card Assets/chi.png";
import c2 from "../../Digital Card Assets/chi2.png";
import c3 from "../../Digital Card Assets/chi3.png";
import c4 from "../../Digital Card Assets/chi3.png";
import c5 from "../../Digital Card Assets/chi.png";
import c6 from "../../Digital Card Assets/chi3.png";

import i1 from "../../Digital Card Assets/sou1.png";
import i2 from "../../Digital Card Assets/sou2.png";
import i3 from "../../Digital Card Assets/sou3.png";
import i4 from "../../Digital Card Assets/sou1.png";
import i5 from "../../Digital Card Assets/sou2.png";
import i6 from "../../Digital Card Assets/sou3.png";

export default function SelfOrderPage() {

  const [table, setTable] = useState(true);
  const [pick, setPick] = useState(false);
  const [delivery, setDelivery] = useState(false);


  const [category, setCategory] = useState(false);
  const [coffee, setCoffee] = useState(true);
  const [snack, setSnack] = useState(false);
  const [burgur, setBurgur] = useState(false);
  const [chines, setChines] = useState(false);
  const [south, setSouth] = useState(false);



  const handleTable = () => {
    setTable(true);
    setPick(false);
    setDelivery(false);
  };

  const handlePick = () => {
    setTable(false);
    setPick(true);
    setDelivery(false);
  };

  const handleDelivery = () => {
    setTable(false);
    setPick(false);
    setDelivery(true);
  };







  

  const handleCatygory = () => {
    setCategory(true);
    setCoffee(false);
    setSnack(false);
    setBurgur(false);
    setChines(false);
    setSouth(false);
  };

  const handleCoffee = () => {
    setCoffee(true);
    setSnack(false);
    setCategory(false);
    setBurgur(false);
    setChines(false);
    setSouth(false);
  };

  const handleSnack = () => {
    setCoffee(false);
    setSnack(true);
    setBurgur(false);
    setChines(false);
    setCategory(false);
    setSouth(false);
  };

  const handleBurgur = () => {
    setCoffee(false);
    setSnack(false);
    setBurgur(true);
    setChines(false);
    setCategory(false);
    setSouth(false);
  };

  const handleChines = () => {
    setCoffee(false);
    setSnack(false);
    setCategory(false);
    setBurgur(false);
    setChines(true);
    setSouth(false);
  };

  const handleSouth = () => {
    setCoffee(false);
    setSnack(false);
    setCategory(false);
    setBurgur(false);
    setChines(false);
    setSouth(true);
  };

  return (
    <Grid
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid sx={{ width: "85%", height: "auto", marginTop: "3%" }}>
        <Grid
          sx={{
            fontWeight: 600,
            fontSize: "24px",
            lineHeight: "20px",
            color: "#fff",
          }}
        >
          Select item :
        </Grid>
        <Grid
          sx={{
            width: "100%",
            height: "63vh",
            background: "#fff",
            boxShadow: "0px 0px 10px 3px rgba(255, 255, 255, .1)",
            borderRadius: "10px",
            marginTop: "3%",
            overflow:"hidden",
            scrollbarWidth:'none'
          }}
        >
          <Grid sx={{ width: "100%", display: "flex", height: "72px" }}>
            <Button
              onClick={handleCatygory}
              style={{
                background: category ? "#000" : "#fff",
                fontWeight: category ? 400 : 500,
                color: category ? "#fff" : "#000",
                width: "150px",
                height: "72px",
                borderRadius: 0,
                fontSize: "22px",
                textTransform: "none",
                borderTopLeftRadius: "10px",
                display: "flex",
                lineHeight: "36px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Category
            </Button>
            <Button
              onClick={handleCoffee}
              style={{
                background: coffee ? "#000" : "#fff",
                fontWeight: coffee ? 400 : 500,
                color: coffee ? "#fff" : "#000",
                width: "145px",
                height: "72px",
                borderRadius: 0,
                fontSize: "22px",
                textTransform: "none",
                display: "flex",
                lineHeight: "36px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Coffee
            </Button>
            <Button
              onClick={handleSnack}
              style={{
                background: snack ? "#000" : "#fff",
                fontWeight: snack ? 400 : 500,
                color: snack ? "#fff" : "#000",
                width: "150px",
                height: "72px",
                borderRadius: 0,
                fontSize: "22px",
                textTransform: "none",
                display: "flex",
                lineHeight: "36px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Snacks
            </Button>
            <Button
              onClick={handleBurgur}
              style={{
                background: burgur ? "#000" : "#fff",
                fontWeight: burgur ? 400 : 500,
                color: burgur ? "#fff" : "#000",
                width: "145px",
                height: "72px",
                fontSize: "22px",
                textTransform: "none",
                display: "flex",
                lineHeight: "36px",
                borderRadius: 0,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Burgers
            </Button>
            <Button
              onClick={handleChines}
              style={{
                background: chines ? "#000" : "#fff",
                fontWeight: chines ? 400 : 500,
                color: chines ? "#fff" : "#000",
                width: "150px",
                height: "72px",
                fontSize: "22px",
                textTransform: "none",
                borderRadius: 0,
                display: "flex",
                lineHeight: "36px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Chinese
            </Button>

            <Button
              onClick={handleSouth}
              style={{
                background: south ? "#000" : "#fff",
                fontWeight: south ? 400 : 500,
                color: south ? "#fff" : "#000",
                width: "170px",
                height: "72px",
                borderRadius: 0,
                fontSize: "22px",
                textTransform: "none",
                display: "flex",
                lineHeight: "36px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              South Indian
            </Button>
            <Button
              style={{
                width: "150px",
                height: "72px",
                color: "#000",
                fontSize: "22px",
                fontWeight: 500,
                textTransform: "none",
                display: "flex",
                lineHeight: "36px",
                alignItems: "center",
                borderRadius: 0,
                justifyContent: "center",
              }}
            >
              More v
            </Button>
          </Grid>
          <Divider
            style={{
              backgroundColor: "#000000",
            }}
          />
          <Grid sx={{ width: "100%", marginTop: "3%" }}>
            {category ? (
              <>
                <Grid sx={{ display: "flex", justifyContent: "space-around" }}>
                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={s1} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{border:'1px solid #000',background:'#000',color:'#fff',fontSize:'13px',fontWeight:400,padding:.8,borderRadius:'4px',width:70,height:'22px',display:'flex',alignItems:'center',justifyContent:"space-around"}}
                    >
                   <div>-</div><div>1</div><div>+</div>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      espresso
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={c1} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{border:'1px solid #000',background:'#000',color:'#fff',fontSize:'13px',fontWeight:400,padding:.8,borderRadius:'4px',width:70,height:'22px',display:'flex',alignItems:'center',justifyContent:"space-around"}}
                    >
                   <div>-</div><div>1</div><div>+</div>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Copuccino
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={b1} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{border:'1px solid #000',background:'#000',color:'#fff',fontSize:'13px',fontWeight:400,padding:.8,borderRadius:'4px',width:70,height:'22px',display:'flex',alignItems:'center',justifyContent:"space-around"}}
                    >
                   <div>-</div><div>1</div><div>+</div>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Dosa
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={image4} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{border:'1px solid #000',background:'#000',color:'#fff',fontSize:'13px',fontWeight:400,padding:.8,borderRadius:'4px',width:70,height:'22px',display:'flex',alignItems:'center',justifyContent:"space-around"}}
                    >
                   <div>-</div><div>1</div><div>+</div>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      filter coffee
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={s2} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{border:'1px solid #000',background:'#000',color:'#fff',fontSize:'13px',fontWeight:400,padding:.8,borderRadius:'4px',width:70,height:'22px',display:'flex',alignItems:'center',justifyContent:"space-around"}}
                    >
                   <div>-</div><div>1</div><div>+</div>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Cold Brew
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={c2} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{border:'1px solid #000',background:'#000',color:'#fff',fontSize:'13px',fontWeight:400,padding:.8,borderRadius:'4px',width:70,height:'22px',display:'flex',alignItems:'center',justifyContent:"space-around"}}
                    >
                   <div>-</div><div>1</div><div>+</div>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Lattes
                    </Grid>
                  </Grid>
                </Grid>

                <Grid
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "5%",
                  }}
                >
                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={s1} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{border:'1px solid #000',background:'#000',color:'#fff',fontSize:'13px',fontWeight:400,padding:.8,borderRadius:'4px',width:70,height:'22px',display:'flex',alignItems:'center',justifyContent:"space-around"}}
                    >
                   <div>-</div><div>1</div><div>+</div>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      espresso
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={c3} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{border:'1px solid #000',background:'#000',color:'#fff',fontSize:'13px',fontWeight:400,padding:.8,borderRadius:'4px',width:70,height:'22px',display:'flex',alignItems:'center',justifyContent:"space-around"}}
                    >
                   <div>-</div><div>1</div><div>+</div>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Copuccino
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={image3} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{border:'1px solid #000',background:'#000',color:'#fff',fontSize:'13px',fontWeight:400,padding:.8,borderRadius:'4px',width:70,height:'22px',display:'flex',alignItems:'center',justifyContent:"space-around"}}
                    >
                   <div>-</div><div>1</div><div>+</div>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Dosa
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={image4} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{border:'1px solid #000',background:'#000',color:'#fff',fontSize:'13px',fontWeight:400,padding:.8,borderRadius:'4px',width:70,height:'22px',display:'flex',alignItems:'center',justifyContent:"space-around"}}
                    >
                   <div>-</div><div>1</div><div>+</div>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      filter coffee
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={image5} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{border:'1px solid #000',background:'#000',color:'#fff',fontSize:'13px',fontWeight:400,padding:.8,borderRadius:'4px',width:70,height:'22px',display:'flex',alignItems:'center',justifyContent:"space-around"}}
                    >
                   <div>-</div><div>1</div><div>+</div>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Cold Brew
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={c4} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{border:'1px solid #000',background:'#000',color:'#fff',fontSize:'13px',fontWeight:400,padding:.8,borderRadius:'4px',width:70,height:'22px',display:'flex',alignItems:'center',justifyContent:"space-around"}}
                    >
                   <div>-</div><div>1</div><div>+</div>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Lattes
                    </Grid>
                  </Grid>
                </Grid>
              </>
            ) : coffee ? (
              <>
                <Grid sx={{ display: "flex", justifyContent: "space-around" }}>
                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={image1} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{border:'1px solid #000',background:'#000',color:'#fff',fontSize:'13px',fontWeight:400,padding:.8,borderRadius:'4px',width:70,height:'22px',display:'flex',alignItems:'center',justifyContent:"space-around"}}
                    >
                   <div>-</div><div>1</div><div>+</div>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      espresso
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={image2} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{border:'1px solid #000',background:'#000',color:'#fff',fontSize:'13px',fontWeight:400,padding:.8,borderRadius:'4px',width:70,height:'22px',display:'flex',alignItems:'center',justifyContent:"space-around"}}
                    >
                   <div>-</div><div>1</div><div>+</div>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Copuccino
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={image3} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{border:'1px solid #000',background:'#000',color:'#fff',fontSize:'13px',fontWeight:400,padding:.8,borderRadius:'4px',width:70,height:'22px',display:'flex',alignItems:'center',justifyContent:"space-around"}}
                    >
                   <div>-</div><div>1</div><div>+</div>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Dosa
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={image4} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{border:'1px solid #000',background:'#000',color:'#fff',fontSize:'13px',fontWeight:400,padding:.8,borderRadius:'4px',width:70,height:'22px',display:'flex',alignItems:'center',justifyContent:"space-around"}}
                    >
                   <div>-</div><div>1</div><div>+</div>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      filter coffee
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={image5} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{border:'1px solid #000',background:'#000',color:'#fff',fontSize:'13px',fontWeight:400,padding:.8,borderRadius:'4px',width:70,height:'22px',display:'flex',alignItems:'center',justifyContent:"space-around"}}
                    >
                   <div>-</div><div>1</div><div>+</div>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Cold Brew
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={image2} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{border:'1px solid #000',background:'#000',color:'#fff',fontSize:'13px',fontWeight:400,padding:.8,borderRadius:'4px',width:70,height:'22px',display:'flex',alignItems:'center',justifyContent:"space-around"}}
                    >
                   <div>-</div><div>1</div><div>+</div>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Lattes
                    </Grid>
                  </Grid>
                </Grid>

                <Grid
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "5%",
                  }}
                >
                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={image2} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{border:'1px solid #000',background:'#000',color:'#fff',fontSize:'13px',fontWeight:400,padding:.8,borderRadius:'4px',width:70,height:'22px',display:'flex',alignItems:'center',justifyContent:"space-around"}}
                    >
                   <div>-</div><div>1</div><div>+</div>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      espresso
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={image2} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{border:'1px solid #000',background:'#000',color:'#fff',fontSize:'13px',fontWeight:400,padding:.8,borderRadius:'4px',width:70,height:'22px',display:'flex',alignItems:'center',justifyContent:"space-around"}}
                    >
                   <div>-</div><div>1</div><div>+</div>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Copuccino
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={image4} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{border:'1px solid #000',background:'#000',color:'#fff',fontSize:'13px',fontWeight:400,padding:.8,borderRadius:'4px',width:70,height:'22px',display:'flex',alignItems:'center',justifyContent:"space-around"}}
                    >
                   <div>-</div><div>1</div><div>+</div>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Dosa
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={image4} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{border:'1px solid #000',background:'#000',color:'#fff',fontSize:'13px',fontWeight:400,padding:.8,borderRadius:'4px',width:70,height:'22px',display:'flex',alignItems:'center',justifyContent:"space-around"}}
                    >
                   <div>-</div><div>1</div><div>+</div>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      filter coffee
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={image3} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{border:'1px solid #000',background:'#000',color:'#fff',fontSize:'13px',fontWeight:400,padding:.8,borderRadius:'4px',width:70,height:'22px',display:'flex',alignItems:'center',justifyContent:"space-around"}}
                    >
                   <div>-</div><div>1</div><div>+</div>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Cold Brew
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={image5} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{border:'1px solid #000',background:'#000',color:'#fff',fontSize:'13px',fontWeight:400,padding:.8,borderRadius:'4px',width:70,height:'22px',display:'flex',alignItems:'center',justifyContent:"space-around"}}
                    >
                   <div>-</div><div>1</div><div>+</div>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Lattes
                    </Grid>
                  </Grid>
                </Grid>
              </>
            ) : snack ? (
              <>
                <Grid sx={{ display: "flex", justifyContent: "space-around" }}>
                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={s1} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      espresso
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={s2} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Copuccino
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={s3} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Dosa
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={s4} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      filter coffee
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={s4} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Cold Brew
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={s5} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Lattes
                    </Grid>
                  </Grid>
                </Grid>

                <Grid
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "5%",
                  }}
                >
                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={s6} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      espresso
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={s6} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Copuccino
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={s5} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Dosa
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={s3} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      filter coffee
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={s2} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Cold Brew
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={s2} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Lattes
                    </Grid>
                  </Grid>
                </Grid>
              </>
            ) : burgur ? (
              <>
                <Grid sx={{ display: "flex", justifyContent: "space-around" }}>
                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={b1} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      espresso
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={b2} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Copuccino
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={b3} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Dosa
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={b4} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      filter coffee
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={b2} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Cold Brew
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={b4} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Lattes
                    </Grid>
                  </Grid>
                </Grid>

                <Grid
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "5%",
                  }}
                >
                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={b2} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      espresso
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={b3} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Copuccino
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={b2} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Dosa
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={b1} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      filter coffee
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={b1} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Cold Brew
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={b2} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Lattes
                    </Grid>
                  </Grid>
                </Grid>
              </>
            ) : chines ? (
              <>
                <Grid sx={{ display: "flex", justifyContent: "space-around" }}>
                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={c1} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      espresso
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={c2} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Copuccino
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={c3} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Dosa
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={c4} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      filter coffee
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={c5} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Cold Brew
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={c3} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Lattes
                    </Grid>
                  </Grid>
                </Grid>

                <Grid
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "5%",
                  }}
                >
                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={c2} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      espresso
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={c2} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Copuccino
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={c2} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Dosa
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={c3} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      filter coffee
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={c5} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Cold Brew
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={c2} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Lattes
                    </Grid>
                  </Grid>
                </Grid>
              </>
            ) : south ? (
              <>
                <Grid sx={{ display: "flex", justifyContent: "space-around" }}>
                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={i1} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      espresso
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={i2} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Copuccino
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={i3} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Dosa
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={i3} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      filter coffee
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={i3} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Cold Brew
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={i3} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Lattes
                    </Grid>
                  </Grid>
                </Grid>

                <Grid
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "5%",
                  }}
                >
                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={i1} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      espresso
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={i3} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Copuccino
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={i2} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Dosa
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={i1} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      filter coffee
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={i3} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Cold Brew
                    </Grid>
                  </Grid>

                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid>
                      <img src={i3} width={100}></img>
                    </Grid>
                    <Grid
                      sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
                    >
                      Lattes
                    </Grid>
                  </Grid>
                </Grid>
              </>
            ) : (
              <></>
            )}
          </Grid>
        </Grid>

        <Grid
          sx={{
            width: "100%",
            height: "auto",
            background: "#fff",
            boxShadow: "0px 0px 10px 3px rgba(255, 255, 255, .1)",
            borderRadius: "10px",
            marginTop: "5%",
            marginBottom: "4%",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              borderRadius: "10px",
              alignItems: "center",
              height: "10vh",
              background: "radial-gradient( #f5f6fa,#fff)",
            }}
          >
            <Button
            onClick={handleTable}
              style={{
                background: table?'#000':"#fff",
                color: table?'#fff':"#000",
                width: "140px",
                height: "36px",
                fontWeight: 500,
                fontSize: "14px",
                textTransform: "none",
                borderRadius: 0,
                display: "flex",
                lineHeight: "36px",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0px 0px 10px 3px rgba(255, 255, 255, .1)",
              }}
            >
              Table
            </Button>
            <Button
             onClick={handlePick}
              style={{
                background: pick?'#000':"#fff",
                color: pick?'#fff':"#000",
                fontWeight: 500,
                width: "140px",
                height: "36px",
                fontSize: "14px",
                textTransform: "none",
                borderRadius: 0,
                display: "flex",
                lineHeight: "36px",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0px 0px 10px 3px rgba(255, 255, 255, .1)",
              }}
            >
              Pick up
            </Button>
            <Button
             onClick={handleDelivery}
              style={{
                background: delivery?'#000':"#fff",
                color: delivery?'#fff':"#000",
                fontWeight: 500,
                width: "140px",
                height: "36px",
                fontSize: "14px",
                textTransform: "none",
                borderRadius: 0,
                display: "flex",
                lineHeight: "36px",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0px 0px 10px 3px rgba(255, 255, 255, .1)",
              }}
            >
              Delivery
            </Button>
          </Grid>




          {table ? <>

          <Grid sx={{display:'flex',width:'100%',color:'#000',padding:2.5}}>
           <Grid sx={{width:'25%'}}>
           <Grid sx={{fontSize:'18px',fontWeight:600,lineHeight:'22px'}}>
           Name *
           </Grid>
           <Grid
                  sx={{
                    border: "1px solid #000",
                    borderRadius: "4px",
                    color: "#000",
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    height: "35px",
                    width: "100%",
                  }}
                >
                  <InputBase
                    style={{ color: "#000" ,fontSize:'14px'}}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Enter Your Name"
                  />
                </Grid>


                <Grid sx={{fontSize:'18px',fontWeight:600,lineHeight:'22px',marginTop:'8%'}}>
           Number *
           </Grid>
           <Grid
                  sx={{
                    border: "1px solid #000",
                    borderRadius: "4px",
                    color: "#000",
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    height: "35px",
                    width: "100%",
                  }}
                >
                  <InputBase
                    style={{ color: "#000",fontSize:'14px' }}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Enter Your Number"
                  />
                </Grid>



                <Grid sx={{fontSize:'18px',fontWeight:600,lineHeight:'22px',marginTop:'8%'}}>
                Address
           </Grid>
           <Grid
                  sx={{
                    border: "1px solid #000",
                    borderRadius: "4px",
                    color: "#000",
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    height: "75px",
                    width: "100%",
                  }}
                >
                  <InputBase
                    style={{ color: "#000",fontSize:'14px' }}
                    sx={{ ml: 1, flex: 1 }}
                    rows={5}
                    placeholder="Enter Your Address"
                  />
                </Grid>

                <Grid sx={{fontSize:'18px',fontWeight:600,lineHeight:'22px',marginTop:'8%'}}>
           GST no. *
           </Grid>
           <Grid
                  sx={{
                    border: "1px solid #000",
                    borderRadius: "4px",
                    color: "#000",
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    height: "35px",
                    width: "100%",
                  }}
                >
                  <InputBase
                    style={{ color: "#000",fontSize:'14px' }}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Enter GST number"
                  />
                </Grid>

<Grid sx={{marginTop:'8%'}}>
  <img src={whatsapp} style={{width:'100%'}}></img>
</Grid>

           </Grid>

<Grid sx={{width:'75%',height:''}}>
<Grid sx={{marginLeft:'5%'
}}>
<Grid sx={{display:'flex',alignItems:'center'}}>
<Grid sx={{fontSize:'18px',fontWeight:600}}>items</Grid>
<Grid sx={{display:'flex',alignItems:'center',gap:18,marginLeft:'auto'}}>
  <Grid sx={{fontSize:'18px',fontWeight:600}}>Qty.</Grid>
  <Grid sx={{fontSize:'18px',fontWeight:600}}>Amount</Grid>
</Grid>
</Grid>
<Divider
            style={{
              backgroundColor: "#353b48",
              marginTop:'1%',
              height:'1px'
            }}
          />

 <Grid sx={{maxHeight:'360px',overflow:'scroll',scrollbarWidth:'none'}}>         
<Grid sx={{display:'flex',alignItems:'center',marginTop:'2%'}}>
  <Grid sx={{width:'357px',height:'56px',background:'#EAEAEA',borderRadius:'10px',padding:1}}>
    <Grid sx={{display:'flex',alignItems:'center',gap:2}}>
      <Grid sx={{marginLeft:'1%',marginTop:'1%'}}><img src={cross} width={20}></img></Grid>
      <Grid>
        <Grid sx={{fontSize:'18px',fontWeight:600}}>
        chicken chorma (half)
        </Grid>
        <Grid sx={{fontSize:'14px',fontWeight:400,marginTop:'1%'}}>
        CGST : 2.5%   SGST : 2.5%
        </Grid>
      </Grid>
    </Grid>
  </Grid>
<Grid sx={{width:'100px',border:'1px solid #000',height:'52px',background:'#EAEAEA',borderRadius:'10px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'16px',fontWeight:600,marginLeft:'9%',gap:2.4}}>
<div>-</div><div>1</div><div>+</div>
</Grid>
<Grid sx={{fontSize:'16px',fontWeight:600,marginLeft:'auto'}}>
  380.00
</Grid>
</Grid>



<Grid sx={{display:'flex',alignItems:'center',marginTop:'4%'}}>
  <Grid sx={{width:'357px',height:'56px',background:'#EAEAEA',borderRadius:'10px',padding:1}}>
    <Grid sx={{display:'flex',alignItems:'center',gap:2}}>
      <Grid sx={{marginLeft:'1%',marginTop:'1%'}}><img src={cross} width={20}></img></Grid>
      <Grid>
        <Grid sx={{fontSize:'18px',fontWeight:600}}>
        Tandoori naan
        </Grid>
        <Grid sx={{fontSize:'14px',fontWeight:400,marginTop:'1%'}}>
        CGST : 2.5%   SGST : 2.5%
        </Grid>
      </Grid>
    </Grid>
  </Grid>

  
<Grid sx={{width:'100px',border:'1px solid #000',height:'52px',background:'#EAEAEA',borderRadius:'10px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'16px',fontWeight:600,marginLeft:'9%',gap:2.4}}>
<div>-</div><div>3</div><div>+</div>
</Grid>

<Grid sx={{fontSize:'16px',fontWeight:600,marginLeft:'auto'}}>
  400.00
</Grid>
</Grid>




<Grid sx={{display:'flex',alignItems:'center',marginTop:'4%'}}>
  <Grid sx={{width:'357px',height:'56px',background:'#EAEAEA',borderRadius:'10px',padding:1}}>
    <Grid sx={{display:'flex',alignItems:'center',gap:2}}>
      <Grid sx={{marginLeft:'1%',marginTop:'1%'}}><img src={cross} width={20}></img></Grid>
      <Grid>
        <Grid sx={{fontSize:'18px',fontWeight:600}}>
        Tandoori naan
        </Grid>
        <Grid sx={{fontSize:'14px',fontWeight:400,marginTop:'1%'}}>
        CGST : 2.5%   SGST : 2.5%
        </Grid>
      </Grid>
    </Grid>
  </Grid>

  
<Grid sx={{width:'100px',border:'1px solid #000',height:'52px',background:'#EAEAEA',borderRadius:'10px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'16px',fontWeight:600,marginLeft:'9%',gap:2.4}}>
<div>-</div><div>3</div><div>+</div>
</Grid>

<Grid sx={{fontSize:'16px',fontWeight:600,marginLeft:'auto'}}>
  400.00
</Grid>
</Grid>






<Grid sx={{display:'flex',alignItems:'center',marginTop:'4%'}}>
  <Grid sx={{width:'357px',height:'56px',background:'#EAEAEA',borderRadius:'10px',padding:1}}>
    <Grid sx={{display:'flex',alignItems:'center',gap:2}}>
      <Grid sx={{marginLeft:'1%',marginTop:'1%'}}><img src={cross} width={20}></img></Grid>
      <Grid>
        <Grid sx={{fontSize:'18px',fontWeight:600}}>
        Gulab Jaamun (2 pcs )
        </Grid>
        <Grid sx={{fontSize:'14px',fontWeight:400,marginTop:'1%'}}>
        CGST : 2.5%   SGST : 2.5%
        </Grid>
      </Grid>
    </Grid>
  </Grid>

  
<Grid sx={{width:'100px',border:'1px solid #000',height:'52px',background:'#EAEAEA',borderRadius:'10px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'16px',fontWeight:600,marginLeft:'9%',gap:2.4}}>
<div>-</div><div>5</div><div>+</div>
</Grid>

<Grid sx={{fontSize:'16px',fontWeight:600,marginLeft:'auto'}}>
  380.00
</Grid>
</Grid>




<Grid sx={{display:'flex',alignItems:'center',marginTop:'4%'}}>
  <Grid sx={{width:'357px',height:'56px',background:'#EAEAEA',borderRadius:'10px',padding:1}}>
    <Grid sx={{display:'flex',alignItems:'center',gap:2}}>
      <Grid sx={{marginLeft:'1%',marginTop:'1%'}}><img src={cross} width={20}></img></Grid>
      <Grid>
        <Grid sx={{fontSize:'18px',fontWeight:600}}>
        chicken chorma (half)
        </Grid>
        <Grid sx={{fontSize:'14px',fontWeight:400,marginTop:'1%'}}>
        CGST : 2.5%   SGST : 2.5%
        </Grid>
      </Grid>
    </Grid>
  </Grid>

  
<Grid sx={{width:'100px',border:'1px solid #000',height:'52px',background:'#EAEAEA',borderRadius:'10px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'16px',fontWeight:600,marginLeft:'9%',gap:2.4}}>
<div>-</div><div>2</div><div>+</div>
</Grid>

<Grid sx={{fontSize:'16px',fontWeight:600,marginLeft:'auto'}}>
  380.00
</Grid>
</Grid>




<Grid sx={{display:'flex',alignItems:'center',marginTop:'4%'}}>
  <Grid sx={{width:'357px',height:'56px',background:'#EAEAEA',borderRadius:'10px',padding:1}}>
    <Grid sx={{display:'flex',alignItems:'center',gap:2}}>
      <Grid sx={{marginLeft:'1%',marginTop:'1%'}}><img src={cross} width={20}></img></Grid>
      <Grid>
        <Grid sx={{fontSize:'18px',fontWeight:600}}>
        chicken chorma 
        </Grid>
        <Grid sx={{fontSize:'14px',fontWeight:400,marginTop:'1%'}}>
        CGST : 2.5%   SGST : 2.5%
        </Grid>
      </Grid>
    </Grid>
  </Grid>

  
<Grid sx={{width:'100px',border:'1px solid #000',height:'52px',background:'#EAEAEA',borderRadius:'10px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'16px',fontWeight:600,marginLeft:'9%',gap:2.4}}>
<div>-</div><div>6</div><div>+</div>
</Grid>

<Grid sx={{fontSize:'16px',fontWeight:600,marginLeft:'auto'}}>
  200.00
</Grid>
</Grid>
</Grid>
<Divider
            style={{
              backgroundColor: "#dcdde1",
              height:'1px'
            }}
          />
<Grid sx={{display:'flex',alignItems:'center',marginTop:'1%'}}>
<Grid sx={{fontSize:'20px',fontWeight:600}}>Total</Grid> <Grid sx={{fontSize:'12px',fontWeight:400,marginLeft:'2%'}}>(Including all taxes)</Grid>
<Grid sx={{display:'flex',alignItems:'center',gap:18,marginLeft:'auto'}}>
  <Grid sx={{fontSize:'22px',fontWeight:700,color:'#0185FF'}}>₹ 728.00</Grid>
</Grid>
</Grid>
</Grid>
</Grid>
</Grid>





</> : pick ?
              <>







<Grid sx={{display:'flex',width:'100%',color:'#000',padding:2.5}}>
           <Grid sx={{width:'25%'}}>
           <Grid sx={{fontSize:'18px',fontWeight:600,lineHeight:'22px'}}>
           Name *
           </Grid>
           <Grid
                  sx={{
                    border: "1px solid #000",
                    borderRadius: "4px",
                    color: "#000",
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    height: "35px",
                    width: "100%",
                  }}
                >
                  <InputBase
                    style={{ color: "#000" ,fontSize:'14px'}}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Enter Your Name"
                  />
                </Grid>


                <Grid sx={{fontSize:'18px',fontWeight:600,lineHeight:'22px',marginTop:'8%'}}>
           Number *
           </Grid>
           <Grid
                  sx={{
                    border: "1px solid #000",
                    borderRadius: "4px",
                    color: "#000",
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    height: "35px",
                    width: "100%",
                  }}
                >
                  <InputBase
                    style={{ color: "#000",fontSize:'14px' }}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Enter Your Number"
                  />
                </Grid>



                <Grid sx={{fontSize:'18px',fontWeight:600,lineHeight:'22px',marginTop:'8%'}}>
                Address
           </Grid>
           <Grid
                  sx={{
                    border: "1px solid #000",
                    borderRadius: "4px",
                    color: "#000",
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    height: "75px",
                    width: "100%",
                  }}
                >
                  <InputBase
                    style={{ color: "#000",fontSize:'14px' }}
                    sx={{ ml: 1, flex: 1 }}
                    rows={5}
                    placeholder="Enter Your Address"
                  />
                </Grid>

                <Grid sx={{fontSize:'18px',fontWeight:600,lineHeight:'22px',marginTop:'8%'}}>
           GST no. *
           </Grid>
           <Grid
                  sx={{
                    border: "1px solid #000",
                    borderRadius: "4px",
                    color: "#000",
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    height: "35px",
                    width: "100%",
                  }}
                >
                  <InputBase
                    style={{ color: "#000",fontSize:'14px' }}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Enter GST number"
                  />
                </Grid>

<Grid sx={{marginTop:'8%'}}>
  <img src={whatsapp} style={{width:'100%'}}></img>
</Grid>

           </Grid>

<Grid sx={{width:'75%',height:''}}>
<Grid sx={{marginLeft:'5%'
}}>
<Grid sx={{display:'flex',alignItems:'center'}}>
<Grid sx={{fontSize:'18px',fontWeight:600}}>items</Grid>
<Grid sx={{display:'flex',alignItems:'center',gap:18,marginLeft:'auto'}}>
  <Grid sx={{fontSize:'18px',fontWeight:600}}>Qty.</Grid>
  <Grid sx={{fontSize:'18px',fontWeight:600}}>Amount</Grid>
</Grid>
</Grid>
<Divider
            style={{
              backgroundColor: "#353b48",
              marginTop:'1%',
              height:'1px'
            }}
          />

 <Grid sx={{maxHeight:'360px',overflow:'scroll',scrollbarWidth:'none'}}>         
<Grid sx={{display:'flex',alignItems:'center',marginTop:'2%'}}>
  <Grid sx={{width:'357px',height:'56px',background:'#EAEAEA',borderRadius:'10px',padding:1}}>
    <Grid sx={{display:'flex',alignItems:'center',gap:2}}>
      <Grid sx={{marginLeft:'1%',marginTop:'1%'}}><img src={cross} width={20}></img></Grid>
      <Grid>
        <Grid sx={{fontSize:'18px',fontWeight:600}}>
        chicken chorma (half)
        </Grid>
        <Grid sx={{fontSize:'14px',fontWeight:400,marginTop:'1%'}}>
        CGST : 2.5%   SGST : 2.5%
        </Grid>
      </Grid>
    </Grid>
  </Grid>
<Grid sx={{width:'100px',border:'1px solid #000',height:'52px',background:'#EAEAEA',borderRadius:'10px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'16px',fontWeight:600,marginLeft:'9%',gap:2.4}}>
<div>-</div><div>1</div><div>+</div>
</Grid>
<Grid sx={{fontSize:'16px',fontWeight:600,marginLeft:'auto'}}>
  380.00
</Grid>
</Grid>



<Grid sx={{display:'flex',alignItems:'center',marginTop:'4%'}}>
  <Grid sx={{width:'357px',height:'56px',background:'#EAEAEA',borderRadius:'10px',padding:1}}>
    <Grid sx={{display:'flex',alignItems:'center',gap:2}}>
      <Grid sx={{marginLeft:'1%',marginTop:'1%'}}><img src={cross} width={20}></img></Grid>
      <Grid>
        <Grid sx={{fontSize:'18px',fontWeight:600}}>
        Tandoori naan
        </Grid>
        <Grid sx={{fontSize:'14px',fontWeight:400,marginTop:'1%'}}>
        CGST : 2.5%   SGST : 2.5%
        </Grid>
      </Grid>
    </Grid>
  </Grid>

  
<Grid sx={{width:'100px',border:'1px solid #000',height:'52px',background:'#EAEAEA',borderRadius:'10px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'16px',fontWeight:600,marginLeft:'9%',gap:2.4}}>
<div>-</div><div>3</div><div>+</div>
</Grid>

<Grid sx={{fontSize:'16px',fontWeight:600,marginLeft:'auto'}}>
  400.00
</Grid>
</Grid>



<Grid sx={{display:'flex',alignItems:'center',marginTop:'4%'}}>
  <Grid sx={{width:'357px',height:'56px',background:'#EAEAEA',borderRadius:'10px',padding:1}}>
    <Grid sx={{display:'flex',alignItems:'center',gap:2}}>
      <Grid sx={{marginLeft:'1%',marginTop:'1%'}}><img src={cross} width={20}></img></Grid>
      <Grid>
        <Grid sx={{fontSize:'18px',fontWeight:600}}>
        chicken chorma 
        </Grid>
        <Grid sx={{fontSize:'14px',fontWeight:400,marginTop:'1%'}}>
        CGST : 2.5%   SGST : 2.5%
        </Grid>
      </Grid>
    </Grid>
  </Grid>

  
<Grid sx={{width:'100px',border:'1px solid #000',height:'52px',background:'#EAEAEA',borderRadius:'10px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'16px',fontWeight:600,marginLeft:'9%',gap:2.4}}>
<div>-</div><div>6</div><div>+</div>
</Grid>

<Grid sx={{fontSize:'16px',fontWeight:600,marginLeft:'auto'}}>
  200.00
</Grid>
</Grid>
</Grid>
<Divider
            style={{
              backgroundColor: "#dcdde1",
              height:'1px'
            }}
          />
<Grid sx={{display:'flex',alignItems:'center',marginTop:'1%'}}>
<Grid sx={{fontSize:'20px',fontWeight:600}}>Total</Grid> <Grid sx={{fontSize:'12px',fontWeight:400,marginLeft:'2%'}}>(Including all taxes)</Grid>
<Grid sx={{display:'flex',alignItems:'center',gap:18,marginLeft:'auto'}}>
  <Grid sx={{fontSize:'22px',fontWeight:700,color:'#0185FF'}}>₹ 728.00</Grid>
</Grid>
</Grid>
</Grid>
</Grid>
</Grid>






</> : delivery ?
              <>






<Grid  sx={{display:'flex',width:'100%',color:'#000',padding:2.5}}>
           <Grid sx={{width:'25%'}}>
           <Grid sx={{fontSize:'18px',fontWeight:600,lineHeight:'22px'}}>
           Name *
           </Grid>
           <Grid
                  sx={{
                    border: "1px solid #000",
                    borderRadius: "4px",
                    color: "#000",
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    height: "35px",
                    width: "100%",
                  }}
                >
                  <InputBase
                    style={{ color: "#000" ,fontSize:'14px'}}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Enter Your Name"
                  />
                </Grid>


                <Grid sx={{fontSize:'18px',fontWeight:600,lineHeight:'22px',marginTop:'8%'}}>
           Number *
           </Grid>
           <Grid
                  sx={{
                    border: "1px solid #000",
                    borderRadius: "4px",
                    color: "#000",
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    height: "35px",
                    width: "100%",
                  }}
                >
                  <InputBase
                    style={{ color: "#000",fontSize:'14px' }}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Enter Your Number"
                  />
                </Grid>



                <Grid sx={{fontSize:'18px',fontWeight:600,lineHeight:'22px',marginTop:'8%'}}>
                Address
           </Grid>
           <Grid
                  sx={{
                    border: "1px solid #000",
                    borderRadius: "4px",
                    color: "#000",
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    height: "75px",
                    width: "100%",
                  }}
                >
                  <InputBase
                    style={{ color: "#000",fontSize:'14px' }}
                    sx={{ ml: 1, flex: 1 }}
                    rows={5}
                    placeholder="Enter Your Address"
                  />
                </Grid>

                <Grid sx={{fontSize:'18px',fontWeight:600,lineHeight:'22px',marginTop:'8%'}}>
           GST no. *
           </Grid>
           <Grid
                  sx={{
                    border: "1px solid #000",
                    borderRadius: "4px",
                    color: "#000",
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    height: "35px",
                    width: "100%",
                  }}
                >
                  <InputBase
                    style={{ color: "#000",fontSize:'14px' }}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Enter GST number"
                  />
                </Grid>

<Grid sx={{marginTop:'8%'}}>
  <img src={whatsapp} style={{width:'100%'}}></img>
</Grid>

           </Grid>

<Grid sx={{width:'75%',height:''}}>
<Grid sx={{marginLeft:'5%'
}}>
<Grid sx={{display:'flex',alignItems:'center'}}>
<Grid sx={{fontSize:'18px',fontWeight:600}}>items</Grid>
<Grid sx={{display:'flex',alignItems:'center',gap:18,marginLeft:'auto'}}>
  <Grid sx={{fontSize:'18px',fontWeight:600}}>Qty.</Grid>
  <Grid sx={{fontSize:'18px',fontWeight:600}}>Amount</Grid>
</Grid>
</Grid>
<Divider
            style={{
              backgroundColor: "#353b48",
              marginTop:'1%',
              height:'1px'
            }}
          />

 <Grid sx={{maxHeight:'360px',overflow:'scroll',scrollbarWidth:'none'}}>         
<Grid sx={{display:'flex',alignItems:'center',marginTop:'2%'}}>
  <Grid sx={{width:'357px',height:'56px',background:'#EAEAEA',borderRadius:'10px',padding:1}}>
    <Grid sx={{display:'flex',alignItems:'center',gap:2}}>
      <Grid sx={{marginLeft:'1%',marginTop:'1%'}}><img src={cross} width={20}></img></Grid>
      <Grid>
        <Grid sx={{fontSize:'18px',fontWeight:600}}>
        chicken chorma (half)
        </Grid>
        <Grid sx={{fontSize:'14px',fontWeight:400,marginTop:'1%'}}>
        CGST : 2.5%   SGST : 2.5%
        </Grid>
      </Grid>
    </Grid>
  </Grid>
<Grid sx={{width:'100px',border:'1px solid #000',height:'52px',background:'#EAEAEA',borderRadius:'10px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'16px',fontWeight:600,marginLeft:'9%',gap:2.4}}>
<div>-</div><div>1</div><div>+</div>
</Grid>
<Grid sx={{fontSize:'16px',fontWeight:600,marginLeft:'auto'}}>
  380.00
</Grid>
</Grid>



<Grid sx={{display:'flex',alignItems:'center',marginTop:'4%'}}>
  <Grid sx={{width:'357px',height:'56px',background:'#EAEAEA',borderRadius:'10px',padding:1}}>
    <Grid sx={{display:'flex',alignItems:'center',gap:2}}>
      <Grid sx={{marginLeft:'1%',marginTop:'1%'}}><img src={cross} width={20}></img></Grid>
      <Grid>
        <Grid sx={{fontSize:'18px',fontWeight:600}}>
        Tandoori naan
        </Grid>
        <Grid sx={{fontSize:'14px',fontWeight:400,marginTop:'1%'}}>
        CGST : 2.5%   SGST : 2.5%
        </Grid>
      </Grid>
    </Grid>
  </Grid>

  
<Grid sx={{width:'100px',border:'1px solid #000',height:'52px',background:'#EAEAEA',borderRadius:'10px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'16px',fontWeight:600,marginLeft:'9%',gap:2.4}}>
<div>-</div><div>3</div><div>+</div>
</Grid>

<Grid sx={{fontSize:'16px',fontWeight:600,marginLeft:'auto'}}>
  400.00
</Grid>
</Grid>




<Grid sx={{display:'flex',alignItems:'center',marginTop:'4%'}}>
  <Grid sx={{width:'357px',height:'56px',background:'#EAEAEA',borderRadius:'10px',padding:1}}>
    <Grid sx={{display:'flex',alignItems:'center',gap:2}}>
      <Grid sx={{marginLeft:'1%',marginTop:'1%'}}><img src={cross} width={20}></img></Grid>
      <Grid>
        <Grid sx={{fontSize:'18px',fontWeight:600}}>
        Tandoori naan
        </Grid>
        <Grid sx={{fontSize:'14px',fontWeight:400,marginTop:'1%'}}>
        CGST : 2.5%   SGST : 2.5%
        </Grid>
      </Grid>
    </Grid>
  </Grid>

  
<Grid sx={{width:'100px',border:'1px solid #000',height:'52px',background:'#EAEAEA',borderRadius:'10px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'16px',fontWeight:600,marginLeft:'9%',gap:2.4}}>
<div>-</div><div>3</div><div>+</div>
</Grid>

<Grid sx={{fontSize:'16px',fontWeight:600,marginLeft:'auto'}}>
  400.00
</Grid>
</Grid>






<Grid sx={{display:'flex',alignItems:'center',marginTop:'4%'}}>
  <Grid sx={{width:'357px',height:'56px',background:'#EAEAEA',borderRadius:'10px',padding:1}}>
    <Grid sx={{display:'flex',alignItems:'center',gap:2}}>
      <Grid sx={{marginLeft:'1%',marginTop:'1%'}}><img src={cross} width={20}></img></Grid>
      <Grid>
        <Grid sx={{fontSize:'18px',fontWeight:600}}>
        Gulab Jaamun (2 pcs )
        </Grid>
        <Grid sx={{fontSize:'14px',fontWeight:400,marginTop:'1%'}}>
        CGST : 2.5%   SGST : 2.5%
        </Grid>
      </Grid>
    </Grid>
  </Grid>

  
<Grid sx={{width:'100px',border:'1px solid #000',height:'52px',background:'#EAEAEA',borderRadius:'10px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'16px',fontWeight:600,marginLeft:'9%',gap:2.4}}>
<div>-</div><div>5</div><div>+</div>
</Grid>

<Grid sx={{fontSize:'16px',fontWeight:600,marginLeft:'auto'}}>
  380.00
</Grid>
</Grid>




<Grid sx={{display:'flex',alignItems:'center',marginTop:'4%'}}>
  <Grid sx={{width:'357px',height:'56px',background:'#EAEAEA',borderRadius:'10px',padding:1}}>
    <Grid sx={{display:'flex',alignItems:'center',gap:2}}>
      <Grid sx={{marginLeft:'1%',marginTop:'1%'}}><img src={cross} width={20}></img></Grid>
      <Grid>
        <Grid sx={{fontSize:'18px',fontWeight:600}}>
        chicken chorma (half)
        </Grid>
        <Grid sx={{fontSize:'14px',fontWeight:400,marginTop:'1%'}}>
        CGST : 2.5%   SGST : 2.5%
        </Grid>
      </Grid>
    </Grid>
  </Grid>

  
<Grid sx={{width:'100px',border:'1px solid #000',height:'52px',background:'#EAEAEA',borderRadius:'10px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'16px',fontWeight:600,marginLeft:'9%',gap:2.4}}>
<div>-</div><div>2</div><div>+</div>
</Grid>

<Grid sx={{fontSize:'16px',fontWeight:600,marginLeft:'auto'}}>
  380.00
</Grid>
</Grid>




<Grid sx={{display:'flex',alignItems:'center',marginTop:'4%'}}>
  <Grid sx={{width:'357px',height:'56px',background:'#EAEAEA',borderRadius:'10px',padding:1}}>
    <Grid sx={{display:'flex',alignItems:'center',gap:2}}>
      <Grid sx={{marginLeft:'1%',marginTop:'1%'}}><img src={cross} width={20}></img></Grid>
      <Grid>
        <Grid sx={{fontSize:'18px',fontWeight:600}}>
        chicken chorma 
        </Grid>
        <Grid sx={{fontSize:'14px',fontWeight:400,marginTop:'1%'}}>
        CGST : 2.5%   SGST : 2.5%
        </Grid>
      </Grid>
    </Grid>
  </Grid>

  
<Grid sx={{width:'100px',border:'1px solid #000',height:'52px',background:'#EAEAEA',borderRadius:'10px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'16px',fontWeight:600,marginLeft:'9%',gap:2.4}}>
<div>-</div><div>6</div><div>+</div>
</Grid>

<Grid sx={{fontSize:'16px',fontWeight:600,marginLeft:'auto'}}>
  200.00
</Grid>
</Grid>
</Grid>
<Divider
            style={{
              backgroundColor: "#dcdde1",
              height:'1px'
            }}
          />
<Grid sx={{display:'flex',alignItems:'center',marginTop:'1%'}}>
<Grid sx={{fontSize:'20px',fontWeight:600}}>Total</Grid> <Grid sx={{fontSize:'12px',fontWeight:400,marginLeft:'2%'}}>(Including all taxes)</Grid>
<Grid sx={{display:'flex',alignItems:'center',gap:18,marginLeft:'auto'}}>
  <Grid sx={{fontSize:'22px',fontWeight:700,color:'#0185FF'}}>₹ 728.00</Grid>
</Grid>
</Grid>
</Grid>
</Grid>
</Grid>






</>
                  :
                  <>
                  </>
              }







          <Grid
            sx={{
              display: "flex",
              justifyContent:"space-around",
              borderRadius: "10px",
              alignItems: "center",
              height: "10vh",
              background:"#E9E9E9",

            }}
          >

<FormControl>
      <RadioGroup style={{gap:6,color:''}}
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="case" control={<Radio style={{color:'red'}}/>} label="Case" />
        <FormControlLabel value="card" control={<Radio style={{color:'red'}} />} label="Card" />
        <FormControlLabel value="due payment" control={<Radio style={{color:'red'}} />} label="Due payment" />
        <FormControlLabel value="other" control={<Radio style={{color:'red'}}/>} label="Other" />
        <FormControlLabel value="split" control={<Radio  style={{color:'red'}}/>} label="Split" />
      </RadioGroup>
    </FormControl>
            <Button
              style={{
                background: "#000",
                fontWeight: 500,
                color: "#fff",
                width: "100px",
                borderRadius:'10px',
                height: "36px",
                fontSize: "14px",
                textTransform: "none",
                display: "flex",
                lineHeight: "36px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Save
            </Button>
            <Button
              style={{
                background: "#000",
                fontWeight: 500,
                color: "#fff",
                width: "140px",
                height: "36px",
                fontSize: "14px",
                textTransform: "none",
                borderRadius: '10px',
                display: "flex",
                lineHeight: "36px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Save & Print
            </Button>
            <Button
              style={{
                background: "#fff",
                border:'1px solid #000',
                fontWeight: 500,
                color: "#000",
                width: "140px",
                height: "36px",
                fontSize: "14px",
                textTransform: "none",
                borderRadius: '10px',
                display: "flex",
                lineHeight: "36px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              cancel
            </Button>
          </Grid>


        </Grid>
      </Grid>
    </Grid>
  );
}
