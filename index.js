function str_includes(str) {
    return str.includes("Hello world")
}
module.exports = str_includes

function LargeComponent() {
    return <div>This is a large component</div>
}
function SmallComponent() {
    return <div>This is a small component</div>
}
module.exports = LargeComponent

module.exports = SmallComponent
