import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import CustomizedInputBase from "./SearchBar";
import DataUsageTable from "./Table";
import "./Content.css";
import axios from "axios";
import DataForamtter from "../../middlewares/DataFormatter";
import BasicPagination from "./Pagination";

const Content = () => {
  const [records, setRecords] = useState([]);
  const [pageData, setPageData] = useState([]);
  const [length, setLength] = useState(0);

  const getData = async () => {
    try {
      const { data } = await axios.get("http://localhost:2500/datausage");
      if (data) {
        const value = DataForamtter(data.data);
        setLength(value.length);
        setRecords(value);
        setPageData(value.slice(0, 10));
      }
    } catch (error) {
      console.log("error : ", error.message);
    }
  };

  const setPages = (page) => {
    let start = (page - 1) * 10;
    let end = start + 10;
    setPageData(records.slice(start, end));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box
      sx={{
        width: "83vw",
        height: "86vh",
        display: "flex",
        flexDirection: "column",
        margin: "2.5vh auto",
        border: "1px solid black",
        // justifyContent: "center",
        // alignItems: "center",
        padding: "0 1.5vw",
      }}
    >
      <div id="div1">
        <h3 id="header">Data Usages</h3>
        <CustomizedInputBase />
      </div>
      <DataUsageTable records={pageData} />
      <BasicPagination
        length={length}
        sx={{ marginLeft: "50%" }}
        setPages={setPages}
      />
    </Box>
  );
};

export default Content;
