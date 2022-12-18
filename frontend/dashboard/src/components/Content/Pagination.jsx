import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

export default function BasicPagination({ length, setPages }) {
  const [page, setpage] = useState(1);

  const handleChange = (event, value) => {
    setpage(value);
    setPages(value);
  };
  return (
    <Stack spacing={2}>
      <Pagination
        page={page}
        count={Math.ceil(length / 10)}
        color="primary"
        onChange={handleChange}
      />
    </Stack>
  );
}
