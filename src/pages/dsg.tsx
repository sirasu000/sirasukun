import * as React from "react"

const DSG = () => {
  return (
    <main>
      <h1>DSG</h1>
      <p>Hello World!</p>
    </main>
  )
}

export default DSG

export const Head = () => <title>DSG</title>

export async function config() {
  return () => {
    return {
      defer: true,
    }
  }
}