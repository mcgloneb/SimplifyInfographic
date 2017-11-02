// get screen dimensions
exports.viewportHeight = () => window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
exports.viewportWidth = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

// get element height
exports.getElementHeight = (el) => document.getElementById(el).clientHeight;
// get element width
exports.getElementWidth= (el) => document.getElementById(el).getBoundingClientRect().width;
