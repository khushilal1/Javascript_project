// var imageArray=[
//     " image/1.jpg","image/2.jpg","image/3.jpg","image/4.jpg"
//  ]

// for(i=0;i<imageArray.length;){
//     function right(){
//         document.getElementById("pic").src=`${imageArray[i]}`
        
//         i++
//         console.log(i);
        
// }

//  }

 //addevent listener method


 var imageArray=[
    " image/1.jpg","image/2.jpg","image/3.jpg","image/4.jpg"
 ]

 for(i=0;i<imageArray.length;i++){


    var click=document.getElementById("right")

    click.addEventListener("click",function right(){
    
        {
            document.getElementById("pic").src=`${imageArray[i]}`
            
            console.log(i);
            
    }
    
        
         }
    
    )}













// function left(){
//     document.getElementById("pic").src=`${imageArray[1]}`

    
// //     }

// // function left(){
// //     document.getElementById("left".src)
// }