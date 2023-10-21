// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const {spawn} = require('child_process');

async function runPython(question : any) {
  let python = spawn('python', ['python/hello.py']);
  let dataToSend = '';

  for await (const data of python.stdout){
    dataToSend += data.toString()
  }
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const question = req.body;

  const answer = runPython(question);
  console.log(question);

  res.status(200).json({ data: answer })
}
