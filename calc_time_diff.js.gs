function calcTime() {

// columns with notBefore and notAfter dates
var startField = "E";
var endField = "F";
var resultField = "S";

Logger.log("Start")

// first sheet
    var ws_input = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Input");
    var data_input = ws_input.getRange("A" + ws_input.getLastRow() + ":Q" + ws_input.getLastRow()).getValues();
    

// row range
			data_input.forEach(function(row){
                var lastRow = ws_input.getLastRow();
                var vTime1F = new Date(ws_input.getSheetValues(lastRow, 5, 1, 1));
                var vTime2F = new Date(ws_input.getSheetValues(lastRow, 6, 1, 1));
				var vTime1 = Utilities.formatDate(vTime1F, "Europe/Berlin", "HH:mm");
				var vTime2 = Utilities.formatDate(vTime2F, "Europe/Berlin", "HH:mm");
                Logger.log(vTime1)
                Logger.log(vTime2)
        function getHourDiff(vTime1, vTime2) {
    if (!isValidHour(vTime1) || !isValidHour(vTime2)) {
        return "Invalid input(s)";
    }

    var h1 = vTime1.split(":"), h2 = vTime2.split(":");
    var h = 0, m = 0;
    Logger.log(h1)
    Logger.log(h2)
    
    h = h1[0] - h2[0];
    m = h1[1] - h2[1];
    Logger.log(h)
    Logger.log(hm)

    if (h < 0) {
        h = -h; 
        m = -m;
    }
    if (h == 0) {
        m = Math.abs(m);
    }
    if (m < 0) {
        m = m + 60;
        h = h - 1;
    }
    
    Logger.log(h+":"+m)

    return h+":"+m;
}

function isValidHour(hour) {
    hourPattern = "^([01]?[0-9]|2[0-3]):[0-5][0-9]$";
    if (hour.match(hourPattern)) {return true;}
    return false;
}
})
};