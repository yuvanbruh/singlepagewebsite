// function addRecommendation(){
//     var recommendation=document.getElementById("new_recommendation")
// //to add the recommendation if added
// if(recommendation.value!=null &&recommendation.value.trim()!=""){
//     console.log("new recomendation just added")
    
// var element=document.getElementById("div")
// element.setAttribute("class","recommendation");
// element.innerHTML=recommendation.value;
// document.getElementById("all_recommendations").appendChild(element);
// recommendation.area="";
// }
// // let trainerDiv=document.createElement("div")
// // trainerDiv.className="recommendations"
// // trainerDiv.appendChild(className)
// // document.body.appendChild(trainerDiv)
// }
// function addRecommendation(){
//     var recommendation=document.getElementById("new_recommendation")
//     if(recommendation!=null &&recommendation.value!=""){
//         console.log("how you doin")
//         var element=document.creat
//     }

// }

// function addElement(){
//     const newDiv=document.createElement("div")
//     const nowContent=document.createTextNode("hihowyoudoin")

//     newDiv.appendChild(newcontent)
//     const currentdiv=document.getElementById("div1")
//     document.body.insertBefore(newdiv,currentdiv)
// }
// function addelement(){
//     const newdiv=document.createElement("div")
//     const content=document.createTextNode("how ther")
//     newdiv.appendChild(content)
//     cnost prev div=document.getElementById("div1")
//     document.body.insertBefore()
// }

function addRecommendation() {
    // Get the message of the new recommendation
    let recommendation = document.getElementById("new_recommendation");
    // If the user has left a recommendation, display a pop-up
    if (recommendation.value != null && recommendation.value.trim() != "") {
      console.log("New recommendation added");
      //Call showPopup here
  
      // Create a new 'recommendation' element and set it's value to the user's message
      var element = document.createElement("div");
      element.setAttribute("class","recommendation");
      element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
      // Add this element to the end of the list of recommendations
      document.getElementById("all_recommendations").appendChild(element); 
      
      // Reset the value of the textarea
      recommendation.value = "";
    }
  }
  
  function showPopup(bool) {
    if (bool) {
      document.getElementById('popup').style.visibility = 'visible'
    } else {
      document.getElementById('popup').style.visibility = 'hidden'
    }
  }
  

