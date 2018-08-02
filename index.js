class Company {
  constructor({ waterbill = 50, electrecityBill = 200, netbill = 200, employees, projectsPrices }) {
    this.waterbill = waterbill;
    this.netbill = netbill;
    this.electrecityBill = electrecityBill;
    this.employees = employees;
    this.projectsPrices = projectsPrices;

    this.salaries = [];
    this.benifitsyearly = 0;
  }

  getTotalValue(value) {
    const totalValue = value.reduce((total, value) => total + value);
    return totalValue
  }

  updateSalaries(newSalary) {
    this.salaries = [...this.salaries, newSalary]
    return this.salaries;
  }

  // كل المرتبات خلال السنه
  calcSalariesYearly() {
    const { getTotalValue, employees, projectsPrices } = this;
    employees.map(emp => {
      const { counter, type, basicSalary } = emp;
      const salary = basicSalary * counter * 12;
      if (type === 'developer') this.updateSalaries(salary)
      if (type === 'officeBoy') this.updateSalaries(salary)
      if (emp.hasOwnProperty('ratio')) {
        const totalprojectsPrices = getTotalValue(projectsPrices)
        const ratioSalray = (totalprojectsPrices * (emp.ratio && emp.ratio)) / 100;
        this.updateSalaries((salary + ratioSalray));
      }
    })
    return this;
  }

  // كل المنصرف خلال السنه
  outlayYearly() {
    const { salaries, waterbill, electrecityBill, netbill, getTotalValue } = this;
    const totalSalaries = getTotalValue(salaries);
    const outlayYearly = (waterbill + electrecityBill + netbill) * 12 + totalSalaries;
    return outlayYearly;
  }

  // كل الفايده بعد خصم كل المنصرف من مجموع كل البروجكتات

  getBenifitsYearly() {
    const { projectsPrices, getTotalValue } = this;
    const outlaysYearly = this.calcSalariesYearly().outlayYearly();
    const totalProjectsPrices = getTotalValue(projectsPrices);
    this.benifitsyearly = totalProjectsPrices - outlaysYearly;
    return this.benifitsyearly;
  }

}

module.exports = Company;