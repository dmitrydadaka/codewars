function pipeFix(numbers) {
    const end=Math.max(...numbers)
    const start=Math.min(...numbers)
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }