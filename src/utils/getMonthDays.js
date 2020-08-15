const findDayOfTheWeek = (dayInt) => {
    switch(dayInt) {
      case 0:
        return 'Dom'
      case 1:
        return 'Lun'
      case 2:
        return 'Mar'
      case 3:
        return 'Mer'   
      case 4:
        return 'Gio'
      case 5:
        return 'Ven'
      case 6:
        return 'Sab'
      default:
        throw new Error()
    }
}

const getFullWeekDay = (year, month, day) => {
    let dayInWeek = new Date(year, month, day).getDay();
    let fullWeekDay = findDayOfTheWeek(dayInWeek) + ' ' + (day);
    return fullWeekDay;
}

const getAllDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

const generateDays = (year, month) => {
    let maxMonthDays = getAllDaysInMonth(year, month);
    let allMonthDays = [];
  
    for (let day=1; day <= maxMonthDays; day++) {
      let weekDay = getFullWeekDay(year, month, day);
      allMonthDays.push(weekDay);
    }
    
    return allMonthDays
}

export default generateDays;