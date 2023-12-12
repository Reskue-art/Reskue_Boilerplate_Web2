/*
| Developed by Reskue
| Filename: page.tsx
| Author: eric@reskue.tech
*/

import React from 'react'
import { Box, Container, Select, Typography } from '@mui/material'
//import { styled } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface pageProps //extends buttonProps
{
  children?: React.ReactNode
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const page: React.FC<pageProps> = ({ children }) => {

  // Render
  //--------------------------------------------------------------------------
  return (
    <main>
      <Container>
        <Box
          height={"100vh"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}>
          <Typography variant="h2">~ Hello World ~</Typography>
        </Box>
      </Container>
    </main>
  )
}

export default page



// export default function Home() {
//   return (
//   )
// }
