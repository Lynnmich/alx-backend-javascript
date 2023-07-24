export default function iterateThroughObject(reportWithIterator) {
  let employeeNames = '';
  for (const employee of reportWithIterator) {
    employeeNames += employee + ' | ';
  }

  // Remove the last '|' separator and trim any extra whitespace
  return employeeNames.slice(0, -3).trim();
}
