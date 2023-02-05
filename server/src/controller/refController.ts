import { Request, Response } from "express";
import pool from "../model/db";
import { Data, UpdatedData } from "../types/refType";

export function getAll(req: Request, res: Response) {
  pool.query(
    "SELECT * FROM content_menu ORDER BY belong, idx",
    (err, result) => {
      if (err) return res.sendStatus(400);

      pool.query("SELECT MAX(id) FROM content_menu", (cntErr, cntResult) => {
        if (cntErr) return res.sendStatus(400);
        res.status(200);
        res.json(JSON.stringify([+cntResult.rows[0].max + 1, result.rows]));
      });
    }
  );
}

export async function postChanges(req: Request, res: Response) {
  try {
    for (const data of req.body.newDatas as Array<Data>) {
      await pool.query(
        "INSERT INTO content_menu(id, type, idx, title, belong) VALUES($1, $2, $3, $4, $5) ON CONFLICT (id) DO NOTHING",
        [data.id, data.type, data.idx, data.title, data.belong]
      );
    }
  } catch (err) {
    console.log(err);
    res.status(400).send("INSERTERR");
  }

  try {
    for (const data of req.body.updatedDatas as Array<UpdatedData>) {
      if (data.removed) {
        console.log(data.id);
        await pool
          .query("DELETE FROM content_menu WHERE id = $1", [data.id])
          .catch((err) => console.log(err));
        await pool
          .query("DELETE FROM article WHERE content_id = $1", [data.id])
          .catch((err) => console.log(err));
        continue;
      }

      let queryString = "UPDATE content_menu SET";
      const queryData = [];
      let cnt = 1;

      if (data.idx) {
        queryString += ` idx = $${cnt}`;
        cnt += 1;
        queryData.push(data.idx);
      }
      if (data.title) {
        queryString += ` title = $${cnt}`;
        cnt += 1;
        queryData.push(data.title);
      }
      if (data.belong) {
        queryString += ` title = $${cnt}`;
        cnt += 1;
        queryData.push(data.belong);
      }

      queryString += ` WHERE id = $${cnt}`;
      queryData.push(data.id);

      await pool.query(queryString, queryData);
    }
  } catch (err) {
    console.log(err);
    res.status(400).send("UPDATEERR");
  }
  res.status(200).end();
}

export function getArticle(req: Request, res: Response) {
  pool
    .query("SELECT * FROM article WHERE content_id = $1", [
      req.params.contentId,
    ])
    .then((result) => {
      if (result.rows[0] !== undefined)
        res.json(JSON.stringify(result.rows[0]));
      else res.json(JSON.stringify(""));
    });
}

export function postArticle(req: Request, res: Response) {
  pool
    .query("INSERT INTO article (content_id, main) VALUES ($1, $2)", [
      req.params.contentId,
      req.body.main,
    ])
    .then(() => {
      res.status(200).end();
    })
    .catch(() => {
      res.status(400).end();
    });
}
