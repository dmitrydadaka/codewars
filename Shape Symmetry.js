let symmetricShape = (shape, [x0, y0]) =>
shape.concat(shape.map(([x1, y1]) => [2*x0-x1, 2*y0-y1]));