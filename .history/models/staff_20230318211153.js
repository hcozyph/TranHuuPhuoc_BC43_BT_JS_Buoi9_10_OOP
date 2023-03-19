//Định nghĩa prototype nhân viên
function staffPrototype() {
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

    this.payRoll = function () {
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
    this.employeeRating = function () {
        var output = '';
        var workingHour = this.workingHour;
        if (workingHour >= 192) {
            output = 'Xuất sắc';
        }
        if (workingHour < 192 && workingHour >= 176) {
            output = 'Giỏi';
        }
        if (workingHour < 176 && workingHour >= 160) {
            output = 'Khá';
        }
        if (workingHour < 160) {
            output = 'Trung Bình';
        }
        return output;
    }
}   