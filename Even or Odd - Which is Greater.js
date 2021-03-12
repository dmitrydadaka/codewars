const evenOrOdd=s=>(x=eval(s.replace(/./g,x=>(+x%2?"+":"-")+x)))<0?'Even is greater than Odd':x>0?'Odd is greater than Even':'Even and Odd are the same'
function evenOrOdd(s) {
return [...s].reduce((a,b)=>a+(+b%2==0?+b:0),0)>[...s].reduce((a,b)=>a+(+b%2!=0?+b:0),0)?
'Even is greater than Odd':[...s].reduce((a,b)=>a+(+b%2==0?+b:0),0)<[...s].reduce((a,b)=>a+(+b%2!=0?+b:0),0)?
'Odd is greater than Even':'Even and Odd are the same'
}