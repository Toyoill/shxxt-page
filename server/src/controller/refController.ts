import { Request, Response } from "express";
import pool from "../model/db";

export default function getAll(req: Request, res: Response) {
  // CORS 해결 코드, 다른 방식으로 해결하여 지울것
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");

  console.log("fetching...");
  pool.query(
    "SELECT * FROM content_menu ORDER BY belong, idx",
    (err, result) => {
      if (err) return res.sendStatus(400);
      res.status(200);
      res.json(JSON.stringify(result.rows));
    }
  );
}
