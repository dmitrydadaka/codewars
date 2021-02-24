function toFreud(string) {
    var k=string.split(' ').length
    return k>1?Array(k).fill('sex').join(' '):''
    }