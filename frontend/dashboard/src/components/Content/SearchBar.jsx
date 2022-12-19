import { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import axios from "axios";
import DataForamtter from "../../middlewares/DataFormatter";

export default function CustomizedInputBase({
  setRecords,
  setPageData,
  setLength,
  getData,
}) {
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");

  const filterForHost = async () => {
    if (!search) {
      alert("Please enter host name");
      return;
    }
    try {
      const { data } = await axios.get(
        `http://localhost:2500/datausage/search?hostname=${search}`
      );
      let formatedData = DataForamtter(data);
      setRecords(formatedData);
      setPageData(formatedData.slice(0, 10));
      setLength(formatedData.length);
    } catch (error) {
      console.log("error :", error.message);
    }
  };

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "30%",
        height: "40px",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search by hostname"
        inputProps={{ "aria-label": "search google maps" }}
        onChange={(e) => {
          setSearch(e.target.value);
          if (e.target.value === "") {
            getData();
          }
        }}
      />
      <IconButton
        onClick={filterForHost}
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
