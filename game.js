function makeup() {
    const list = []
    //drivers registration
    list.push(
        {name:"Adeshina", age: 45, level: 2, source: "Ikeja", destination: "Magodo"},
        {name:"Ajadi", age:50, level: 4, source: "Agege",  destination: "Ibafo"},
        {name:"Gold", age:40, level: 3, source: "Burger", destination: "Oshodi"},
        {name:"Staley", age:55, level: 4, source: "Lekki", destination:"Eko"},
        {name:"Lucky", age: 45, level: 1, source: "Lekki", destination:"Lakue"},
        {name:"Ibrahim", age: 35, level : 2, source : "Mowe", destination:"Abule-egba"},
        {name:"Faruq", age: 65, level: 2 , source: "Eko", destination:"Igando"},
        {name:"micheal", age:40, level: 4, source: "Sango", destination:"Oshodi"},
        {name: "Andrew", age: 50, level: 5, source: "Oworoshoki", destination: "Burger"},
        {name:"Chisom", age: 65, level: 5,  source: "Ilupeju", destination: "Akoka"}
    )
    const duplicate = [...list]
    list.pop()
    list.shift()
    list.unshift(
        {name:"Mali", age : 55, level : 3, source: "Ojuelegba", destination: "Shitta"},
        {name:"Kaka", age: 40, level: 5, source: "Eko", destination: "Palmgroove"},
        {name : "Gbada", age: 50, level: 4, source: "Gbagada", destination: "Mile2"},
        {name:"Adebiyi", age: 67, level: 3, source:"Oshodi", destination :"Mushin"},
        {name: "Fagbenro", age : 48, level: 5, source: "Agege" ,destination: "Oshodi"}
    )
    list.slice(7,10)
    list.splice(10,0,
        {
        name: "ogbona", age : 48, level: 4, source:"Mushin", destination: "Alagbado"
        })

    const map = list.map((road) => {
        console.log (`${road.name} - ${road.source} to ${road.destination} \n` )
        
        console.log()
    })
    const index = list.findIndex((count) => count.age == "40")
    const look = list.find((res) => res.source == "Eko" )
    list.forEach((loop) => console.log(loop.level))
    const filter = list.filter((filt) => filt.level == "4")
    console.log(list)
   
    index >=0 ? console.log(list[index]):console.log("Not Found");
    console.log(look)
    console.log(filter)
    console.log(duplicate)
}
makeup()