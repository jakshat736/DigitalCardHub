import { Grid, Slide, Slider } from "@mui/material";
import NewHeader from "../Components/NewHeader";
import NewContainer from "../Components/NewContainer";
import Introducing from "../Components/Introducing";
import ConnectNow from "../Components/ConnectNow";
import { useEffect, useState } from "react";
import Ecommerce from "../Components/Ecommerce";
import Trusted from "../Components/Trusted";
import Banner from "../Components/Banner";
import Superior from "../Components/Superior";
import Utube from "../Components/Utube";
import SliderForProducts from "../Components/SliderForProducts";
import Services from "../Components/Services";
import NewFeatures from "../Components/NewFeatures";
import NewCategories from "../Components/NewCategories";
import Newfooter from "../Components/NewFooter";
import Lower from "../Components/Lower";
import Preloader from "../Components/Preloader";
import Aos from "aos";
import React, { useRef } from "react";
import {
  Container,
  useMediaQuery,
  useTheme,
  Button,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MiniYouTube from "../Components/MiniYouTube";
export default function NewHome() {
  const sectionRef = useRef(null);
  const matches = useMediaQuery("(max-width:900px)");
  const matchesA = useMediaQuery("(max-width:600px)");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  });

  const parentFunction = () => {
    var section = document.getElementById("mySection");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <Grid
      sx={{
        width: "100%",
        backgroundImage:
          "linear-gradient(to bottom right, #171717,#171717,#070707,#070707)",
        fontFamily: "Montserrat",
      }}
    >
      {matches ? (
        <>
          <Grid sx={{ position: "fixed", bottom: -5, zIndex: 100 }}>
            <Lower callParentFunction={parentFunction} />
          </Grid>
        </>
      ) : (
        <></>
      )}

      {loading ? (
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            py: 100,
            bgcolor: "white",
          }}
        >
          <Preloader />
        </Grid>
      ) : (
        <Grid>
          <Grid sx={{ position: "sticky", top: "0", zIndex: 50 }}>
            <NewHeader />
          </Grid>

          <Grid>
            <NewContainer />
          </Grid>
          <Grid>
            <Introducing />
          </Grid>

          <Grid>
            <ConnectNow />
          </Grid>
          <Grid>
            <Ecommerce />
          </Grid>
          <Grid>
            <Trusted />
          </Grid>
          <Grid>
            <Banner />
          </Grid>
          <Grid>
            <Superior />
          </Grid>
          <Grid>
            <Services />
          </Grid>
          <Grid>
            <Utube />
          </Grid>
          <Grid>
            <SliderForProducts />
          </Grid>
          <Grid>
            <NewCategories />
          </Grid>
          <Grid>
            <NewFeatures />
          </Grid>
          <Grid
            sx={{
              position: "sticky",
              bottom: "0",
              zIndex: 50,
              width: matchesA ? "40%" : "30%",
              marginLeft: "auto",
            }}
          >
            <MiniYouTube />
          </Grid>

          <Grid>
            <Newfooter />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}
