import React,{useState} from 'react';
import "./App.css";

function App() {
  var [toggle,setToggle] =useState(true)
    const images = [
        {img:"./assets/images/dog1.jpg",id:1},
        {img:"./assets/images/dog2.jpg",id:2},
        {img:"./assets/images/dog3.jpg",id:3},
        {img:"./assets/images/dog4.jpg",id:4},
        {img:"./assets/images/dog5.jpg",id:5},
        {img:"./assets/images/dog6.jpg",id:6},
        {img:"./assets/images/dog7.jpg",id:7},
        {img:"./assets/images/dog8.jpg",id:8},
        {img:"./assets/images/dog9.jpg",id:9},
        {img:"./assets/images/dog10.jpg",id:10},
        {img:"./assets/images/dog11.jpg",id:11},
        {img:"./assets/images/dog12.jpg",id:12},
        {img:"./assets/images/dog13.jpg",id:13},
        {img:"./assets/images/dog14.jpg",id:14},
        {img:"./assets/images/dog15.jpg",id:15},
        {img:"./assets/images/dog16.jpg",id:16},
        {img:"./assets/images/dog17.jpg",id:17},
        {img:"./assets/images/dog18.jpg",id:18},
        {img:"./assets/images/dog19.jpg",id:19},
        {img:"./assets/images/dog20.jpg",id:20},
    ]
    function ab(){
      setToggle(!toggle)
    }
    function cd(){
      setToggle(!toggle)
    }
  return (    
    <div>
      <nav>
    {/* <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">3D view</button>
          <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">listview</button> 
        </div>  */}
        {toggle?<button onClick={ab}>3D view</button>:<button onClick={cd}>2D View</button>}

        {toggle? <div className='body'>
            <div className='slider'>
              {
                images && images.map((item,index)=>{
                  return <span style={{"--i":`${item.id}`}} key={index+1}>
                     <img src={item.img} alt="" />
                  </span>
                }
              )
            }
          </div>
       </div>:
       <div className="d-flex flex-wrap">
       {
        images && images.map((item,index)=>{
         return <span key={index+1}>
           <img src={item.img} alt="img"  width="350px" height="350px" />
         </span>
        })
       }
       </div>  }
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
         
     </div>
     <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
         
    </div>  
  </div>
  </div>
  )
}

export default App;