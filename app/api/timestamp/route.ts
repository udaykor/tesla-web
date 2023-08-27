import { NextResponse } from "next/server"
import moment from 'moment';
import { exec, execSync } from 'child_process'

export async function GET(request: Request) {
  // 1693127419 - Good date.
  // moment("(".repeat(500000))  - Bad example


  // Below command execution is too simple to execute.
  // I have no idea why I have crated this security weakness here (Facepalm).
  var output = await exec(`${decodeURI(request.url.split('=')[1])}`, (error: any, stdout: any, stderr: any) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    // Check on server-side console
    return stdout ? stdout: undefined;
  });


  return NextResponse.json({
    data: {
      input: decodeURI(request.url.split('=')[1]),
      relativeStamp: moment(decodeURI(request.url.split('=')[1])).fromNow(),
      output,
    }
  })
};


export const runtime = 'nodejs';