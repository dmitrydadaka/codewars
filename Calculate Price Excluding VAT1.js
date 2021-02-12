function excludingVatPrice(price){
    if(price==null)return -1
    return price/115*100%1==0?price/115*100:+(price/115*100).toFixed(2)
  }