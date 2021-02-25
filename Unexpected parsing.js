getStatus = function(isBusy) {
  
    var msg = (isBusy ? "busy" : "available");
    status = msg;
    return this;
  }