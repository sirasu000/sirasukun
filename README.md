# Gatsby Adapters: Alpha (Demo)

Demo site for the corresponding [RFC: Gatsby Adapters](https://github.com/gatsbyjs/gatsby/discussions/38231). It uses `gatsby@alpha-adapters` and thus still outputs some more verbose logging.

## Try it out: Netlify

As part of the RFC we also worked on `gatsby-adapter-netlify`. When you publish your site to Netlify you should see a log like:

```shell
info Using gatsby-adapter-netlify adapter
```

Deploy this demo with one click on [Netlify](https://app.netlify.com/signup):

[<img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" />](https://app.netlify.com/start/deploy?repository=https://github.com/LekoArts/gatsby-adapters-alpha-demo)

Locally you can also use the [netlify-cli](https://github.com/netlify/cli) and use:

```shell
ntl serve
```

The netlify-cli will then run the build and serve the Gatsby site.

## Try it out: Locally

If you don't want to publish this demo site to Netlify and/or want to try out an adapter locally, you can edit the `gatsby-config.ts` to uncomment the `adapter` line:

```diff
- // adapter: localAdapter(),
+ adapter: localAdapter(),
```

Now run `gatsby build` and you should see the log:

```shell
info Using gatsby-adapter-local adapter
```

Adapters are only run during `gatsby build`, so if you modify the `local-adapter.ts` file, you have to re-run `gatsby build`.
