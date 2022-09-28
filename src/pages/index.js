import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Button from "../components/button/Index"
import FetchData from "../examples/fetchData"

export default function Home() {
  return (
    <Layout>
      <h1>
        Hello People!<Link to="/about">About</Link>
      </h1>
      <Button />
      <FetchData />
    </Layout>
  )
}
