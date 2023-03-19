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
    // Task 1 -- Get value
    var staff = new prototypeOfStaff;
    staff.accountID = querySelector('#tknv').value;
    staff.name = querySelector('#name').value;
    staff.email = querySelector('#email').value;
    staff.password = querySelector('#password').value;
    staff.workingDate = querySelector('#datepicker').value;

    staff.basicSalary = querySelector('#luongCB').value;
    staff.position = querySelector('#chucvu').value;
    staff.workingHour = querySelector('#gioLam').value;

    staff.totalSalary = staff.payRoll();
    staff.typeOfStaff = staff.employeeRating();

    //TASK 2 -- Validation
    var kiemTra = new Validation;
    var valid = true;

    //Task 2.1 -- Kiểm tra rỗng
    valid = kiemTra.kiemTraRong(staff.accountID, 'tbTKNV', 'ID Tài khoản')
        & kiemTra.kiemTraRong(staff.name, 'tbTen')
        & kiemTra.kiemTraRong(staff.email, 'tbEmail')
        & kiemTra.kiemTraRong(staff.password, 'tbMatKhau')
        & kiemTra.kiemTraRong(staff.workingDate, 'tbNgay')
        & kiemTra.kiemTraRong(staff.basicSalary, 'tbLuongCB')
        & kiemTra.kiemTraRong(staff.position, 'tbChucVu')
        & kiemTra.kiemTraRong(staff.workingHour, 'tbGioLam');





















    //TASK 3 -- Push
    staffArray.push(staff);
    console.log(staffArray)
}





// End-creat staff object