import { getTableCellTextByXpath } from "./spec-functions.cy.js";
//import {} from "./moc data arrs.js"

describe('test', () => {
  let table;
  let t;

  let arrExcellPositive = ["Helen Bennett", 2, "UK", "Alfreds Futterkiste", 2, "Germany", "Roland Mendel", 0, "Ernst Handel"]
  let arrExcellNegative = ["Helen Bennett", 2, "UKK", "Alfreds Futterkiste", 2, "G", "Roland Mendel", 0, "E Handel"]

  it('positive test', () => {
   //log('ffff')
  console.log('ffff');
//ypress.log("kkk")
    try {
      cy.visit('https://www.w3schools.com/html/html_tables.asp')
      
    } catch (err) { alert("Error: connection to html table failed on the Positive test") }

    try {
      for (let i = 0; i < arrExcellPositive.length - 1; i += 3) {
        getTableCellTextByXpath(t, arrExcellPositive[i], arrExcellPositive[i + 1], arrExcellPositive[i + 2]);
      }
    } catch (error) { cy.log("Error: the sent to getTableCellTextByXpath function fails on the Positive test") }

    //})
  })

  it('negative test', () => {
    try {
      cy.visit('https://www.w3schools.com/html/html_tables.asp')
    } catch (error) { cy.console.log("Error: connection to html table failed on the Negative test") }
    try {
      for (let i = 0; i < arrExcellNegative.length - 1; i += 3) {
        getTableCellTextByXpath(t, arrExcellNegative[i], arrExcellNegative[i + 1], arrExcellNegative[i + 2]);
      }
    } catch (error) {
      cy.log("Error:  the sent to getTableCellTextByXpath function fails on the Negative test")
      console.log("Error:  the sent to getTableCellTextByXpath function fails on the Negative test")
    }
  })
})
   // cy.get('#customers').then((table) => {
    //   cy.log(table)
    //   t=table.id();
    // });