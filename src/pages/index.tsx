import type { NextPage } from 'next'
import Head from 'next/head'
import Container from '../containers/Home'

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container />
    </>
  )
}

export default Page