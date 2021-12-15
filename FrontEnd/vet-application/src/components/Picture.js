import React from "react";
import axios from "axios";
import pictureData from "../data/pictureData";
import { useState } from "react";

const Picture = ({pictureUrl}) => {

    return ( 
        <figure class="image is-128x128">
            <img src={pictureUrl}/>
        </figure>
     );
}
 
export default Picture;