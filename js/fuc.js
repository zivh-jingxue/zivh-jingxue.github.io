function dateBetween(date) {
    date = new Date(date);
    var today = new Date();
    var among = parseInt(Math.abs(today.getTime() - date.getTime())) / 1000 / 60 / 60 /24;
    return parseFloat(among.toFixed(1));
}

function daysOfLeave(incumbency) {
    var leave = 0;
    var year = 365;
    if (incumbency < year && incumbency > (year/2)) {
        leave = 3;
    } else if (incumbency >= year && incumbency < (year*2) ) {
        leave = 7;
    } else if (incumbency >= (year*2) && incumbency < (year*3) ) {
        leave = 10;
    } else if (incumbency >= (year*3) && incumbency < (year*5) ) {
        leave = 14;
    } else if (incumbency >= (year*5) && incumbency < (year*10) ) {
        leave = 15;
    } else if (incumbency >= (year*10) && incumbency < (year*11) ) {
        leave = 16;
    } else if (incumbency >= (year*11)) {
        leave = Math.floor((incumbency/365)-10) + 16;
    } 

    leave = leave >= 30 ? 30 : leave;
    return leave;
}

function getHowManyDays(year,month) {
    var day = new Date(year,month,0);
    return day.getDate();
}

function generateDaysInput(amountOfDays) {
    var html = '';
    for (let i = 1; i <= amountOfDays; i++) {
        html += '<div class="col-3">';
        html += '<div class="input-group mb-3">';
        html += '<span class="input-group-text">' + i + '</span>';
        html += '<input type="text" class="form-control" id="' + i +'" placeholder="工作時間" aria-label="Username" aria-describedby="' + i + '" data-value="">';
        html += '<span class="input-group-text hours">0</span>';
        html += '</div></div>';
    }
    html += '<div class="col-2">';
    html += '<button type="button" class="btn btn-postive" id="calculate">計算</button></div>';
    return html;
}

function formatAndGetHours(timeString) {
    var formatedString = '';
    var hours = '';
    var float = 2; //時數小數位數
    if (timeString.length == 8) {
        formatedString = timeString.substring(0,2) + ':' + timeString.substring(2,4) + '-' + timeString.substring(4,6) + ':' + timeString.substring(6,8);

        var timeStart = new Date ("2007-01-01 " + timeString.substring(0,2) + ':' + timeString.substring(2,4) + ':00');
        var timeEnd = new Date ("2007-01-01 " + timeString.substring(4,6) + ':' + timeString.substring(6,8) + ':00');
        
        hours = ((timeEnd-timeStart)/1000/60/60).toFixed(float);
    } else if (timeString.length == 16) {
        formatedString = timeString.substring(0,2) + ':' + timeString.substring(2,4) + '-' + timeString.substring(4,6) + ':' + timeString.substring(6,8) + ',' + timeString.substring(8,10) + ':' + timeString.substring(10,12) + '-' + timeString.substring(12,14) + ':' + timeString.substring(14,16);

        var timeStart1 = new Date ("2007-01-01 " + timeString.substring(0,2) + ':' + timeString.substring(2,4) + ':00');
        var timeEnd1 = new Date ("2007-01-01 " + timeString.substring(4,6) + ':' + timeString.substring(6,8) + ':00');

        var timeStart2 = new Date ("2007-01-01 " + timeString.substring(8,10) + ':' + timeString.substring(10,12) + ':00');
        var timeEnd2 = new Date ("2007-01-01 " + timeString.substring(12,14) + ':' + timeString.substring(14,16) + ':00');

        hours = (((timeEnd1-timeStart1)/1000/60/60) + ((timeEnd2-timeStart2)/1000/60/60)).toFixed(float);
    } else if (timeString.length == 0) {
        formatedString = 0;
        hours = 0;
    } else {
        formatedString = '數值錯誤請重新輸入。';
        hours = 0;
    }
    hours = parseFloat(hours);
    return {formatedString,hours};
}

function calculateTotalHours() {
    var total = 0;
    var hours = document.getElementsByClassName('hours');
    var length = hours.length;
    for (let i = 0; i < length; i++) {
        total += parseFloat(hours[i].innerHTML);
    }
    return parseFloat(total.toFixed(2));
}

function calculateTotalOvertimeHours() {
    var total = 0;
    var hours = document.getElementsByClassName('badge');
    var length = hours.length;
    for (let i = 0; i < length; i++) {
        //預計寫用斜線分別計算
    }
    return parseFloat(total.toFixed(2));
}

function getMealAllowance(hours) {
    const mealAllowancePer5Hours = 50;
    return Math.floor(hours/5) * mealAllowancePer5Hours;
}

function getOTHours(hours) {
    const overtimeLimit = 10; //超過加班的時數
    let overtimeRange1 = 0,overtimeRange2 = 0;
    if (hours > overtimeLimit) {
        overtimeRange1 = hours <= 12 ? parseFloat((hours - overtimeLimit).toFixed(2)) : 2;
        overtimeRange2 = hours > 12 ? parseFloat((hours - 12).toFixed(2)) : 0;
    }
    return {overtimeRange1,overtimeRange2};
}