function Employee(empId,fullName,department,level,imgUrl){
    this.employeeId = empId;
    this.employeeFullName = fullName;
    this.employeeDepartment = department;
    this.employeelevel = level;
    this.employeeImg = imgUrl
    

// Math.floor(Math.random() * (max - min + 1) + min) to create a random number bewteen two numbers range
    this.salary =  () =>
    {
        switch (this.employeelevel) {
            case "Junior":
                return  parseFloat(Math.random() * (1000 - 500 + 1) + 500).toFixed(2)

            case "Mid-Senior":
                return parseFloat(Math.random() * (1500 - 1000 + 1) + 1000).toFixed(2)
            case "Senior":
                return parseFloat(Math.random() * (2000 - 1500 + 1) + 1500).toFixed(2)
        }
    }
}





// Accessing on main tag
const main = document.getElementById("main")

// Creating table tag
const table = document.createElement("table")
table.setAttribute("border",1 + "px")

// Prepending table inside the main tag 
main.append(table)

// Creting a thead tag
const thead = document.createElement("thead")




const th1 = document.createElement("th")
th1.textContent = "Employee Id"
thead.append(th1)

const th2 = document.createElement("th")
th2.textContent = "Full Name"
thead.append(th2)

const th3 = document.createElement("th")
th3.textContent = "Department"
thead.append(th3)

const th4 = document.createElement("th")
th4.textContent = "Level"
thead.append(th4)

const th5 = document.createElement("th")
th5.textContent = "Salary"
thead.append(th5)

table.prepend(thead)



// let emp1 = new Employee(1000,"Ghazi smarra","Administration","Senior","https://picsum.photos/200/300")
// render(emp1.employeeId,emp1.employeeFullName,emp1.employeeDepartment,emp1.employeelevel, emp1.salary())
// let emp2 = new Employee(1001,"Lana Ali","Finance","Senior","https://picsum.photos/200")
// render(emp2.employeeId,emp2.employeeFullName,emp2.employeeDepartment,emp2.employeelevel, emp2.salary())
// let emp3 = new Employee(1002,"Tmara Ayoub","Marketing","Senior","https://picsum.photos/id/237/200/300")
// render(emp3.employeeId,emp3.employeeFullName,emp3.employeeDepartment,emp3.employeelevel, emp3.salary())
// let emp4 = new Employee(1003,"Safi Walid","Administration","Mid-Senior","https://picsum.photos/seed/picsum/200/300")
// render(emp4.employeeId,emp4.employeeFullName,emp4.employeeDepartment,emp4.employeelevel, emp4.salary())
// let emp5 = new Employee(1004,"Omar Zaid","Development","Senior","https://picsum.photos/200/300?grayscale")
// render(emp5.employeeId,emp5.employeeFullName,emp5.employeeDepartment,emp5.employeelevel, emp5.salary())
// let emp6 = new Employee(1005,"Rana Saleh","Development","Junior","https://picsum.photos/200/300/?blur")
// render(emp6.employeeId,emp6.employeeFullName,emp6.employeeDepartment,emp6.employeelevel, emp6.salary())
// let emp7 = new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior","https://picsum.photos/200/300/?blur=2")
// render(emp7.employeeId,emp7.employeeFullName,emp7.employeeDepartment,emp7.employeelevel, emp7.salary())

// consoled results
// console.log(emp1);
// console.log(emp2);
// console.log(emp3);
// console.log(emp4);
// console.log(emp5);
// console.log(emp6);
// console.log(emp7);
// console.log(emp1.salary());
// console.log(emp2.salary());
// console.log(emp3.salary());
// console.log(emp4.salary());
// console.log(emp5.salary());
// console.log(emp6.salary());
// console.log(emp7.salary());




// Event code

// Submited button
const submit = document.getElementById("submit")

// accessing on inputs
const id = document.getElementById("emp_id")
const full_name = document.getElementById("full_name")
const imgUrl = document.getElementById("img_url")

// accessing on selects
const department = document.getElementById("departments")
const level = document.getElementById("levels")


submit.addEventListener("click", (e) => {
e.preventDefault()

const emp = new Employee(id.value,full_name.value,department.value,level.value,imgUrl.value)
render(id.value,full_name.value,department.value,level.value,emp.salary())
id.value = ""
full_name.value = ""
department.value = department[0].value
level.value = level[0].value
imgUrl.value = ""
})





function render(...rows)
{
const tr = document.createElement("tr")
const persons = []
for (const row of rows) {
const td = document.createElement("td")
td.textContent = row
tr.append(td)
persons.push(row)
}
table.append(tr)

setLocalStorage(persons)
}

var count = 0;
function setLocalStorage (...persons){
    for (let i = 0; i < persons.length; i++) {
        localStorage.setItem(`persons ${count}`,JSON.stringify(persons))
        count ++;
    }
}
