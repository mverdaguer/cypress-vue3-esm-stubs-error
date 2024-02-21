import HelloWorld from './HelloWorld.vue'
import * as dateFns from 'date-fns'

describe('<HelloWorld />', () => {
  it('renders', () => {
    cy.stub(dateFns, 'isToday')
    // see: https://on.cypress.io/mounting-vue
    cy.mount(HelloWorld)
  })
})
