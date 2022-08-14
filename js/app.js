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
                return (Math.random() * (1000 - 500 + 1) + 500)

            case "Mid-Senior":
                return (Math.random() * (1500 - 1000 + 1) + 1000)
            case "Senior":
                return (Math.random() * (2000 - 1500 + 1) + 1500)
        }
    }
}


let emp1 = new Employee(1000,"Ghazi smarra","Administration","Senior","https://picsum.photos/200/300")
let emp2 = new Employee(1001,"Lana Ali","Finance","Senior","https://picsum.photos/200")
let emp3 = new Employee(1002,"Tmara Ayoub","Marketing","Senior","https://picsum.photos/id/237/200/300")
let emp4 = new Employee(1003,"Safi Walid","Administration","Mid-Senior","https://picsum.photos/seed/picsum/200/300")
let emp5 = new Employee(1004,"Omar Zaid","Development","Senior","https://picsum.photos/200/300?grayscale")
let emp6 = new Employee(1005,"Rana Saleh","Development","Junior","https://picsum.photos/200/300/?blur")
let emp7 = new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior","https://picsum.photos/200/300/?blur=2")

// consoled results
console.log(emp1);
console.log(emp2);
console.log(emp3);
console.log(emp4);
console.log(emp5);
console.log(emp6);
console.log(emp7);
console.log(emp1.salary());
console.log(emp2.salary());
console.log(emp3.salary());
console.log(emp4.salary());
console.log(emp5.salary());
console.log(emp6.salary());
console.log(emp7.salary());
