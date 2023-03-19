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


    this.kiemTraTonTai = function (value, arr, tagName, idError, name) {
        var output = true;
        if (document.getElementById(idError).innerHTML) {
            return;
        }
        for (var index = 0; index < arr.length; index++) {
            if (value === arr[index][tagName]) {
                output = false;
                document.getElementById(idError).innerHTML = `${name} đã tồn tại!`;
                break;
            } else {
                document.getElementById(idError).innerHTML = '';
            }
        }
        return output;
    }


    this.kiemTraKyTu = function (value, idError, name) {
        var regexLetter = /^[A-Z a-z àáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹýÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ]+$/;

        //Kiểm tra xem có đang hiển thị lỗi bỏ trống hay không
        if (document.getElementById(idError).innerHTML) {
            return;
        }
        if (regexLetter.test(value)) {
            document.getElementById(idError).innerHTML = '';
            return true;
        }
        document.getElementById(idError).innerHTML = `${name} tất cả phải là ký tự!`;
        return false;
    };
}























