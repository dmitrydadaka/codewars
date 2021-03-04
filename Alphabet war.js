function alphabetWar(f)
{
  var l={
    w:4,p:3,b:2,s:1
  }
  var r={
    m:4,q:3,d:2,z:1
  }
  var f=f.split('')
var left=f.filter(x=>x.match(/[wpbs]/g)).map(x=>l[x]).reduce((a,b)=>a+b,0)
var right=f.filter(x=>x.match(/[mqdz]/g)).map(x=>r[x]).reduce((a,b)=>a+b,0)

return right>left?"Right side wins!":left>right?"Left side wins!":"Let's fight again!" 
}
