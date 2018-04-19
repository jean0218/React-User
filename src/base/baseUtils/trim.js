/**
 * Removal of space;
 * @param  {[string]}
 * @return {[string]}
 */
export default function trim(s) {
    if (s == undefined || s == "") {
        return "";
    } else {
        return s.replace(/(^\s*)|(\s*$)/g, "");
    }
}