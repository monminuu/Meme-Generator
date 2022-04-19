import React,{useState,useEffect} from 'react';
import axios from "axios";
import Buffer from "buffer";


function Pictures() {
    const [pictures,setPictures]=useState([])
    useEffect(() => {
        fetchPictures();
    }, [])
    useEffect(() => {
        // console.log(pictures);

        // let base64ImageString = Buffer.from(pictures, 'binary').toString('base64')
        //
        if(typeof pictures === 'string'){
            // let enc = new TextEncoder(); // always utf-8
            // let encPicture = enc.encode(pictures);

            // let base64ImageString = Buffer.from(encPicture, 'binary').toString('base64');
            let srcValue = "data:image/jpeg;base64,"+pictures;
            console.log(srcValue + "##xxxx");
        }

        // let binaryData = [];
        // binaryData.push(pictures);
        // console.log(window.webkitURL.createObjectURL(new Blob([pictures], {type: "image/jpeg"})));

    }, [pictures])
    const fetchPictures = async () => {

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
        console.log(response);
    }


    let x = 1;

    //let b64 = window.btoa(unescape(encodeURIComponent(pictures)));

    //let b64Response = btoa(pictures);
    //let outputImg = document.createElement('img');
    //outputImg.src = 'data:image/png;base64,'+b64Response;

    //document.body.appendChild(outputImg);



    // const urlCreator = window.URL || window.webkitURL;
    // console.log(urlCreator.createObjectURL(pictures));
    // document.getElementById('myImage').src = urlCreator.createObjectURL(pictures);

    let srcValue = "data:image/jpeg;base64,"+pictures;

    return (
        <div className="Pictures">
            {
                // pictures && pictures.map(picture=>{
                //     return(
                //         <div key={x++} style={{alignItems:'center',margin:'20px 60px'}}>
                //             <h4>{picture}</h4>
                //         </div>
                //     )
                //
                // })
                <img src={srcValue} />

            }
        </div>
    );
}

export default Pictures;
