import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Button, Stack, Typography } from '@mui/material'
import { useState } from 'react'

export default function Page() {
  const [counter, setCounter] = useState<number>(0)

  const incrementCounter = () => setCounter(counter => counter + 1)
  const reduceCounter = () => {
    if(counter > 0)
      setCounter(counter => counter - 1)
  }

  return (
    <>
      <Head>
        <title>Contador</title>
        <meta name="description" content="Contador simples" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Stack spacing={4}>
          <Typography textAlign='center' fontSize={40}>{counter}</Typography>
          <Stack direction='row-reverse' spacing={4}>
            <Button variant='contained' onClick={incrementCounter}>
              <Typography textAlign='center' fontSize={40}>+</Typography>
            </Button>
            <Button variant='contained' color='error' onClick={reduceCounter}>
              <Typography textAlign='center' fontSize={40}>-</Typography>
            </Button>
          </Stack>
        </Stack>
      </main>
    </>
  )
}
