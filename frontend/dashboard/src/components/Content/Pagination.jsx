import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

export default function BasicPagination({ length, setPages }) {
  const [page, setpage] = useState(1);
  const styles = {
    display: "flex",
    justifyContent: "flex-end",
    width: "90%",
  };
  const handleChange = (event, value) => {
    setpage(value);
    setPages(value);
  };
  return (
    <div style={styles}>
      <Stack spacing={2}>
        <Pagination
          page={page}
          count={Math.ceil(length / 10)}
          color="primary"
          onChange={handleChange}
        />
      </Stack>
    </div>
  );
}
