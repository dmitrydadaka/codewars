const spoonerize = words => words.replace(/\b(\w)(.*)\b(\w)/g, '$3$2$1');
