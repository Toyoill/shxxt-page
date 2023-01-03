import pool from "../model/db";

export default function getAll() {
  console.log("fetching...");
  pool.query("SELECT * FROM content_menu", (err, result) => {
    if (err) return console.log(err);
    console.log(result.rows);
  });
}
