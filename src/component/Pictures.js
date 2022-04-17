import React,{useState,useEffect} from 'react';
import axios from "axios";


function Pictures() {
    const [pictures,setPictures]=useState([])
    useEffect(() => {
        fetchPictures();
    }, [])
    useEffect(() => {
        console.log(pictures)
    }, [pictures])
    const fetchPictures = async (topText, bottomText) => {

        let config = {
            method: 'get',
            url: 'https://ronreiter-meme-generator.p.rapidapi.com/meme?top=Top%20Text&bottom=Hello&meme=2nd-Term-Obama&font_size=50&font=Arial',
            headers: {
                'X-RapidAPI-Host': 'ronreiter-meme-generator.p.rapidapi.com',
                'X-RapidAPI-Key': '1f7eb6734cmsh2551fc8deef0ff0p1781b6jsn9e099f5c6b1d'
            }
        };

        const response = await axios(config);
        setPictures(response.data)
    }


    let x = 1;
    return (
        <div className="Pictures">
            {
                pictures && pictures.map(picture=>{
                    return(
                        <div key={x++} style={{alignItems:'center',margin:'20px 60px'}}>
                            <h4>{picture}</h4>
                        </div>
                    )

                })
            }
        </div>
    );
}

export default Pictures;
