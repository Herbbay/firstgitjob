const student = [
    {
        id:1,
        name:"john",
        scores : {
            maths:80,
            english:80,
            biology:90
        },
        class: 1
    },
    {
        id:2,
        name:"stanley",
        scores : {
            maths:60,
            english:70,
            biology:50
        },
        class: 1
    },
    {
        id:3,
        name:"bankole",
        scores : {
            maths:40,
            english:70,
            biology:30
        },
        class: 1
    },
    {
        id:4,
        name:"Gideon",
        scores : {
            maths:30,
            english:40,
            biology:25
        },
        class: 1
    },
    {
        id:5,
        name:"venessa",
        scores : {
            maths:40,
            english:80,
            biology:50
        },
        class: 1
    },
    {
        id:6,
        name:"bamidele",
        scores : {
            maths:80,
            english:70,
            biology:90
        },
        class: 2
    },
    {
        id:7,
        name:"beatrice",
        scores : {
            maths:60,
            english:40,
            biology:50
        },
        class: 2
    },
    {
        id:8,
        name:"bidemi",
        scores : {
            maths:80,
            english:40,
            biology:50
        },
        class: 2
    },
    {
        id:9,
        name:"fashola",
        scores : {
            maths:60,
            english:40,
            biology:50
        },
        class: 2
    },
    {
        id:10,
        name:"benedict",
        scores : {
            maths:60,
            english:70,
            biology:80
        },
        class: 2
    },
    {
        id:11,
        name:"bitrus",
        scores : {
            maths:60,
            english:70,
            biology:50
        },
        class: 3
    }
];
function push(a) {
    student.push(a)
}
function pop() {
    student.pop()
}
function shift() {
    student.shift()
}
function unshift(b) {
    student.unshift(b)
}
function slice() {
    copy = student.slice(1,5)
    return copy
}
function splice() {
    student.splice(2,5)
}
let a = {
    id:10,
        name:"benedict",
        scores : {
            maths:60,
            english:70,
            biology:80
        },
        class: 2
}

let  b = {
    id:10,
        name:"benedict",
        scores : {
            maths:60,
            english:70,
            biology:80
        },
        class: 2
}
//push(a)
//pop()
//shift()
//unshift(b)
//splice()
//slice()
//let make = slice()
//console.log(student)
//console.log("\n")
//console.log(make)
const result = student.map((names) => names.name)
//console.log(result.sort());
//console.log(result.toString());
const res =  student.find((e) => e.scores.maths > 50)
//console.log(res)
const first = student.findIndex((e) => e.scores.maths < 35)
//console.log(first)
first >=0 ? console.log(student[first]) : console.log("this is wrong")
//const fro = student.forEach((y) => y.name)
//console.log(fro);
const ibrahim = [...student]
ibrahim[0]="ibrahim"
console.log(ibrahim)
