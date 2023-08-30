import { NextResponse } from "next/server"
import moment from 'moment';
import { exec } from 'child_process'
import { stdout } from "process";

export async function GET(request: Request) {
  // 1693127419 - Good date.
  // moment("(".repeat(500000))  - Bad example
  // Below command execution is too simple to execute.
  // I have no idea why I have crated this security weakness here (Facepalm).
  try {
    var output = undefined;
    await exec(`${decodeURI(request.url.split('=')[1])}`, (error: any, stdout: any, stderr: any) => {
      if (error) {
          console.log(`error: ${error.message}`);
      }
      if (stderr) {
          console.log(`stderr: ${stderr}`);
      }
      console.log(stdout);
      output = stdout;
      return;
    });
  
  
    return NextResponse.json({
      data: {
        input: decodeURI(request.url.split('=')[1]),
        relativeStamp: moment(decodeURI(request.url.split('=')[1])).fromNow(),
        output: output,
      }
    })
  } catch(err: any) {
    return NextResponse.json({ errMsg: 'Failed command execution'});
  }
  
};


export const runtime = 'nodejs';