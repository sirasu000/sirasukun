import { inspect } from "util"
import type { AdapterInit } from "gatsby"

const createLocalAdapter: AdapterInit = (adapterOptions) => {
  return {
    name: `gatsby-adapter-local`,
    cache: {
      restore({ directories, reporter }) {
        reporter.info(`[gatsby-adapter-local] cache.restore() ${directories}`)
      },
      store({ directories, reporter }) {
        reporter.info(`[gatsby-adapter-local] cache.store() ${directories}`)
      }
    },
    adapt({
      routesManifest,
      functionsManifest,
      reporter,
    }) {
      reporter.info(`[gatsby-adapter-local] adapt()`)

      console.log(`[gatsby-adapter-local] adapt()`, inspect({
        routesManifest,
        functionsManifest
      }, {
        depth: Infinity,
        colors: true
      }))
    }
  }
}

export default createLocalAdapter