//console.log("application is running")
// Variable
const studentname = "Joy";
const studentage = 13;
const grade = "JSS";
const level = 3;
let info = ("My name is " + studentname + " i am " + studentage + ". I am a student of " + grade + level);
//console.log(info);
// Types of data 
// Data type - String , number, boolean, object, undefinded, array
let number = 10;
//let String = "This is a string";
let boolean1 = true;
let boolean2 = false;

   //console.log(`The amount of coffee at the store was ${number} which was confirmed to be ${boolean1}, ` );
   number  -= 5;
  // console.log (`But after the man came in side for two minutes the shop lost ${number} amouut of coffee .`);
   number -=3;
  // console.log(`Alas!, the cops came in and found out the issue was ${boolean2} cause the amount of coffee left is ${number}`);
   number -=2;
  // console.log(`Well the ${boolean1} later came out and the ${boolean2} became the news around the shop but ${number} coffee was missing.`);
let car = {
    name:"innosense",
    color:"green",
    model:"2019",
    price:"25,000,000,000",
    Speed:"2400mph"
}
let person ={
    name:"Adeshina",
    age:"15",
    nationality:"Nigeria",
    Networth:"trillions"
}
//console.log(car);
//console.log(person);

//console.log(`Mr ${person.name} is a ${person.nationality} it is said that he made his first ${person.Networth} at the age of ${person.age}, well with all been said he is the owner of ${car.name} ${car.model} which he bought for the price of ${car.price} the colour of the car is ${car.color} and it has a max speed of ${car.Speed}. i heard he transfered just 10 million to Mr David ` )
//console.log(`The above statement is somewhat ${boolean1} only if ${person.name} can confirm the whole story else we can all just asume it to be ${boolean2}.`)
let cvhubDepartment = [
    {
        webdevelopment:[
            {
                name:"farouq",
                gender:"Male",
                skills:[
                    "tailoring",
                    "graphics design",
                    "web development",
                    "video editing"
                ]
            },
            {
                name:"michael",
                gender:"Male",
                skills:[
                    "web development",
                    "student"
                ]
            },
            {
                name:"David",
                gender:"Male",
                skills:[
                    "web development",
                    "student",
                    "programming",
                    "database management"
                ]
            }
        ]
    },
    {
        cybersecurity:[
            {
                name:"Jamiu",
                gender:"Male",
                skills:[
                    "computer engineer",
                    "Network engineer and security",
                    "Hardware designer",
                    "Robotics and Automation",
                    "Cyber security analyst"
                ]
            },
            {
                name:"stanley",
                gender:"Male",
                skills:[
                    "jack of all trade"
                ]
            }

        ]
    },
    {
        mediatechnology:[
            {
                name:"farouq",
                gender:"Male",
                skills:[
                    "tailoring",
                    "graphics design",
                    "web development",
                    "video editing"
                ]
            },
        ]
    },
    {
        sales:[
           {
                name:"mali",
                gender:"Male",
                skills:[
                    "sales and accounting",
                ]
             },
            {
                name:"chioma",
                gender:"feMale",
                skills:[
                    "managerial"
                ]
            },
        ]
    }
]
//console.log(cvhubDepartment[3])
console.log(`My name is ${cvhubDepartment[1].cybersecurity[0].name} and i am skilled in ${cvhubDepartment[1].cybersecurity[0].skills[0]}`)

//this is the class for object array undefined but here is array of object classwork

let family = [
    {
        Fname:"Lucky",
        Sname:"Udonolu",
        sex:"Male",
        job:[
            "father",
            "programmer",
            "teacher"
        ]
        
       },
    {
        Fname:"Elizabeth",
        Sname:"Udonolu",
        sex:"Female",
        job:[
            "mother",
            "trader",
            "teacher",
            "tailor"
        ]
   
    },
    {
        Fname:"Lucky Jr",
        Sname:"Udonolu",
        sex:"Male",
        job:[
            "son",
            "pupil",
        ]
    }
]
let desc = `I am the head of the family and as a ${family[0].job[0]} i work two jobs (${family[0].job[1]} and ${family[0].job[2]}) well my name is ${family[0].Fname} ${family[0].Sname} obviously am a ${family[0].sex}. My wife's name is ${family[1].Fname} ${family[1].Sname} and she is the ${family[1].job[0]} of our child, well she is hardworking ${family[1].sex} whom work's as a ${family[1].job[1]}, ${family[1].job[2]} and as the family ${family[1].job[3]}, My only ${family[2].job[0]} name is ${family[2].Fname} ${family[2].Sname} and he is a ${family[2].job[1]} of our community primary school. He is the best outstanding ${family[2].sex} in the school which he started at a very young age.`
console.log(desc)

const students= [
    {
        name:"John",
        score: 90
    },
    {
        name:"Israel",
        score: 120  
    },
    {
        name:"Idera",
        score: 180
    },
    {
        name:"Patience",
        score: 40
    },
    {
        name:"Bob",
        score: 200
    },
    {
        name:"Muslim",
        score: 60
    }
]
const studentData = function(score, margin){
    const percentiScore = score/margin * 100;
    return (
        score=percentiScore
    )
}

studentData(students[0].score, 200);
console.log(studentData);

