import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchData = createAsyncThunk("content/fetchData", async () => {
  const response = await axios.get("http://localhost:4000/ref/all");
  const datas = JSON.parse(response.data);
  return datas;
});

export default fetchData;
