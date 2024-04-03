// Code your solution here

function findMatching(drivers, string) {
  return drivers.filter(drivers => drivers.toLowerCase().includes(string.toLowerCase()))
}
function fuzzyMatch(drivers, string) {
  return drivers.filter(drivers => drivers.toLowerCase().startsWith(string.toLowerCase()))
}
function matchName(drivers,string){
    const result = drivers.filter(word => word.name === string)
    return result
  }
