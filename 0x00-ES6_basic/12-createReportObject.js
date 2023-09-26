export default function createReportObject(employeesList) {
  const allEmployees = {};

  for (const dept of Object.keys(employeesList)) {
    allEmployees[dept] = [...employeesList[dept]];
  }

  const out = {
    allEmployees,
    getNumberOfDepartments() { return Object.keys(this.allEmployees).length; },
  };

  return out;
}
