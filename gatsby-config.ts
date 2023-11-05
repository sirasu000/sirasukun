import type { GatsbyConfig } from "gatsby"
import localAdapter from "./local-adapter"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `gatsby-adapters-alpha-demo`,
  },
  // You can uncomment the `adapter` line below to use the local adapter
  // adapter: localAdapter(),
  plugins: [],
}

export default config
