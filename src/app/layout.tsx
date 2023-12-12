/*
| Developed by Reskue
| Filename: layout.tsx
| Author: eric@reskue.tech
*/
import type { Metadata } from 'next'
import './globals.css'
import ThemeRegistry from './MUI/ThemeRegistry'

export const metadata: Metadata = {
  title: 'Reskue Boiler Plate V0.1',
  description: 'Userfull boilerplate Next 14 - Material UI',
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export default function RootLayout(props: any) {
  const { children } = props;
  // Render
  //--------------------------------------------------------------------------
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: 'mui' }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
