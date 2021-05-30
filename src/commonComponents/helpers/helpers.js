/**
 * Removes domain name from the url
 * @param {string} value - url
 */
export const uo = ( url ) => {

    if(typeof(url)==='undefined') return '';
    return url.replace(/^.*\/\/[^\/]+/, '');
};

/**
 * Sanitize html attribute value
 * @param {string} value - for field
 */
export const sanitizeAttr = ( value ) => {

    if(typeof(value)==='undefined') return '';

    value = value.replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");

    return value;
};

/**
 * HEX to rgb color convertion
 * @param {string} value - for field
 * @param {string} alpha - transparency level
 */

export const hexToRGB = (hex, alpha) => {

    if(typeof(hex)==='undefined') return '';

    let r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}