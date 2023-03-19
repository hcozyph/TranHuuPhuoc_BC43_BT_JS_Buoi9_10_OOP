//Khai báo 1 prototype chứa các hàm kiểm tra nhập liệu
function Validation() {
    this.kiemTraRong = function (value, idError, name) {
        if (value.trim() === '') {
            getEle(idError).style.display = 'block';
            getEle(idError).innerHTML = `${name} không được bỏ trống !`;
            return false;
        }
        getEle(idError).innerHTML = '';
        return true;
    }

    this.kiemTraKyTu = function (value, idError, name) {
        var regexLetter = /^[A-Z a-z]+$/;
        //Nếu chuỗi định dạng test thành công value thì true
        if (regexLetter.test(value)) {
            getEle(idError).innerHTML = ''
            return true;
        }
        getEle(idError).innerHTML = `${name} tất cả phải là ký tự`;
        return false;
    }

    this.kiemTraEmail = function (value, idError, name) {
        var regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (regexEmail.test(value)) {
            getEle(idError).innerHTML = '';
            return true;
        }
        getEle(idError).innerHTML = `${name} không hợp lệ !`;
        return false;
    }

    this.kiemTraSo = function (value, idError, name) {
        var regexNmuber = /^[0-9]+$/;
        if (regexNmuber.test(value)) {
            getEle(idError).innerHTML = '';
            return true;
        }
        getEle(idError).innerHTML = `${name} không hợp lệ!`;
        return false;
    }

    this.kiemTraDoDai = function (value, idError, name, minLength, maxLength) {
        if (value.length > maxLength || value.length < minLength) {
            getEle(idError).innerHTML = `${name} từ ${minLength} đến ${maxLength} kí tự !`;
            return false;
        }
        getEle(idError).innerHTML = '';
        return true;
    }

    this.kiemTraGiaTri = function (value, idError, name, minValue, maxValue) {
        var regexNumber = /^[0-9.]+$/;
        if (regexNumber.test(value)) {
            //Kiểm tra giá trị
            if (Number(value) < minValue || Number(value) > maxValue) {
                getEle(idError).innerHTML = `${name} giá trị từ ${minValue} đến ${maxValue} !`;
                return false;
            }
            getEle(idError).innerHTML = '';
            return true;
        }
        getEle(idError).innerHTML = `${name} giá trị không hợp lệ !`;
        return false;
    }
}