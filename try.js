const Company = require('./index')


const employees = [
  {
    type: 'officeBoy',
    basicSalary: 2000,
    counter: 1,
  },
  {
    type: 'developer',
    basicSalary: 17800,
    counter: 3,
  },
  {
    type: 'marketingWorkers',
    basicSalary: 2000,
    ratio: 3,
    counter: 2,
  }
];

// 36 بروجكت علي 3 في الشهر
// الاسعار تبدا من 25 => 35
const projectsPrices = [
  25000,
  26000,
  26000,
  27000,
  28000,
  29000,
  30000,
  31000,
  32000,
  33000,
  34000,
  35000,
  25000,
  26000,
  27000,
  28000,
  29000,
  30000,
  31000,
  32000,
  33000,
  34000,
  35000,
  25000,
  26000,
  27000,
  28000,
  29000,
  30000,
  31000,
  32000,
  33000,
  34000,
  35000,
  35000,
  35000,
]

const myCompany = new Company({ employees, projectsPrices }).getBenifitsYearly();

console.log('benifits will be => ' + myCompany)