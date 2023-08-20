let resultText;

export const getTableCellTextByXpath = async (WebElementTable, searchText, returnColumnText, expectedText) => {
  //Get element by cypress options (as xpath) and find the the text 
  cy.get('#customers>tbody>tr').find("td").contains(searchText).then(($td) => {
    const $tr = $td.parent()
    cy.get($tr).find("td").eq(returnColumnText).then((text2) => {
      resultText = text2.text();

      //The sent to verifyTableCellTextByText function with 2 params: result text and expected result text
      try {
        verifyTableCellTextByText(resultText, expectedText);
      }
      catch (err) {
        cy.log("Error: The send to verifyTableCellTextByText function failed")
      }
    })
  })
};

//the following function get result and expected result texts and pring the result
export const verifyTableCellTextByText = async (resultText, expectedText) => {
  if (expectedText == resultText) {
    cy.log("Passed - expected value is:", expectedText, "the value is:", resultText)
    console.log("Passed - expected value is:", expectedText, ", the value is:", resultText)
  }
  else
    console.log("Failed - expected value is:", expectedText, ", but the value is:", resultText)
};


