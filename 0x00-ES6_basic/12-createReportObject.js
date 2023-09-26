export default function createReportObject(employeesList) {
  const count = employeesList.length;
  const getNumberOfDepartments = () => count;
  const keys = Object.keys(employeesList);
  const record = {};

  for (const dept in keys) {
    if (dept in record) {
      record.dept.push(...employeesList[dept]);
    } else {
      record.dept = [...employeesList[dept]];
    }
  }

  const out = {
    getNumberOfDepartments,
    allEmployees: record,
  };

  return out;
}
