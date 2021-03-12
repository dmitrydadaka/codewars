const printerError = s => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;
function printerError(s) {
    return (s.match(/[n-z]/g)||[]).length + "/" + s.length;
}
function printerError(s) {
    return `${s.length-[...s].filter(x=>x.match(/[a-m]/)).length}/${s.length}`
}