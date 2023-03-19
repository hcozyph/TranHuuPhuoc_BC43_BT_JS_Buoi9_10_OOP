//Định nghĩa prototype nhân viên
function NhanVien() {
    this.accountID = '';
    this.name = '';
    this.email = '';
    this.password = '';
    this.workingDate = '';

    this.basicSalary = '';
    this.position = '';
    this.workingHour = '';

    this.totalSalary = '';
    this.typeOfStaff = '';

    this.tinhLuong = function () {
        var totalSalary = 0;
        if (this.position == 'Giám đốc') {
            totalSalary = this.basicSalary * 3;
        } else if (this.position === 'Trưởng phòng') {
            totalSalary = this.basicSalary * 2;
        } else if (this.position === 'Nhân viên') {
            totalSalary = this.basicSalary * 1;
        }
        return totalSalary;
    }
    this.xepLoaiNhanVien = function () {
        var output = '';
        var soGio = this.gioLam;
        if (soGio >= 192) {
            output = 'Xuất sắc';
        }
        if (soGio < 192 && soGio >= 176) {
            output = 'Giỏi';
        }
        if (soGio < 176 && soGio >= 160) {
            output = 'Khá';
        }
        if (soGio < 160) {
            output = 'Trung Bình';
        }
        return output;
    }
}   