// const  getcolor = () =>{
//     // hex code 
//     const randomnumber = Math.floor(Math.random() * 16777215);
//     const randomcode = "#" + randomnumber.toString(16);
//     document.body.style.background = randomcode;
//     console.log(randomnumber);
//     document.getElementById("color-code").innerHTML = randomcode
// }

// document.getElementById("btn").addEventListener(
//     'click',
//     getcolor
// )

// getcolor();


const getcolor = () =>{
    const rendomnumber =Math.floor( Math.random() * 16777215);
    const colorcode = "#" + rendomnumber.toString(16);
    document.body.style.background = colorcode;
    console.log(rendomnumber , colorcode)
    document.getElementById("color-code").innerHTML = colorcode;
}


document.getElementById("btn").addEventListener(
    "click" ,
    getcolor
)

getcolor();