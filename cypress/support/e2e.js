import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
    console.error('Uncaught Exception:', err.message);
  
    return false;
  });