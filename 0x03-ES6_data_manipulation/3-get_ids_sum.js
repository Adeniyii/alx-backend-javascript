export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return [];
  }

  return students.reduce((acc, st) => acc + st.id, 0);
}
