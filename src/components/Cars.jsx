import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Data from '../dataBase/Data';
export default function Cars() {
  return (
    <div>
      {
        Data.map((ele)=>(
            <div class="card" style={{width: "18rem"}} key={ele.id}>
  <img class="card-img-top" src={ele.image} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Name: {ele.name}</h5>
    <p class="card-text">Color: {ele.color}</p>
    <p class="card-text">Marque: {ele.marque}</p>
    
  </div>
</div>
        ))
      }
    </div>
  )
}
