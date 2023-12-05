export function getCurrentDate() {
    const currentDate = new Date();
    
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const month = monthsOfYear[currentDate.getMonth()];
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();
    
    const currentDateTimeString = `${dayOfWeek}, ${month} ${date}, ${year}`;
    
    return currentDateTimeString; 
  }
  
  // Call the function to display the current date, month, day, and year
  getCurrentDate();
  