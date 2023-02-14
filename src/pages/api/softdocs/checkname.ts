// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { namesDb } from "../../../fakedb";

type ResponseData = {
  actor: string;
};

// get and post request handler
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<String>
) {
  console.log("checkname.ts: handler() called");
  console.log("body", req.body);
  console.log(req.query);

  // check if name is in db
  //const approved = namesDb.names.includes(req.body.name.toUpperCase());
  //res.status(200).json({ approved });
  res.status(200).json("claponsie@kvcc.edu");
}
