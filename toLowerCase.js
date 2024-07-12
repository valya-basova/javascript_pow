const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
const value = ( 5 < 7 ) ? "True" : "False" ;
const merge = (a, b) => [...a, ...b];