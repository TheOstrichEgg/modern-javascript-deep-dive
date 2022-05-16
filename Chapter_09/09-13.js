function isFalsy(v) {
    return !v;
}

function isTruthy(v) {
    return !!v;
}

isFalsy(false);
isFalsy(undefined);
isFalsy(null);
isFalsy(0);
isFalsy(NaN);
isFalsy('');

isTruthy(true);
isTruthy('0');
isTruthy({});
isTruthy([]);
