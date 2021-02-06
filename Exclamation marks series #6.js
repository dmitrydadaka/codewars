
function remove(s, n) {
    return s.replace(/!/g, c => n-- > 0 ? "" : c)
  }