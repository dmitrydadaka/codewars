let price = (p,s,y)=>!Number.isNaN(p+y)&&Object.keys($).includes(s)
?'$'+(p*$[s]**y).toFixed(2):'Chuck is bottomless!',
$={'Barely used':1.1,'Seen a few high kicks':1.25,'Blood stained':1.3,
   'Heavily soiled':1.5};