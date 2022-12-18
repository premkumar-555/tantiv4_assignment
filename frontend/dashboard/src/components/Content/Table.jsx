import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuid } from "uuid";

function DataUsageTable({ records }) {
  return (
    <>
      <Table striped bordered hover style={{ textAlign: "center" }}>
        <thead>
          <tr>
            <th>Host Name</th>
            <th>Download</th>
            <th>Upload</th>
            <th>Date Created</th>
          </tr>
        </thead>
        <tbody>
          {records.map((ele) => (
            <tr key={uuid()}>
              <td>{ele.hostName}</td>
              <td>{ele.download} GB</td>
              <td>{ele.upload} GB</td>
              <td>{ele.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default DataUsageTable;
