import React from 'react'

    export default function anonymous(params
/**/) {
var evalColor = function () {
    if (typeof params.color === 'function') {
        return params.color;
    } else {
        return function () {
            return params.color;
        };
    }
}();
var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1536 128q0 261-106.5 461.5t-266.5 306.5q160 106 266.5 306.5t106.5 461.5h96q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1472q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h96q0-261 106.5-461.5t266.5-306.5q-160-106-266.5-306.5t-106.5-461.5h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h1472q14 0 23 9t9 23v64q0 14-9 23t-23 9h-96zm-534 708q77-29 149-92.5t129.5-152.5 92.5-210 35-253h-1024q0 132 35 253t92.5 210 129.5 152.5 149 92.5q19 7 30.5 23.5t11.5 36.5-11.5 36.5-30.5 23.5q-77 29-149 92.5t-129.5 152.5-92.5 210-35 253h1024q0-132-35-253t-92.5-210-129.5-152.5-149-92.5q-19-7-30.5-23.5t-11.5-36.5 11.5-36.5 30.5-23.5z' }));;
}