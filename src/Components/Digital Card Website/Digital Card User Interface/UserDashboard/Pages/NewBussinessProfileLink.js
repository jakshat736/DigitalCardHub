import {
  Grid,
  Divider,
  InputBase,
  IconButton,
  Button,
  TextField,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import * as React from "react";
import { postData } from "../../../../Services/NodeServices";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import { Container, useMediaQuery } from "@mui/material";
import { Delete } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import add from "../UserAssets/add.png";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
export default function NewBussinessProfileLink() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const matches = useMediaQuery("(max-width:1000px)");
  const matchesA = useMediaQuery("(max-width:1300px)");

  const navigate = useNavigate();
  const cardId = window.localStorage.getItem("CardId");
  const userId = window.localStorage.getItem("userId");
  const [website, setWebsite] = useState("");
  const [location, setLocation] = useState("");
  const [fbLink, setFbLink] = useState("");
  const [pdf, setPDF] = useState("");
  const [twitterLink, setTwitterLink] = useState("");
  const [instaLink, setInstaLink] = useState("");
  const [linkedlnLink, setLinkedlnLink] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");
  const [pinterestLink, setPinterestLink] = useState("");
  const [youtubeLink1, setYoutubeLink1] = useState("");
  const [youtubeLink2, setYoutubeLink2] = useState("");
  const [link2, setLink2] = useState("none");
  const [youtubeLink3, setYoutubeLink3] = useState("");
  const [link3, setLink3] = useState("none");
  const [youtubeLink4, setYoutubeLink4] = useState("");
  const [link4, setLink4] = useState("none");
  const [youtubeLink5, setYoutubeLink5] = useState("");
  const [link5, setLink5] = useState("none");
  const [youtubeLink6, setYoutubeLink6] = useState("");
  const [link6, setLink6] = useState("none");
  const [youtubeLink7, setYoutubeLink7] = useState("");
  const [link7, setLink7] = useState("none");
  const [youtubeLink8, setYoutubeLink8] = useState("");
  const [link8, setLink8] = useState("none");
  const [youtubeLink9, setYoutubeLink9] = useState("");
  const [link9, setLink9] = useState("none");
  const [youtubeLink10, setYoutubeLink10] = useState("");
  const [link10, setLink10] = useState("none");
  const [googleMapLink, setGoogleMapLink] = useState("");
  const [count, setCount] = useState(1);
  const [themeId, setThemeId] = useState("");
  const [menuLink, setMenuLink] = useState("");
  const [otherLink, setOtherLink] = useState(Array(0).fill(null));
  const [age, setAge] = useState("");
  const [loadingAnimation, setLoadingAnimation] = useState(true);

  const [emptys, setEmptys] = useState({ uniqueId: "" });
  const [companyName, setCompanyName] = useState("");
  const [addMember, setAddMember] = useState(Array(1).fill(emptys));

  const handleAddLinkMember = () => {
    setAddMember([...addMember, ...Array(1).fill(emptys)]);
  };

  const handleMemberDelete = (index) => {
    const updated = [...addMember];
    updated.splice(index, 1);
    setAddMember(updated);
  };

  const handleMemberChange = (index, value) => {
    const newData = [...addMember];
    console.log(newData[index]);
    newData[index] = { ...newData[index], uniqueId: value };
    console.log(newData);
    setAddMember(newData);
  };

  const fetchCardDetail = async () => {
    setLoadingAnimation(true);
    var formData = new FormData();
    formData.append("customerId", userId);
    var result = await postData("carddetails/getcardDetails", formData, true);
    if (result != false) {
      setFbLink(result.data.fbLink);
      setInstaLink(result.data.igLink);
      setLinkedlnLink(result.data.LinkdnLink);
      setPinterestLink(result.data.PinterestLink);
      setTwitterLink(result.data.TwitterLink);
      setYoutubeLink(result.data.YoutubeLink);
      setYoutubeLink1(result.data.YoutubeVideoLink1);
      setMenuLink(result.data.menuLink);
      if (result.data.website != "undefined") {
        setWebsite(result.data.website);
      }
      if (result.data.location != "undefined") {
        setLocation(result.data.location);
      }
      if (result.data.YoutubeVideoLink2 != "") {
        setLink2("flex");
        setCount(count + 1);
      }
      if (result.data.YoutubeVideoLink3 != "") {
        setLink3("flex");
        setCount(count + 1);
      }
      if (result.data.YoutubeVideoLink4 != "") {
        setLink4("flex");
        setCount(count + 1);
      }
      if (result.data.YoutubeVideoLink5 != "") {
        setLink5("flex");
        setCount(count + 1);
      }
      if (result.data.YoutubeVideoLink6 != "") {
        setLink6("flex");
        setCount(count + 1);
      }
      if (result.data.YoutubeVideoLink7 != "") {
        setLink7("flex");
        setCount(count + 1);
      }
      if (result.data.YoutubeVideoLink8 != "") {
        setLink8("flex");
        setCount(count + 1);
      }
      if (result.data.YoutubeVideoLink9 != "") {
        setLink9("flex");
        setCount(count + 1);
      }
      if (result.data.YoutubeVideoLink10 != "") {
        setLink10("flex");
        setCount(count + 1);
      }
      setYoutubeLink2(result.data.YoutubeVideoLink2);
      setYoutubeLink3(result.data.YoutubeVideoLink3);
      setYoutubeLink4(result.data.YoutubeVideoLink4);
      setYoutubeLink5(result.data.YoutubeVideoLink5);
      setYoutubeLink6(result.data.YoutubeVideoLink6);
      setYoutubeLink7(result.data.YoutubeVideoLink7);
      setYoutubeLink8(result.data.YoutubeVideoLink8);
      setYoutubeLink9(result.data.YoutubeVideoLink9);
      setYoutubeLink10(result.data.YoutubeVideoLink10);
      setGoogleMapLink(result.data.GoogleMapLink);
      setThemeId(result.data.themeid);
      setOtherLink(result.data.links);
      setAddMember(result.data.members);
      setCompanyName(result.data.businessName);
    } else {
      navigate("/userdashboard");
    }
    if (result === false || result?.data != undefined) {
      setLoadingAnimation(false);
    }
  };
  React.useEffect(() => {
    fetchCardDetail();
  }, []);

  const handleSubmit = async () => {
    setLoadingAnimation(true);
    var formData = new FormData();
    formData.append("_id", cardId);
    formData.append("fbLink", fbLink);
    formData.append("igLink", instaLink);
    formData.append("TwitterLink", twitterLink);
    formData.append("YoutubeLink", youtubeLink);
    formData.append("PinterestLink", pinterestLink);
    formData.append("LinkdnLink", linkedlnLink);
    formData.append("YoutubeVideoLink1", youtubeLink1);
    formData.append("YoutubeVideoLink2", youtubeLink2);
    formData.append("YoutubeVideoLink3", youtubeLink3);
    formData.append("YoutubeVideoLink4", youtubeLink4);
    formData.append("YoutubeVideoLink5", youtubeLink5);
    formData.append("YoutubeVideoLink6", youtubeLink6);
    formData.append("YoutubeVideoLink7", youtubeLink7);
    formData.append("YoutubeVideoLink8", youtubeLink8);
    formData.append("YoutubeVideoLink9", youtubeLink9);
    formData.append("YoutubeVideoLink10", youtubeLink10);
    formData.append("GoogleMapLink", googleMapLink);
    formData.append("menuLink", menuLink);
    formData.append("website", website);
    formData.append("location", location);
    formData.append("links", JSON.stringify(otherLink));
    formData.append("members", JSON.stringify(addMember));
    formData.append("businessName", companyName);

    var response = await postData(
      "carddetails/updatesociallinks",
      formData,
      true
    );
    if (response.status) {
      setLoadingAnimation(false);
    } else {
    }
  };

  const handleAdd = (n) => {
    if (n == 1) {
      setLink2("flex");
      setCount(n + 1);
    }
    if (n == 2) {
      setLink3("flex");
      setCount(n + 1);
    }
    if (n == 3) {
      setLink4("flex");
      setCount(n + 1);
    }
    if (n == 4) {
      setLink5("flex");
      setCount(n + 1);
    }
    if (n == 5) {
      setLink6("flex");
      setCount(n + 1);
    }
    if (n == 6) {
      setLink7("flex");
      setCount(n + 1);
    }
    if (n == 7) {
      setLink8("flex");
      setCount(n + 1);
    }
    if (n == 8) {
      setLink9("flex");
      setCount(n + 1);
    }
    if (n == 9) {
      setLink10("flex");
      setCount(n + 1);
    }
  };

  const handleAddLink = () => {
    const emptyLink = {
      title: "",
      link: "",
    };
    setOtherLink([...otherLink, ...Array(1).fill(emptyLink)]);
  };
  const handleDeleteLink = (index) => {
    const updatedLinks = [...otherLink];
    updatedLinks.splice(index, 1);
    setOtherLink(updatedLinks);
  };
  const handleTitleChange = (index, value) => {
    const newData = [...otherLink];
    newData[index] = { ...newData[index], title: value };
    setOtherLink(newData);
  };

  const handleCustomTitle = (index, value) => {
    const newData = [...otherLink];
    if (newData[index].title == "Others") {
      newData[index] = { ...newData[index], customTitle: value };
      setOtherLink(newData);
    }
  };
  const handleLinkChange = (index, value) => {
    const newData = [...otherLink];
    newData[index] = { ...newData[index], link: value };
    setOtherLink(newData);
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickss = (event) => {
    setOpenDrawer(!openDrawer);
    setAnchorEl(event.currentTarget);
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
      <Grid
        sx={{
          width: "82%",
          height: "auto",
          padding: 3,
          background: "#fff",
          color: "#000",
        }}
      >
        <Divider
          style={{
            backgroundColor: "#95a5a6",
            marginTop: "1%",
          }}
        />
        <Grid
          sx={{
            fontSize: matchesA ? "15px" : "22px",
            fontWeight: 500,
            lineHeight: "36px",
            marginTop: "3%",
          }}
        >
          Social Links :
        </Grid>
        <Divider
          style={{
            backgroundColor: "#000",
            marginTop: ".8%",
            width: matchesA ? "100%" : "30%",
          }}
        />
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1%",
            flexDirection: matchesA ? "column" : "row",
          }}
        >
          <Grid>
            <Grid
              sx={{
                fontSize: matchesA ? "14px" : "16px",
                fontWeight: 500,
                lineHeight: "36px",
                marginTop: ".5%",
              }}
            >
              Instagram
            </Grid>
            <Grid
              sx={{
                border: "1px solid #000",
                borderRadius: "10px",
                color: "#000",
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                height: "35px",
                width: matchesA ? "100%" : "550px",
              }}
            >
              <InputBase
                style={{ color: "#000" }}
                sx={{ ml: 1, flex: 1 }}
                placeholder="paste your instagram profile link"
                value={instaLink}
                onChange={(e) => setInstaLink(e.target.value)}
              />
            </Grid>
          </Grid>

          <Grid>
            <Grid
              sx={{
                fontSize: matchesA ? "14px" : "16px",
                fontWeight: 500,
                lineHeight: "36px",
                marginTop: ".5%",
              }}
            >
              Facebook
            </Grid>
            <Grid
              sx={{
                border: "1px solid #000",
                borderRadius: "10px",
                color: "#fff",
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                height: "35px",
                width: matchesA ? "100%" : "550px",
              }}
            >
              <InputBase
                style={{ color: "#000" }}
                sx={{ ml: 1, flex: 1 }}
                placeholder="paste your Facebook profile link"
                value={fbLink}
                onChange={(e) => setFbLink(e.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1.5%",
            flexDirection: matchesA ? "column" : "row",
          }}
        >
          <Grid>
            <Grid
              sx={{
                fontSize: matchesA ? "14px" : "16px",
                fontWeight: 500,
                lineHeight: "36px",
                marginTop: ".5%",
              }}
            >
              LinkedIn
            </Grid>
            <Grid
              sx={{
                border: "1px solid #000",
                borderRadius: "10px",
                color: "#000",
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                height: "35px",
                width: matchesA ? "100%" : "550px",
              }}
            >
              <InputBase
                style={{ color: "#000" }}
                sx={{ ml: 1, flex: 1 }}
                placeholder="paste your linkedIn profile link"
                value={linkedlnLink}
                onChange={(e) => setLinkedlnLink(e.target.value)}
              />
            </Grid>
          </Grid>

          <Grid>
            <Grid
              sx={{
                fontSize: matchesA ? "14px" : "16px",
                fontWeight: 500,
                lineHeight: "36px",
                marginTop: ".5%",
              }}
            >
              Twitter (X)
            </Grid>
            <Grid
              sx={{
                border: "1px solid #000",
                borderRadius: "10px",
                color: "#fff",
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                height: "35px",
                width: matchesA ? "100%" : "550px",
              }}
            >
              <InputBase
                style={{ color: "#000" }}
                sx={{ ml: 1, flex: 1 }}
                placeholder="paste your twitter (X) profile link"
                value={twitterLink}
                onChange={(e) => setTwitterLink(e.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1.5%",
            flexDirection: matchesA ? "column" : "row",
          }}
        >
          <Grid>
            <Grid
              sx={{
                fontSize: matchesA ? "14px" : "16px",
                fontWeight: 500,
                lineHeight: "36px",
                marginTop: ".5%",
              }}
            >
              Website
            </Grid>
            <Grid
              sx={{
                border: "1px solid #000",
                borderRadius: "10px",
                color: "#000",
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                height: "35px",
                width: matchesA ? "100%" : "550px",
              }}
            >
              <InputBase
                style={{ color: "#000" }}
                sx={{ ml: 1, flex: 1 }}
                placeholder="paste your website link Here"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </Grid>
          </Grid>

          <Grid>
            <Grid
              sx={{
                fontSize: matchesA ? "14px" : "16px",
                fontWeight: 500,
                lineHeight: "36px",
                marginTop: ".5%",
              }}
            >
              YouTube
            </Grid>
            <Grid
              sx={{
                border: "1px solid #000",
                borderRadius: "10px",
                color: "#fff",
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                height: "35px",
                width: matchesA ? "100%" : "550px",
              }}
            >
              <InputBase
                style={{ color: "#000" }}
                sx={{ ml: 1, flex: 1 }}
                placeholder="paste your YouTube link Here"
                value={youtubeLink}
                onChange={(e) => setYoutubeLink(e.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1.5%",
            flexDirection: matchesA ? "column" : "row",
          }}
        >
          <Grid>
            <Grid
              sx={{
                fontSize: matchesA ? "14px" : "16px",
                fontWeight: 500,
                lineHeight: "36px",
                marginTop: ".5%",
              }}
            >
              PDF
            </Grid>
            <Grid
              sx={{
                border: "1px solid #000",
                borderRadius: "10px",
                color: "#000",
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                height: "35px",
                width: matchesA ? "100%" : "550px",
              }}
            >
              <InputBase
                style={{ color: "#000" }}
                sx={{ ml: 1, flex: 1 }}
                placeholder="PDF"
                value={pdf}
                onChange={(e) => setPDF(e.target.value)}
              />
              <IconButton
                color="primary"
                sx={{ p: "10px" }}
                aria-label="directions"
              >
                <div
                  style={{
                    border: "1px solid #000",
                    background: "#000",
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: 500,
                    width: matches ? 70 : 100,
                    borderRadius: "5px",
                    height: 25,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Upload
                </div>
              </IconButton>
            </Grid>
          </Grid>

          <Grid>
            <Grid
              sx={{
                fontSize: matchesA ? "14px" : "16px",
                fontWeight: 500,
                lineHeight: "36px",
                marginTop: ".5%",
              }}
            >
              Location
            </Grid>
            <Grid
              sx={{
                border: "1px solid #000",
                borderRadius: "10px",
                color: "#fff",
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                height: "35px",
                width: matchesA ? "100%" : "550px",
              }}
            >
              <InputBase
                style={{ color: "#000" }}
                sx={{ ml: 1, flex: 1 }}
                placeholder="paste your location link Here"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2.5%",
            flexDirection: "column",
          }}
        >
          {otherLink.map((item, index) => (
            <>
              <Grid
                sx={{
                  width: matchesA ? "100%" : "50%",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: matchesA ? 1 : 0,
                }}
              >
                {" "}
                <Grid
                  sx={{ display: "flex", width: "100%", marginTop:  matches?"8%":"2.2%" }}
                >
                  <FormControl fullWidth sx={{ width: "100%" }}>
                    <InputLabel id="demo-simple-select-label">
                      Choose Title for Link
                    </InputLabel>
                    <Select
                    sx={{scrollbarWidth:'none'}}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={otherLink[index]?.title || ""}
                      label="Choose Title for Link"
                      onChange={(event) =>
                        handleTitleChange(index, event.target.value)
                      }
                    >
                      <MenuItem value={"GitHub"}>GitHub</MenuItem>
                      <MenuItem value={"Twitter"}>Twitter</MenuItem>
                      <MenuItem value={"Telegram"}>Telegram</MenuItem>
                      <MenuItem value={"Discord"}>Discord</MenuItem>
                      <MenuItem value={"PayPal"}>PayPal</MenuItem>
                      <MenuItem value={"Snapchat"}>Snapchat</MenuItem>
                      <MenuItem value={"Skype"}>Skype</MenuItem>
                      <MenuItem value={"Reddit"}>Reddit</MenuItem>
                      <MenuItem value={"Google drive"}>Google drive</MenuItem>
                      <MenuItem value={"Dropbox"}>Dropbox</MenuItem>
                      <MenuItem value={"Pinterest"}>Pinterest</MenuItem>
                      <MenuItem value={"Behance"}>Behance</MenuItem>
                      <MenuItem value={"Flipkard"}>Flipkard</MenuItem>
                      <MenuItem value={"Indiamart"}>Indiamart</MenuItem>
                      <MenuItem value={"Justdial"}>Justdial</MenuItem>
                      <MenuItem value={"Amazon"}>Amazon</MenuItem>
                      <MenuItem value={"Meesho"}>Meesho</MenuItem>
                      <MenuItem value={"Location"}>Location</MenuItem>
                      <MenuItem value={"YouTube"}>YouTube</MenuItem>
                      <MenuItem value={"Website"}>Website</MenuItem>
                      <MenuItem value={"Review"}>Google Review</MenuItem>
                      <MenuItem value={"Spotify"}>Spotify</MenuItem>
                      <MenuItem value={"MakeMyTrip"}>MakeMyTrip</MenuItem>
                      <MenuItem value={"Agoda"}>Agoda</MenuItem>
                      <MenuItem value={"TripAdvisor"}>TripAdvisor</MenuItem>
                      <MenuItem value={"Goiboboo"}>Goiboboo</MenuItem>
                      <MenuItem value={"Oyo"}>Oyo</MenuItem>
                      <MenuItem value={"Linktree"}>LinkTree</MenuItem>
                      <MenuItem value={"Fivver"}>Fivver</MenuItem>
                      <MenuItem value={"Booking"}>Booking</MenuItem>
                      <MenuItem value={"Patym"}>Patym</MenuItem>
                      <MenuItem value={"Phone"}>Phone Pay</MenuItem>
                      <MenuItem value={"Gpay"}>G Pay</MenuItem>
                      <MenuItem value={"PDF"}>PDF</MenuItem>
                      <MenuItem value={"Others"}>Others</MenuItem>
                    </Select>
                  </FormControl>
                  <IconButton onClick={() => handleDeleteLink(index)}>
                    <Delete style={{color:'#000'}} />
                  </IconButton>
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display:
                    otherLink[index]?.title === "Others" ? "flex" : "none",
                  justifyContent: "center",
                  marginBottom: 8,
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "2%",
                }}
              >
                <InputBase
                  style={{ color: "#000" }}
                  sx={{ ml: 1, flex: 1 }}
                  value={otherLink[index]?.customTitle || ""}
                  onChange={(event) =>
                    handleCustomTitle(index, event.target.value)
                  }
                  label="Title"
                />
              </Grid>

              <Grid
                style={{
                  display: "flex",
                  border:'1px solid #000',
                  height:'35px',
                  width: matches?"100%":'50%',
                  color:'#000',
                  borderRadius:'10px',
                  justifyContent: "center",
                  marginBottom: 8,
                  marginTop:  matches?"4%":"1.5%",
                }}
              >
                <InputBase
                  style={{ color: "#000" }}
                  sx={{ ml: 1, flex: 1 }}
                  value={otherLink[index]?.link || ""}
                  onChange={(event) =>
                    handleLinkChange(index, event.target.value)
                  }
                  label="Link"
                />
              </Grid>
            </>
          ))}

          <Grid sx={{ width:"50%", marginTop: "3%" }}>
            <Button
              onClick={() => handleAddLink()}
              fullWidth
              style={{
                border: "1px solid #000",
                borderColor: "#000",
                background: "#0D0D0D",
                height: "38px",
                color: "#fff",
                fontSize: matchesA ? "12px" : "16px",
                fontWeight: 500,
                textTransform: "none",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: "22px",
                letterSpacing: "-2.2%",
              }}
            >
              Add more links
              <img
                src={add}
                width={matchesA ? 15 : 18}
                style={{ marginLeft: "2%" }}
              ></img>
            </Button>
          </Grid>
        </Grid>

        <Grid sx={{ width: "100%" }}>
          <Grid
            sx={{
              fontSize: matchesA ? "15px" : "22px",
              fontWeight: 500,
              lineHeight: "36px",
              marginTop: "3%",
            }}
          >
            Youtube videos :
          </Grid>
          <Divider
            style={{
              backgroundColor: "#000",
              marginTop: ".8%",
              width: matchesA ? "100%" : "30%",
            }}
          />
        </Grid>

        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1.5%",
            flexDirection: matchesA ? "column" : "row",
          }}
        >
          <Grid>
            <Grid
              sx={{
                fontSize: matchesA ? "14px" : "16px",
                fontWeight: 500,
                lineHeight: "36px",
                marginTop: ".5%",
              }}
            >
              videos
            </Grid>
            <Grid
              sx={{
                border: "1px solid #000",
                borderRadius: "10px",
                color: "#000",
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                height: "35px",
                width: matchesA ? "100%" : "550px",
              }}
            >
              <InputBase
                style={{ color: "#000" }}
                sx={{ ml: 1, flex: 1 }}
                placeholder="paste your YouTube LInk"
                value={youtubeLink1}
                onChange={(e) => setYoutubeLink1(e.target.value)}
              />
            </Grid>
          </Grid>

          <Grid>
            <Grid
              sx={{
                fontSize: matchesA ? "14px" : "16px",
                fontWeight: 500,
                lineHeight: "36px",
                marginTop: ".5%",
              }}
            >
              videos
            </Grid>
            <Grid
              sx={{
                border: "1px solid #000",
                borderRadius: "10px",
                color: "#fff",
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                height: "35px",
                width: matchesA ? "100%" : "550px",
              }}
            >
              <InputBase
                style={{ color: "#000" }}
                sx={{ ml: 1, flex: 1 }}
                placeholder="paste your YouTube LInk"
                value={youtubeLink2}
                onChange={(e) => setYoutubeLink2(e.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1.5%",
            flexDirection: matchesA ? "column" : "row",
          }}
        >
          <Grid>
            <Grid
              sx={{
                display: link3,
                fontSize: matchesA ? "14px" : "16px",
                fontWeight: 500,
                lineHeight: "36px",
                marginTop: ".5%",
              }}
            >
              videos
            </Grid>
            <Grid
              sx={{
                border: "1px solid #000",
                borderRadius: "10px",
                color: "#000",
                p: "2px 4px",
                display: link3,
                alignItems: "center",
                height: "35px",
                width: matchesA ? "100%" : "550px",
              }}
            >
              <InputBase
                style={{ color: "#000" }}
                sx={{ ml: 1, flex: 1 }}
                placeholder="paste your YouTube LInk"
                value={youtubeLink3}
                onChange={(e) => setYoutubeLink3(e.target.value)}
              />
            </Grid>
          </Grid>

          <Grid>
            <Grid
              sx={{
                display: link4,
                fontSize: matchesA ? "14px" : "16px",
                fontWeight: 500,
                lineHeight: "36px",
                marginTop: ".5%",
              }}
            >
              videos
            </Grid>
            <Grid
              sx={{
                border: "1px solid #000",
                borderRadius: "10px",
                color: "#fff",
                p: "2px 4px",
                display: link4,
                alignItems: "center",
                height: "35px",
                width: matchesA ? "100%" : "550px",
              }}
            >
              <InputBase
                style={{ color: "#000" }}
                sx={{ ml: 1, flex: 1 }}
                placeholder="paste your YouTube LInk"
                value={youtubeLink4}
                onChange={(e) => setYoutubeLink4(e.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1.5%",
            flexDirection: matchesA ? "column" : "row",
          }}
        >
          <Grid>
            <Grid
              sx={{
                display: link5,
                fontSize: matchesA ? "14px" : "16px",
                fontWeight: 500,
                lineHeight: "36px",
                marginTop: ".5%",
              }}
            >
              videos
            </Grid>
            <Grid
              sx={{
                border: "1px solid #000",
                borderRadius: "10px",
                color: "#000",
                p: "2px 4px",
                display: link5,
                alignItems: "center",
                height: "35px",
                width: matchesA ? "100%" : "550px",
              }}
            >
              <InputBase
                style={{ color: "#000" }}
                sx={{ ml: 1, flex: 1 }}
                placeholder="paste your YouTube LInk"
                value={youtubeLink5}
                onChange={(e) => setYoutubeLink5(e.target.value)}
              />
            </Grid>
          </Grid>

          <Grid>
            <Grid
              sx={{
                display: link6,
                fontSize: matchesA ? "14px" : "16px",
                fontWeight: 500,
                lineHeight: "36px",
                marginTop: ".5%",
              }}
            >
              videos
            </Grid>
            <Grid
              sx={{
                border: "1px solid #000",
                borderRadius: "10px",
                color: "#fff",
                p: "2px 4px",
                display: link6,
                alignItems: "center",
                height: "35px",
                width: matchesA ? "100%" : "550px",
              }}
            >
              <InputBase
                style={{ color: "#000" }}
                sx={{ ml: 1, flex: 1 }}
                placeholder="paste your YouTube LInk"
                value={youtubeLink6}
                onChange={(e) => setYoutubeLink6(e.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1.5%",
            flexDirection: matchesA ? "column" : "row",
          }}
        >
          <Grid>
            <Grid
              sx={{
                display: link7,
                fontSize: matchesA ? "14px" : "16px",
                fontWeight: 500,
                lineHeight: "36px",
                marginTop: ".5%",
              }}
            >
              videos
            </Grid>
            <Grid
              sx={{
                border: "1px solid #000",
                borderRadius: "10px",
                color: "#000",
                p: "2px 4px",
                display: link7,
                alignItems: "center",
                height: "35px",
                width: matchesA ? "100%" : "550px",
              }}
            >
              <InputBase
                style={{ color: "#000" }}
                sx={{ ml: 1, flex: 1 }}
                placeholder="paste your YouTube LInk"
                value={youtubeLink7}
                onChange={(e) => setYoutubeLink7(e.target.value)}
              />
            </Grid>
          </Grid>

          <Grid>
            <Grid
              sx={{
                display: link8,
                fontSize: matchesA ? "14px" : "16px",
                fontWeight: 500,
                lineHeight: "36px",
                marginTop: ".5%",
              }}
            >
              videos
            </Grid>
            <Grid
              sx={{
                border: "1px solid #000",
                borderRadius: "10px",
                color: "#fff",
                p: "2px 4px",
                display: link8,
                alignItems: "center",
                height: "35px",
                width: matchesA ? "100%" : "550px",
              }}
            >
              <InputBase
                style={{ color: "#000" }}
                sx={{ ml: 1, flex: 1 }}
                placeholder="paste your YouTube LInk"
                value={youtubeLink8}
                onChange={(e) => setYoutubeLink8(e.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1.5%",
            flexDirection: matchesA ? "column" : "row",
          }}
        >
          <Grid>
            <Grid
              sx={{
                display: link9,
                fontSize: matchesA ? "14px" : "16px",
                fontWeight: 500,
                lineHeight: "36px",
                marginTop: ".5%",
              }}
            >
              videos
            </Grid>
            <Grid
              sx={{
                border: "1px solid #000",
                borderRadius: "10px",
                color: "#000",
                p: "2px 4px",
                display: link9,
                alignItems: "center",
                height: "35px",
                width: matchesA ? "100%" : "550px",
              }}
            >
              <InputBase
                style={{ color: "#000" }}
                sx={{ ml: 1, flex: 1 }}
                placeholder="paste your YouTube LInk"
                value={youtubeLink9}
                onChange={(e) => setYoutubeLink9(e.target.value)}
              />
            </Grid>
          </Grid>

          <Grid>
            <Grid
              sx={{
                display: link10,
                fontSize: matchesA ? "14px" : "16px",
                fontWeight: 500,
                lineHeight: "36px",
                marginTop: ".5%",
              }}
            >
              videos
            </Grid>
            <Grid
              sx={{
                border: "1px solid #000",
                borderRadius: "10px",
                color: "#fff",
                p: "2px 4px",
                display: link10,
                alignItems: "center",
                height: "35px",
                width: matchesA ? "100%" : "550px",
              }}
            >
              <InputBase
                style={{ color: "#000" }}
                sx={{ ml: 1, flex: 1 }}
                placeholder="paste your YouTube LInk"
                value={youtubeLink10}
                onChange={(e) => setYoutubeLink10(e.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "3%",
            flexDirection: "column",
          }}
        >
          <Grid sx={{ width: "50%" }}>
            <Button
              onClick={() => handleAdd(count)}
              fullWidth
              style={{
                border: "1px solid #000",
                borderColor: "#000",
                background: "#0D0D0D",
                height: "38px",
                color: "#fff",
                fontSize: matches ? "11px" : "16px",
                fontWeight: 500,
                textTransform: "none",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: "22px",
                letterSpacing: "-2.2%",
              }}
            >
              Add more Vedios
              <img
                src={add}
                width={matchesA ? 14 : 18}
                style={{ marginLeft: "2%" }}
              ></img>
            </Button>
          </Grid>
        </Grid>

        <Grid
          sx={{
            fontSize: matchesA ? "15px" : "22px",
            fontWeight: 500,
            lineHeight: "36px",
            marginTop: "3%",
          }}
        >
          Add team members :
        </Grid>
        <Divider
          style={{
            backgroundColor: "#000",
            marginTop: ".8%",
            width: matchesA ? "100%" : "30%",
          }}
        />
        <Grid
          sx={{
            marginTop: "1%",
            width: "100%",
            display: "flex",
          }}
        >
          <Grid sx={{ width: "50%" }}>
            <Grid
              sx={{
                fontSize: matchesA ? "14px" : "16px",
                fontWeight: 500,
                lineHeight: matchesA ? "23px" : "36px",
                marginTop: ".5%",
              }}
            >
              company Name
            </Grid>
            <Grid
              sx={{
                border: "1px solid #000",
                borderRadius: "10px",
                color: "#000",
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                height: "35px",
                width: "100%",
              }}
            >
              <InputBase
                style={{ color: "#000" }}
                sx={{ ml: 1, flex: 1 }}
                placeholder="Enter your company name"
                value={companyName}
                onChange={(event) => setCompanyName(event.target.value)}
              />
            </Grid>
            <Grid
              sx={{
                fontSize: matchesA ? "10px" : "12px",
                fontWeight: 400,
                lineHeight: matchesA ? "16px" : "36px",
                marginTop: ".5%",
              }}
            >
              Describing Your Company and team will help you to grow your user
              insights exponantially.
            </Grid>
          </Grid>

          <Grid sx={{ width: matchesA ? "45%" : "40%", marginLeft: "auto" }}>
           
           
          
          <Grid
              sx={{
                fontSize: matchesA ? "13px" : "16px",
                fontWeight: 500,
                marginTop:'1%'

              }}
            >
              Team Members :
            </Grid>
            {companyName !== '' &&
            <>
            {addMember?.map((item, index) => (
              
            <Grid
              sx={{
                border: "1px solid #000",
                borderRadius: "10px",
                color: "#000",
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                height: "35px",
                width: "100%",
                marginTop:'2%'
              }}
            >
              <InputBase
                style={{ color: "#000" }}
                sx={{ ml: 1, flex: 1 }}
                placeholder="Enter His/her unique id"
                value={item?.uniqueId || ""}
                onChange={(event) => handleMemberChange(index, event.target.value)}
              />
              <IconButton
                 onClick={() => handleMemberDelete(index)}
                color="primary"
                sx={{ p: "10px" }}
                aria-label="directions"
              >
                <DeleteIcon
                  fontSize="small"
                  color="#000"
                  style={{ color: "#000" }}
                />
              </IconButton>
            </Grid>
               ))}
            <Button
            onClick={() => handleAddLinkMember()}
              fullWidth
              style={{
                border: "1px solid #000",
                borderColor: "#000",
                background: "#0D0D0D",
                height: matchesA ? "30px" : "36px",
                color: "#fff",
                fontSize: matchesA ? "9px" : "16px",
                fontWeight: 500,
                textTransform: "none",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: "22px",
                letterSpacing: "-2.2%",
                marginTop: "4%",
              }}
            >
              Add more Vedios
              <img
                src={add}
                width={matchesA ? 15 : 18}
                style={{ marginLeft: "2%" }}
              ></img>
            </Button>
            </>
          }
          </Grid>
      
        </Grid>

        <Grid
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "3%",
          }}
        >
          <Button
          onClick={() => handleSubmit()}
            style={{
              border: "1px solid #289B00",
              borderColor: "#289B00",
              background: "#289B00",
              width: "50%",
              height: matches ? "32px" : "40px",
              lineHeight: "36px",
              color: "#fff",
              fontSize: "16px",
              fontWeight: 500,
              textTransform: "none",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "-moz-grab",
            }}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
