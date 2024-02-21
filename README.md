# vue-project

Example project to check ESM stubbing is not working.

First of all install dependencies with `npm i` or `yarn`.

Note that '@cypress/vite-plugin-cypress-esm' has been initialized in cypress.config.ts and that in `HelloWorld.cy.ts` we are trying to stub `date-fns`.

When running the component tests `yarn test:component` you can check that `HelloWorld.cy.ts` fails to stub the `date-fns` import.
