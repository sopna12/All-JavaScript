// Array
const student_name_array=['Anika', 'Ayesha', 'Monira', 'Jannat']
student_name_array.push('Kobita')
student_name_array.pop()
student_name_array.unshift('kobita')

// console.log(student_name_array);

// for of 

// for(const name of student_name_array){
//     console.log(name +' '+ 'Khan');
// }

const student = { name: 'Sopna', age: 21, class: 'Diploma'}
const namestore = student['name']
// console.log(namestore);
const agestore = student.age
// console.log(agestore);

student.roll = 464240
// console.log(student);




const Developer = { name: 'Ariyan', Designation: 'Developer', Salary: 40000}
const keysOrPropertyName = Object.keys(Developer)
console.log('Property Name =', keysOrPropertyName);
const keysOrPropertyValues = Object.values(Developer)

console.log('Property Value =', keysOrPropertyValues);