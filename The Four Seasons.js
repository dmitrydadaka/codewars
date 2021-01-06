const fourSeasons = (d) => {
    let seasons = [
      new Season('Spring', 'March 21'),
      new Season('Summer', 'June 21'),
      new Season('Autumn', 'September 21'),
      new Season('Winter', 'December 21')
    ];
    if (d > 365) return 'The year flew by!';
    let date = new Date('January 1, 2017'), res = seasons[seasons.length-1].name;
    date.setDate(d);
    for (let season of seasons) {
      if (date >= season.date) res = season.name;
    }
    return `${res} Season`;
  }
  
  class Season {
    constructor(name, date) {
      this.name = name;
      this.date = new Date(`${date}, 2017`);
    }
  }