// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const {spawn} = require('child_process');

async function runPython(question : any) {
  const execSync = require('child_process').execSync
  const pythonProcess = execSync('python3 pages/api/hello.py')

  console.log(pythonProcess.toString());

  return "";
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const question = req.body;

  const answer = await runPython(question);
  console.log(answer);

  res.status(200).json({ data: "evewf" })
}
