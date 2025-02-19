import { format, parse } from 'date-fns';
export const formatIndianNumber = (number) => {
    // round off the number to two decimal places
    number = Math.round((number + Number.EPSILON) * 100) / 100;
    // Convert the number to a string for easier manipulation
    const numStr = number.toString();
  
    // Split the number into integer and decimal parts
    const [integerPart, decimalPart] = numStr.split('.');
  
    // Regular expression for Indian numbering format
    const regex = /\B(?=(\d{2})+(?!\d))/g;
  
    // Format the first three digits separately
    const firstThree =
      integerPart.length > 3
        ? integerPart.substring(0, integerPart.length - 3).replace(regex, ',')
        : '';
  
    // Get the rest of the number
    const rest =
      integerPart.length > 3
        ? ',' + integerPart.substring(integerPart.length - 3)
        : integerPart;
  
    // Combine the parts
    const formattedInteger = firstThree + rest;
  
    // Combine the formatted integer and decimal parts
    const formattedNumber = decimalPart
      ? `${formattedInteger}.${decimalPart}`
      : formattedInteger;
  
    return '₹' + formattedNumber;
  };
  
  export const generateYears = () => {
    const currentYear = new Date(2023, 1, 1).getFullYear();
    const years = [];
  
    for (let i = 0; i < 10; i++) {
      years.push({
        key: i.toString(),
        value: (currentYear + i).toString(),
        label: (currentYear + i).toString(),
      });
    }
  
    return years;
  };
  
  export const getMonthName = (month) => {
    const date = new Date(2000, month - 1, 1); // Adjust year as needed
    return format(date, 'MMMM');
  };
  
  export const getMonthNumber = (monthName) => {
    if (!monthName) {
      return -1;
    }
    const parsedDate = parse(monthName, 'MMMM', new Date());
    return parseInt(format(parsedDate, 'M'), 10);
  };