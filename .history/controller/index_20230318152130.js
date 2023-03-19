/* Summarized Function*/
function getEle(n) {
    return document.getElementById(n);
}
function querySelector(n) {
    return document.querySelector(n);
}
/* End-Summarized Function*/


/* Add a staff object */
getEle('btnThemNV').onclick = function () {
    //input: staff object
    var staff = new prototypeOfStaff;

    staff.account = querySelector('#tknv').value;
    staff.name = querySelector('#name').value;
    staff.email = querySelector('#email').value;
    staff.password = querySelector('#password').value;
    staff.position = querySelector('#chucvu').value;

    staff.workingDay = querySelector('#datepicker').value;
    staff.numherOfHour = querySelector('').value;
    staff.typeOfEmployee = querySelector('').value;
    staff.basicSalary = querySelector('').value;
    staff.totalSalary = querySelector('').value;

}
/* End-Add an object */


























