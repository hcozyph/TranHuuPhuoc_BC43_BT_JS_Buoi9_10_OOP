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
    // staff.totalSalary = querySelector('').value;
    // staff.typeOfEmployee = querySelector('').value;
    // console.log(staff);

    //Kiểm tra dữ liệu đầu vào 
    var valid = true;
    valid = check.kiemTraRong(staff.account, 'tbTKNV', 'Mã nhân viên') & check.kiemTraRong(staff.name, 'tbTen', 'Tên nhân viên') & check.kiemTraRong(staff.email, 'tbEmail', 'Email');
    // //Kiểm tra định dạng ký tự
    // valid = valid & kiemTra.kiemTraKyTu(sv.tenSinhVien, 'error-allLetter-tenSinhVien', 'Tên sinh viên');
    // //Kiểm tra email
    // valid = valid & kiemTra.kiemTraEmail(sv.email, 'error-email', 'Email');
    // //Kiểm tra số
    // valid = valid & kiemTra.kiemTraSo(sv.soDienThoai, 'error-number-soDienThoai', 'Số Điện Thoại');
    // //Kiểm tra độ dài
    // valid = valid & kiemTra.kiemTraDoDai(sv.maSinhVien, 'error-min-max-length-maSinhVien', 'Mã Sinh Viên', 4, 6);
    // //Kiểm tra giá trị
    // valid = valid & kiemTra.kiemTraGiaTri(sv.diemToan, 'error-min-max-length-diemToan', 'Điểm Toán', 0, 10) & kiemTra.kiemTraGiaTri(sv.diemLy, 'error-min-max-length-diemLy', 'Điểm Lý', 0, 10) & kiemTra.kiemTraGiaTri(sv.diemHoa, 'error-min-max-length-diemHoa', 'Điểm Hóa', 0, 10)

}
/* End-Add an object */


























