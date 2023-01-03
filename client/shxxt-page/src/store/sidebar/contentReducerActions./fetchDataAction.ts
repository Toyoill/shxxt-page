import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchData = createAsyncThunk("content/fetchData", async () => {
  console.log("fetching...");
  const response = await axios.get("http://localhost:4000/ref/all");
  return response.data;
});

export default fetchData;
