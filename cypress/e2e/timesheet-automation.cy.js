const allWeekdays = ['Monday','Tuesday','Wednesday','Thursday','Friday'];

describe('Payroll', () => {
  it('Submits weekly timesheet', () => {
    allWeekdays.forEach((day) => {
        cy.addTimeSheetEntryFor(day);
    });
    cy.submitTimesheet();
  });
});

