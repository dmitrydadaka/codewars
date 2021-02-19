function buildString(){
    var args = Array.prototype.slice.call(arguments);
    return 'I like '+ args.join(', ') + '!';
  }