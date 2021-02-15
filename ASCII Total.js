function uniTotal(n)
{
return n.split('').map(t=>t.charCodeAt()).reduce((a,b)=>a+b,0)
}