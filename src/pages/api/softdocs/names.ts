const { Logtail } = require("@logtail/node");
const logtail = new Logtail("sRYNwWYpHW39ELZ1dkTUfnrK");

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { namesDb } from "../../../fakedb";

type ResponseData = {
  names?: string[];
  error?: string;
};

// get and post request handler
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "GET") {
    res.status(200).json(namesDb);
  } else if (req.method === "POST") {
    // validate params
    if (!req.body.name) {
      res.status(400).json({ error: "name is required" });
      return;
    }

    // add name to db
    namesDb.names.push(req.body.name.toUpperCase());
    res.status(200).json(namesDb);
  }
}
