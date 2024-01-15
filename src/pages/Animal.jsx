import React from 'react'
import { photos } from "../constant";
import Card from "../components/cards/Card";


const Animal = ({naming , setNaming , image , setImage , display , setDisplay}) => {
  let newArray = photos.filter((photo)=> photo.category == "animals");
  const filterdArray = newArray.filter((photo)=>{
    let item = null;
    for(var i = 0 ; i < photo.name.length ; i++){
      if(photo.name === naming){
       item = photo
      }
    }
    return item;
  })
  function WhichArray() {
    if(filterdArray.length === 0){
      return newArray;
    } else {
      return filterdArray;
    }
  }
  return (
    <div className="flex flex-wrap justify-evenly items-center w-full pt-[60px]
     md:pt-[80px] xl:pt-[100px] 2xl:pt-[170px]">
      {WhichArray().map((item)=>(
        <Card catg={item.category} name={item.name} source={item.src} image={image} 
        Cname={item.cname} setImage={setImage} display={display} setDisplay={setDisplay}/>
      ))}
     </div>
  )
}

export default Animal