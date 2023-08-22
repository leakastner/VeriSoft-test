import { getTableCellTextByXpath } from "./spec-functions.cy.js";

describe('VerySoft Test', () => {
  //Moc Data for tests
  let table;
  //Moc = arr with correct details - for positive test
  let arrExcelPositive = ["Helen Bennett", 2, "UK", "Alfreds Futterkiste", 2, "Germany", "Roland Mendel", 0, "Ernst Handel", "Laughing Bacchus Winecellars", 2, "Canada", "Giovanni Rovelli", 0, "Magazzini Alimentari Riuniti", "Magazzini Alimentari Riuniti", 2, "Italy"]
  //Moc = arr with incorrect details - for negative test
  let arrExcelNegative = ["Helen Bennett", 2, "UKK", "Alfreds Futterkiste", 2, "G", "Roland Mendel", 0, "E Handel", "Laughing Bacchus Winecellars", 2, "Cada", "Giovanni Rovelli", 0, "Magazzini Aliment", "Magazzini Alimentari Riuniti", 2, "Itay"]

  it('positive test', () => {
    //Go to Url
    try {
      cy.visit('https://www.w3schools.com/html/html_tables.asp')

    }
    catch (err) {
      alert("Error: connection to html table failed on the Positive test")
    }
    //The pollowing loop run on all the moc data positive arr and send the values for tests to the getTableCellTextByXpath function
    try {
      for (let i = 0; i < arrExcelPositive.length - 1; i += 3) {
        getTableCellTextByXpath(table, arrExcelPositive[i], arrExcelPositive[i + 1], arrExcelPositive[i + 2]);
      }
    }
    catch (err) {
      cy.log("Error: the sent to getTableCellTextByXpath function fails on the Positive test")
    }

  })

  it('negative test', () => {
    //Go to Url
    try {
      cy.visit('https://www.w3schools.com/html/html_tables.asp')
    }
    catch (err) {
      cy.console.log("Error: connection to html table failed on the Negative test")
    }
    //The pollowing loop run on all the moc data positive arr and send the values for tests to the getTableCellTextByXpath function
    try {
      for (let i = 0; i < arrExcelNegative.length - 1; i += 3) {
        getTableCellTextByXpath(table, arrExcelNegative[i], arrExcelNegative[i + 1], arrExcelNegative[i + 2]);
      }
    }
    catch (err) {
      cy.log("Error:  the sent to getTableCellTextByXpath function fails on the Negative test")
      console.log("Error:  the sent to getTableCellTextByXpath function fails on the Negative test")
    }
  })
})