function wallpaper(l, w, h) {
    var numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve","thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]
   
       return l*w*h!=0?numbers[Math.ceil((l*h*2+h*w*2)/5.2*1.15)]:numbers[0]
   }