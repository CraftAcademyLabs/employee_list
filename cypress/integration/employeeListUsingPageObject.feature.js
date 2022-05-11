import EmployeeList from '../support/EmployeeList'

const list = new EmployeeList()

describe('Visting the application', () => {
  
  it('is expected to display Thomas on top', () => {
    list.visit()
    list.firstItem().should('contain.text', 'Thomas Ochman')
  });
  
});