import React, { Component } from 'react'

export default class listEx extends Component {
 render(){ 
     const chocolates= ["5Star","DairyMilk","KitKat","Munch"]
    const listChocolates = chocolates.map((i) =>i );
    
    console.log(listChocolates);
   return (
    <h1>{listChocolates}</h1>
   )
 }
}
