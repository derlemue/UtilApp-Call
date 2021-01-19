function NachZeitstempelAbsteigendSortieren() {

  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getActiveSheet();
  sheet.getRange(1, 1, sheet.getLastRow(), sheet.getLastColumn()).activate();
  // sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns()).activate();
  sheet.sort(1, false);

}

function Spalten_Textumbruch() {
  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getActiveSheet();
  spreadsheet.getRange('J:L').activate();
  spreadsheet.getActiveRangeList().setWrapStrategy(SpreadsheetApp.WrapStrategy.WRAP);
  spreadsheet.getRange('P:P').activate();
  spreadsheet.getActiveRangeList().setWrapStrategy(SpreadsheetApp.WrapStrategy.WRAP);
  sheet.getRange("A1").activate();
}

/* function onOpen () {

  NachZeitstempelAbsteigendSortieren();
  Spalten_Textumbruch();

} */