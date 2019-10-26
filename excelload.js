node_xj = require('xls-to-json');
node_xj(
  {
    input: 'testloadfile.xlsx', // input xls
    output: 'loadfile.json', // output json
    sheet: 'Sheet1', // specific sheetname
    rowsToSkip: 0 // number of rows to skip at the top of the sheet; defaults to 0
  },
  function(err, result) {
    if (err) {
      console.error(err);
    } else {
      console.log(result);
    }
  }
);
