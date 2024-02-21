# vue-project

Example project to check ESM stubbing is not working.

First of all install dependencies with `npm i` or `yarn`.

Note that '@cypress/vite-plugin-cypress-esm' has been initialized in cypress.config.ts and that in `HelloWorld.cy.ts` we are trying to stub `date-fns`.

When running the component tests `yarn test:component` you can check that `HelloWorld.cy.ts` fails to stub the `date-fns` import.


```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
