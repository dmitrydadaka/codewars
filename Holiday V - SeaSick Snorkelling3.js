function seaSick(s) {
    return s.split("").filter((e, i) => (e === "~" && s[i + 1] === "_") || (e === "_" && s[i + 1] === "~")).length > 0.2 * s.length ? "Throw Up" : "No Problem";
  }