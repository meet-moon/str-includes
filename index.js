function str_includes(str, keyword) {
    if (typeof str == "string") {
        return str.includes(keyword)
    } else {
        throw "argument must be a string"
    }
}
module.exports = str_includes