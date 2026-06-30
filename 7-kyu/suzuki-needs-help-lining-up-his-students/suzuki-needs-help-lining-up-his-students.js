function lineupStudents(students) {
  let names = students.split(' ');
  
  names.sort((a, b) => {
​
    if (a.length !== b.length) {
      return b.length - a.length;
    }
  
    if (a < b) return 1;  
    if (a > b) return -1; 
    return 0;             
  })
  
  
  return names;
}