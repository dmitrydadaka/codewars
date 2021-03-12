function expressionOut(expr) {
    const k= ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];
    expr=expr.split(' ')
    return OPERATORS[expr[1]]==undefined?"That's not an operator!":k[expr[0]]+' '+OPERATORS[expr[1]]+k[expr[2]]
  
  }
  function expressionOut(expr) {
    var k={'1':'One','2':'Two','3':"Three",'4':'Four', '5':'Five',
           '6':'Six','7':'Seven', '8':'Eight','9':'Nine','10':'Ten'}
    expr=expr.split(' ')
    return OPERATORS[expr[1]]==undefined?"That's not an operator!":k[expr[0]]+' '+OPERATORS[expr[1]]+k[expr[2]]
  
  }
  function expressionOut(expr) {
    var j={ '+':   'Plus ',
    '-':   'Minus ',
    '*':   'Times ',
    '/':   'Divided By ',  
    '**':  'To The Power Of ',
    '=':   'Equals ',
    '!=':  'Does Not Equal ' }
    var k={'1':'one','2':'two','3':"three",'4':'four', '5':'five',
           '6':'six','7':'seven', '8':'eight','9':'nine','10':'ten'}
    expr=expr.split(' ')
    return j[expr[1]]==undefined?"That's not an operator!":k[expr[0]][0].toUpperCase()+k[expr[0]].slice(1)+' '+j[expr[1]]+k[expr[2]][0].toUpperCase()+k[expr[2]].slice(1)
  
  }