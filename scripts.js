var monthList = document.querySelector('.monthList');
var monthName = document.querySelector('.monthName');
var days = document.querySelector('.days');

var date = new Date();

var monthDayCount = {
    'January': 1,
    'February': 2,
    'March': 3,
    'April': 4,
    'May': 5,
    'June': 6,
    'July': 7,
    'August': 8,
    'September': 9,
    'October': 10,
    'November': 11,
    'December': 12,
    'Month': 0
};

monthList.onchange = function() {

    while (days.firstChild) {
        days.removeChild(days.firstChild);
    }

    monthName.textContent = monthList.value;

    var monthDayCountValue;
    for (var i in monthDayCount) {
        if (i === monthList.value) {
            monthDayCountValue = monthDayCount[i];
            break;
        }
    }

    for (var i = 1; i <= monthDayCountValue; i++) {
        var liElement = document.createElement('li');
        liElement.textContent = i;


        days.appendChild(liElement);
    }
}