/* Summarized Function*/
function getEle(n) {
    return document.getElementById(n);
}
/* End-Summarized Function*/


/* Add a staff object */
getEle('btnThemNV').onclick = function () {
    //input: staff object
    var staff = new prototypeOfStaff;

    staff.account = '';
    staff.name = '';
    staff.email = '';
    staff.password = '';
    staff.position = '';

    staff.numberOfDay = '';
    staff.numherOfHour = '';
    staff.typeOfEmployee = '';
    staff.basicSalary = '';
    staff.totalSalary = '';

}
/* End-Add an object */


























