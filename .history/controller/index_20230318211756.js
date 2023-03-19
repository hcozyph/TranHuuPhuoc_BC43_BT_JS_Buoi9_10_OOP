// summarized function
function getEle(name) {
    return document.getElementById(name);
}
function querySelector(name) {
    return document.querySelector(name);
}
// End-summarized function

var staffArray = [];

// creat staff object
getEle('btnThemNV').onclick = function () {
    var staff = new prototypeOfStaff;
    staff.accountID = querySelector('tknv').value;
    staff.name = querySelector('name').value;
    staff.email = querySelector('email').value;
    staff.password = querySelector('password').value;
    staff.workingDate = querySelector('datepicker').value;

    staff.basicSalary = querySelector('luongCB').value;
    staff.position = querySelector('chucvu').value;
    staff.workingHour = querySelector('gioLam').value;

    staff.totalSalary = staff.payRoll();
    staff.typeOfStaff = staff.employeeRating();

    console.log(staff);
}





// End-creat staff object