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

]
function result(m,e,b,ss) {
    if (m >= 75) {
        console.log("Your Maths Grade is A")
    }else if (m >= 65) {
        console.log("Your Maths Grade is B")
    }else if (m >= 55) {
        console.log("Your Maths Grade is C")
    }else if (m >= 45) {
        console.log("Your Maths Grade is D")
    }else if (m >= 35) {
        console.log("Your Maths Grade is E")
    }else{
      console.log("Your Maths Grade is F");  
    }

    if (e >= 75) {
        console.log("Your English Grade is A")
    }else if (e >= 65) {
        console.log("Your English Grade is B")
    }else if (e >= 55) {
        console.log("Your English Grade is C")
    }else if (e >= 45) {
        console.log("Your English Grade is D")
    }else if (e >= 35) {
        console.log("Your English Grade is E")
    }else{
      console.log("Your English Grade is F");  
    }

    if (b >= 75) {
        console.log("Your Biology Grade is A")
    }else if (b >= 65) {
        console.log("Your Biology Grade is B")
    }else if (b >= 55) {
        console.log("Your Biology Grade is C")
    }else if (b >= 45) {
        console.log("Your Biology Grade is D")
    }else if (b >= 35) {
        console.log("Your Biology Grade is E")
    }else{
      console.log("Your Biology Grade is F");  
    }

    if(((m + e + b) / 3 > 55) && (m && e >= 65)){
        ss++;
        if (ss > 3){
            console.log("Congratulations! you are now a graduate");
        }else{console.log(`congratulations! you have promoted to class ${ss}`);}
    }else if ((m + e + b) / 3 < 35){
        console.log("Your result is the worst the school have processed so far!");
    }
    else{
        console.log("you Have a Good result try better next time");
    }
}

function grade() {
    for (let  i = 0;  i < student.length;   i++) {
        switch (student[i].id) {
            case (i + 1):
                console.log(student[i].name);
                let m = student[i].scores.maths;
                let e = student[i].scores.english;
                let b = student[i].scores.biology;
                let ss = student[i].class
                result(m,e,b,ss)
                break;
            default :    console.log("the ID doesn't exist")
                break;
        }
    }
}

grade()