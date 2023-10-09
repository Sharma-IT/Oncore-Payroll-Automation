const allWeekdays = ['Monday','Tuesday','Wednesday','Thursday','Friday'];

describe('Submit the timesheet of the current week', () => {
  it('Submits weekly timesheet', () => {
    allWeekdays.forEach((day) => {
        cy.addTimeSheetEntryFor(day);
    });
    cy.submitTimesheet();
  });
});

