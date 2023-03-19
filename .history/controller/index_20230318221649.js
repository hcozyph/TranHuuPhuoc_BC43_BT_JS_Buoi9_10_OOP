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
        & kiemTra.kiemTraRong(staff.name, 'tbTen', 'Tên nhân viên')
        & kiemTra.kiemTraRong(staff.email, 'tbEmail', 'Email')
        & kiemTra.kiemTraRong(staff.password, 'tbMatKhau', 'Mật khẩu')
        & kiemTra.kiemTraRong(staff.workingDate, 'tbNgay', 'Ngày làm')
        & kiemTra.kiemTraRong(staff.basicSalary, 'tbLuongCB', 'Lương cơ bản')
        & kiemTra.kiemTraRong(staff.position, 'tbChucVu', 'Chức vụ')
        & kiemTra.kiemTraRong(staff.workingHour, 'tbGioLam', 'Giờ làm');

    //Task 2.2 -- Kiểm tra Account ID chứa 4-6 ký số
    valid = valid & kiemTra.kiemTraKySo(staff.accountID, 'tbTKNV', 'ID tài khoản', 4, 6);

    //Task 2.3 -- Kiểm tra có bị trùng ID không ?
    valid = valid & kiemTra.kiemTraTonTai(staff.accountID, staffArray, 'tknv', 'tbTKNV', 'Tài khoản');

    //Task 2.4 -- Kiểm tra định dạng tên nhân viên phải là chữ
    valid = valid & kiemTra.kiemTraDinhDangChu(staff.name, 'tbTen', 'Tên nhân viên');

    //Task 2.5 -- Kiểm tra định dạng Email
    valid = valid & kiemTra.kiemTraEmail(staff.email, 'tbEmail', 'Email');

    //Task 2.6 -- Kiểm tra mật khẩu (4-6 ký tự, chứa ít nhất 1 số, 1 in hoa, 1 đặc biệt và không trống)
    valid = valid & kiemTra.kiemTraMatKhau();



















    //TASK 3 -- Push
    staffArray.push(staff);
    console.log(staffArray)
}





// End-creat staff object