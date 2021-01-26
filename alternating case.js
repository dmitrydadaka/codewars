String.prototype.toAlternatingCase = function () {
  
    return [...this].map(v=>v==v.toUpperCase()?
                           v.toLowerCase():v.toUpperCase()).join``
   }