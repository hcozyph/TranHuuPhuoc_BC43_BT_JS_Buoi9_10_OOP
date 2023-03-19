/* Summarized Function*/
function getEle(n) {
    return document.getElementById(n);
}
function querySelector(n) {
    return document.querySelector(n);
}
/* End-Summarized Function*/


var arrayOfStaff = [];
var check = new Validation();


/* Add a staff object */
getEle('btnThemNV').onclick = function () {
    //input: staff object
    var staff = new prototypeOfStaff;
    staff.account = querySelector('#tknv').value;
    staff.name = querySelector('#name').value;
    staff.email = querySelector('#email').value;
    staff.password = querySelector('#password').value;

    staff.workingDate = querySelector('#datepicker').value;
    staff.basicSalary = querySelector('#luongCB').value;
    staff.position = querySelector('#chucvu').value;
    staff.workingHour = querySelector('#gioLam').value;
    console.log(staff);

    //Kiểm tra dữ liệu đầu vào 
    var valid = true;
    valid = check.kiemTraRong(staff.account, 'tbTKNV', 'Mã nhân viên') & check.kiemTraRong(staff.name, 'tbTen', 'Tên nhân viên') & check.kiemTraRong(staff.email, 'tbEmail', 'Email');
    //Kiểm tra định dạng ký tự
    valid = valid & check.kiemTraKyTu(staff.name, 'tbTen-format', 'Tên nhân viên');
    //Kiểm tra email
    valid = valid & check.kiemTraEmail(staff.email, 'tbEmail-format', 'Email');
    // //Kiểm tra độ dài
    // valid = valid & kiemTra.kiemTraDoDai(sv.maSinhVien, 'error-min-max-length-maSinhVien', 'Mã Sinh Viên', 4, 6);
    // //Kiểm tra giá trị
    // valid = valid & kiemTra.kiemTraGiaTri(sv.diemToan, 'error-min-max-length-diemToan', 'Điểm Toán', 0, 10) & kiemTra.kiemTraGiaTri(sv.diemLy, 'error-min-max-length-diemLy', 'Điểm Lý', 0, 10) & kiemTra.kiemTraGiaTri(sv.diemHoa, 'error-min-max-length-diemHoa', 'Điểm Hóa', 0, 10)

}
/* End-Add an object */


























