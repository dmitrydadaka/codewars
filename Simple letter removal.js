function solve(s, k, ch = 'a') {
    if (!k || !s) return s
    if (!s.includes(ch)) return solve(s, k, String.fromCharCode(ch.charCodeAt`` + 1))
    s = s.replace(ch, '')
    return solve(s, k-1, ch)
  }