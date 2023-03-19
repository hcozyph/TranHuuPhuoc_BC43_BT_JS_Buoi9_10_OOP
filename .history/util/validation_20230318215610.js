function Validation() {
    this.kiemTraRong = function (value, idError, name) {
        if (value.trim() === '') {
            document.getElementById(idError).innerHTML = `${name} không được bỏ trống !`;
            return false;
        }
        document.getElementById(idError).innerHTML = '';
        return true;
    };
    this.kiemTraKySo = function (value, idError, name, minLength, maxLength) {
        var regexNumber = /^[0-9]+$/;
        //Kiểm tra xem có đang hiển thị lỗi bỏ trống hay không
        if (document.getElementById(idError).innerHTML) {
            return;
        }
        if (regexNumber.test(value)) {
            if (value.length > maxLength || value.length < minLength) {
                document.getElementById(idError).innerHTML = `Độ dài ${name} từ ${minLength} đến ${maxLength}!`;
                return false;
            } else {
                document.getElementById(idError).innerHTML = ``
                return true;
            }
        } else {
            document.getElementById(idError).innerHTML = `${name} phải là ký số!`
        }
    };
}























