function autoDot(input) {
    var value = input.value,
        value = value.split('.').join('');

    if (value.length > 3) {
        value = value.substring(0, value.length - 3) + '.' + value.substring(value.length - 3, value.length);
    }

    input.value = value;
}

autoDot(querySelector('#luongCB'));