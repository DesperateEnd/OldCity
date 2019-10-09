'use strict';
const crypto = require('crypto');

module.exports = len => {
        // isFinite 判断是否为有限数值
    if (!Number.isFinite(len)) {
        throw new TypeError('Expected a finite number');
    }

    return crypto.randomBytes(Math.ceil(len / 2)).toString('hex').slice(0, len);
};