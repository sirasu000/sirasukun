import { GetServerDataProps, PageProps } from "gatsby"
import * as React from "react"

const SSR = ({ serverData, params }: PageProps) => {
  return (
    <main>
      <h1>SSR</h1>
      <div>
        <code>
          <pre>
            {JSON.stringify({ params, serverData }, null, 2)}
          </pre>
        </code>
      </div>
    </main>
  )
}

export default SSR

export const Head = () => <title>SSR</title>

export function getServerData({ params }: GetServerDataProps) {
  return {
    props: {
      ssr: true,
      params,
    },
  };
}