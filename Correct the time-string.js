function timeCorrect(t) {
    const date= new Date()
    if(t=='') return t
    if (!/^\d{2}\:\d{2}\:\d{2}/g.test(t)) return null
    date.setUTCHours(...t.split(':'))
    return date.toLocaleTimeString('en', {hour12:false})
  }