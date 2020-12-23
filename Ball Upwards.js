function maxBall(v0) {
    const vInMs = v0 / 3.6;
    const g = 9.81;
    const t = vInMs / g;
    const closestT = t.toFixed(1) * 10;
    
    return closestT;
  }