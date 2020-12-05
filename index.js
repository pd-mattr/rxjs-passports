var rx = require('rxjs');
var ops = require('rxjs/operators');

/* data arrives as an array of passport data from the input file.  Each slot
   in the array is one string of passport data relating to one person.  The fields
   in this input data might be separated by newlines or spaces
*/
exports.part1 = function(data){
  return rx.from(data).pipe(
    ops.filter(r => r != ""),
    ops.map(r => {
      obj = {}
      r.replace(/\n/g, ' ').split(' ').forEach(str => {
        var parts = str.split(":");
        obj[parts[0]] = parts[1];
      });
      return obj;
    }),
    ops.filter(o => o.byr && o.iyr && o.eyr && o.hgt && o.hcl && o.ecl && o.pid),
    ops.count()
  );
}

/* data arrives as an array of passport data from the input file.  Each slot
   in the array is one string of passport data relating to one person.  The fields
   in this input data might be separated by newlines or spaces
*/
exports.part2 = function(data){
  return rx.from(data).pipe(
    ops.filter(r => r != ""),
    ops.map(r => {
      obj = {}
      r.replace(/\n/g, ' ').split(' ').forEach(str => {
        var parts = str.split(":");
        obj[parts[0]] = parts[1];
      });
      return obj;
    }),
    ops.filter(o => o.byr && o.iyr && o.eyr && o.hgt && o.hcl && o.ecl && o.pid),
    ops.filter(o => {
      byr = parseInt(o.byr);
      return (byr && byr >=1920 && byr <=2002)
    }),
    ops.filter(o => {
      iyr = parseInt(o.iyr);
      return (iyr && iyr >=2010 && iyr <=2020)
    }),
    ops.filter(o => {
      eyr = parseInt(o.eyr);
      return (eyr && eyr >=2020 && eyr <=2030)
    }),
    ops.filter(o => {
      val = parseInt(o.hgt.substring(0, o.hgt.length-2));
      unit = o.hgt.substring(o.hgt.length-2, o.hgt.length);
      if(unit == "cm"){
        return val >=150 && val <=193;
      }else if (unit == "in"){
        return val >=59 && val <=76;
      }else {
        return false;
      }
    }),
    ops.filter(o => o.hcl.match(/^\#[0123456789abcdef]{6}$/)),
    ops.filter(o => (o.ecl == "amb" || o.ecl == "blu" || o.ecl == "brn" || o.ecl == "gry" || o.ecl == "grn" || o.ecl == "hzl" || o.ecl == "oth")),
    ops.filter(o => o.pid.match(/^[0123456789]{9}$/)),
    ops.count()
  );
}