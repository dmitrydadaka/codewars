const divCon = x => x.reduce((s, v) => s + (v === +v ? v : -v), 0);
