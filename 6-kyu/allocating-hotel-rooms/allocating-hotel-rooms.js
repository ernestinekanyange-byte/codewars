function allocateRooms(customers) {
  let indexedCustomers = customers.map((c, idx) => [c[0], c[1], idx]);
  indexedCustomers.sort((a, b) => a[0] - b[0]);
​
  let result = new Array(customers.length).fill(0);
  let roomDepartures = []; 
  let k = 0;
​
  for (let currentIdx = 0; currentIdx < indexedCustomers.length; currentIdx++) {
    let item = indexedCustomers[currentIdx];
    let arrival = item[0];
    let departure = item[1];
    let originalIdx = item[2];
    let allocated = false;
​
    for (let i = 1; i <= k; i++) {
      if (roomDepartures[i] < arrival) {
        result[originalIdx] = i;
        roomDepartures[i] = departure;
        allocated = true;
        break;
      }
    }
​
    if (!allocated) {
      k++;
      result[originalIdx] = k;
      roomDepartures[k] = departure;
    }
  }
  
  return result;
}