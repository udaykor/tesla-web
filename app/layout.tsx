import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Tesla Web',
  description: 'Tesla',
}

export default function RootLayout(props: {
  children: React.ReactNode,
  state: React.ReactNode,
  commands: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        {props.children}
        {props.state}
        {props.commands}
      </body>
    </html>
  )
}

