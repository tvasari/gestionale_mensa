class Calendar {

  static monthStringToNumber = (monthString: string) => {
    const months = [
      "Gennaio", "Febbraio", "Marzo", "Aprile", 
      "Maggio", "Giugno", "Luglio", "Agosto", 
      "Settembre", "Ottobre", "Novembre", "Dicembre"
    ]
    return months.indexOf(monthString);
  }

  static weekDayNumberToString = (dayInt: number) => {
    const shortWeekDaysNames = [
      "Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"
    ]
    return shortWeekDaysNames.find((day, i) => {
      return dayInt === i && day;
    })
  }

  static generateFullWeekDayName = (year: any, month: any, monthDay: any) => {
    let weekDayNumber = new Date(year, month, monthDay).getDay();
    let fullWeekDayName = Calendar.weekDayNumberToString(weekDayNumber) + ' ' + (monthDay);
    return fullWeekDayName;
  }

  static calculateTotalMonthDays = (year: any, month: any) => new Date(year, month + 1, 0).getDate();

  static getAllMonthDays = (year: any, month: any) => {
    let totalMonthDays = Calendar.calculateTotalMonthDays(year, month);
    let allMonthDays = [];
  
    for (let monthDay=1; monthDay <= totalMonthDays; monthDay++) {
      let weekDay = Calendar.generateFullWeekDayName(year, month, monthDay);
      allMonthDays.push(weekDay);
    }
    
    return allMonthDays
  }

}


export default Calendar;