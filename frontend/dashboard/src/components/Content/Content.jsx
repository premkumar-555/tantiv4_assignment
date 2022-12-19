import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import CustomizedInputBase from "./SearchBar";
import DataUsageTable from "./Table";
import "./Content.css";
import axios from "axios";
import DataForamtter from "../../middlewares/DataFormatter";
import BasicPagination from "./Pagination";
import LinearColor from "./Loader";

const Content = () => {
  const [records, setRecords] = useState([]);
  const [pageData, setPageData] = useState([]);
  const [length, setLength] = useState(0);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        "https://dashboard-tantiv4.onrender.com/datausage"
      );
      if (data) {
        const value = DataForamtter(data.data);
        setLength(value.length);
        setRecords(value);
        setPageData(value.slice(0, 10));
      }
    } catch (error) {
      console.log("error : ", error.message);
    }
    setLoading(false);
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
        width: "65%",
        height: "86vh",
        display: "flex",
        flexDirection: "column",
        margin: "2.5vh auto",
        // border: "1px solid black",
        justifyContent: "flex-start",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        padding: "0 1.5vw",
      }}
    >
      <div id="div1">
        <h3 id="header">Data Usages</h3>
        <CustomizedInputBase
          getData={getData}
          setRecords={setRecords}
          setPageData={setPageData}
          setLength={setLength}
          setLoading={setLoading}
        />
      </div>
      {loading ? (
        <LinearColor />
      ) : (
        <>
          <DataUsageTable records={pageData} />
          <BasicPagination length={length} setPages={setPages} />
        </>
      )}
    </Box>
  );
};

export default Content;
