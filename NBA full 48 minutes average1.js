function pointsPer48(ppg, mpg) {
    const b = (ppg/mpg*48).toFixed(1)
    return Number(b) || 0
    }