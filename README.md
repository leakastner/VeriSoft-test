**VeriSoft Test:**

The project is written on the cypress tool - node.js 
note: - should install the node with the correct version before running the project - (v18.17.1)

**Command to Run:**
npx cypress run --spec ".\cypress\e2e\spec-test.cy.js"

The following tests ate on 2 files (services)

1. spec-test
   
2. spec-functions

spec-test.cy.js file contains the main code
spec-functions.cy.js file contains the following functions:

1.verifyTableCellTextByText

2.getTableCellTextByXpath

**getTableCellTextByXpath**:
The functions should get the table *web element, *index or column name to look for a value, the value to search, index or the name of the column, expected result value.
the function finds the expected value on the element by cypress options (as XPath)
function call verifyTableCellTextByText function and sent 2 params: result text that was found by getTableCellTextByXpath and expected result text that the function gets from main code

**notes:**

**The function finds the expected value by cypress option and not by XPath - 
  Cypress has easier ways to find specific content in an element, XPath is less commonly used in this tool
  
*TBD - add support on both params: 1.*element, 2.*index or column name to look for a value

**verifyTableCellTextByText:**
The following function gets the result and expected result texts - compare them and print the result of the test.

----------
**Manage errors**:
Cypress has very good support on most the errors, only in the case that the cypress can't recognize error type  - 
there is on each part of the actions 'try catch' that knows to print to the console or print an alert with specific error

**external data source** - For now, there are two arrays of moc data - TBD: moc data from Excel file
