import React from "react";
import axios from "axios";
import pictureData from "../data/pictureData";
import { useState } from "react";

const Picture = ({pictureUrl}) => {

    // const [pic, setPic] = useState(null);

    // var apiEndPoint = ""
    // apiEndPoint = "http://localhost:8080/animals/"+ id +"/images";
    
    // function addPicture(){
    //     axios.get(apiEndPoint).then((res) => {
    //         setPic(res.data);
    //     })
    // }
    return ( 
        <figure class="image is-128x128">
            <img src={pictureUrl}/>
        </figure>
     );
}
 
export default Picture;