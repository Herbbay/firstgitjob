const school = [
    ss1={
        science:[
            {
                name:"Adeshina Jamiu",
                score:{
                    maths:95,
                    english:80,
                    economics:90,
                    yoruba:70
                }
            },
            {
                name:"Apakanaja Stanley",
                score:{
                    maths:85,
                    english:80,
                    economics:70,
                    yoruba:70
                }
            },
            {
                name:"Ojuwku Micheal",
                score:{
                    maths:55,
                    english:60,
                    economics:50,
                    yoruba:70
                }
            }
        ],
       art:[
        {
            name:"Adeshina Damilare",
            score:{
                maths:95,
                english:80,
                economics:90,
                yoruba:70
            }
        },
        {
            name:"Apakanaja Godwin",
            score:{
                maths:85,
                english:80,
                economics:70,
                yoruba:70
            }
        },
        {
            name:"Ojuwku Mikey",
            score:{
                maths:55,
                english:60,
                economics:50,
                yoruba:70
            }
        }
       ]
    },
    ss2={
        science:[
            {
                name:"Babalola Jamiu",
                score:{
                    maths:65,
                    english:80,
                    economics:100,
                    yoruba:70
                }
            },
            {
                name:"Apakanaja mohamed",
                score:{
                    maths:85,
                    english:50,
                    economics:40,
                    yoruba:70
                }
            },
            {
                name:"Ojuwku Gift",
                score:{
                    maths:55,
                    english:60,
                    economics:50,
                    yoruba:70
                }
            }
        ],
       art:[
        {
            name:"Adebiyi Damilare",
            score:{
                maths:95,
                english:80,
                economics:90,
                yoruba:70
            }
        },
        {
            name:"Akpan Godwin",
            score:{
                maths:85,
                english:80,
                economics:70,
                yoruba:70
            }
        },
        {
            name:"Abubakar Mikey",
            score:{
                maths:55,
                english:60,
                economics:50,
                yoruba:70
            }
        }
       ]
    },
    ss3={
        science:[
            {
                name:"Adeshina Jamiu",
                score:{
                    maths:95,
                    english:30,
                    economics:90,
                    yoruba:70
                }
            },
            {
                name:"Apakanaja tanley",
                score:{
                    maths:85,
                    english:60,
                    economics:70,
                    yoruba:70
                }
            },
            {
                name:"Ojuwku Micheale",
                score:{
                    maths:75,
                    english:60,
                    economics:30,
                    yoruba:70
                }
            }
        ],
       art:[
        {
            name:"Adeshina Ademilade",
            score:{
                maths:100,
                english:80,
                economics:90,
                yoruba:70
            }
        },
        {
            name:"Apakanaja Godwin",
            score:{
                maths:45,
                english:80,
                economics:30,
                yoruba:70
            }
        },
        {
            name:"Ojuwku Mikey",
            score:{
                maths:75,
                english:60,
                economics:80,
                yoruba:70
            }
        }
       ]
    }

]

function average(a,b,c,d){
    e= (a+b+c+d) / 4
    return d
}
let stud_name, stud_score;
let l = (school.length);
for(j=0; j<=2; j++){
    for(i=0; i<l; i++){
        console.log(school[i].science[j].name)
        console.log(school[i].science[j].score)
    }
}
//do{
console.log(stud_name) 

//}while(1)

result=average(school[1].art[2].score.maths,school[1].art[2].score.english,school[1].art[2].score.economics,school[1].art[2].score.yoruba)
var Grade
var say
if (result >= 75) {
     Grade = "A"
     say = "Passed Brilliantly"
}
else if(result >=60){ 
     Grade = "B"
     say = "Passed"
}
else if(result >=50){
     Grade = "C"
     say = "Fairly Passed"
}
else if(result >=40){
     Grade = "D"
     say = "Passed on trial"
}
else if (result >= 30){
     Grade = "E"
     say = "Passed on trial"
}
else{
     Grade = "F"
     say = "Failed"
}
console.log(`${school[1].art[2].name} \b your final Grade is ${Grade} and you have ${say}`)
//console.log(school[1].art[2].score.maths)
//console.log(result)