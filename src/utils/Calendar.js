class Calendar {

  constructor() {
  }

  static monthStringToNumber = (monthString) => {
    const months = [
      "Gennaio", "Febbraio", "Marzo", "Aprile", 
      "Maggio", "Giugno", "Luglio", "Agosto", 
      "Settembre", "Ottobre", "Novembre", "Dicembre"
    ]
    return months.indexOf(monthString);
  }

  static weekDayNumberToString = (dayInt) => {
    const shortWeekDaysNames = [
      "Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"
    ]
    return shortWeekDaysNames.find((day, i) => {
      return dayInt === i && day;
    })
  }

  static generateFullWeekDayName = (year, month, monthDay) => {
    let weekDayNumber = new Date(year, month, monthDay).getDay();
    let fullWeekDayName = this.weekDayNumberToString(weekDayNumber) + ' ' + (monthDay);
    return fullWeekDayName;
  }

  static calculateTotalMonthDays = (year, month) => new Date(year, month + 1, 0).getDate();

  static getAllMonthDays = (year, month) => {
    let totalMonthDays = this.calculateTotalMonthDays(year, month);
    let allMonthDays = [];
  
    for (let monthDay=1; monthDay <= totalMonthDays; monthDay++) {
      let weekDay = this.generateFullWeekDayName(year, month, monthDay);
      allMonthDays.push(weekDay);
    }
    
    return allMonthDays
  }

}


export default Calendar;