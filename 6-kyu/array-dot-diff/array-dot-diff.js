function arrayDiff(a, b) {
   return a.filter((items)=>!b.includes(items))
}