const calculator = (a,b,sign) => !isNaN(a)&&!isNaN(b)&&['+','-','*','/','%'].includes(sign) ? eval(a+sign+b) : "unknown value"
