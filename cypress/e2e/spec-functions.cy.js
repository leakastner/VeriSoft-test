let resultText;

export const getTableCellTextByXpath = async (WebElementTable, searchText, returnColumnText, expectedText) => {
  //get element by cypress options (as xpath) and find the the text 
  cy.get('#customers>tbody>tr').find("td").contains(searchText).then(($td) => {
    const $tr = $td.parent()
    cy.get($tr).find("td").eq(returnColumnText).then((text2) => {
      resultText = text2.text();

      //the sent to verifyTableCellTextByText function with 2 params: result text and expected result text
      try {
        verifyTableCellTextByText(resultText, expectedText);
      } catch (error) {
        cy.log("Error: The send to verifyTableCellTextByText function failed")
      }

    })
  })
};

//the following function get result and expected result texts and pring the result
export const verifyTableCellTextByText = async (resultText, expectedText) => {
  if (expectedText == resultText) {
    cy.log("passed - expected value is:", expectedText, "the value is:", resultText)
    console.log("passed - expected value is:", expectedText, "the value is:", resultText)
  }
  else
    console.log("failed - expected value is:", expectedText, "but the value is:", resultText)
};


