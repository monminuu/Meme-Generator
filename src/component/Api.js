import Axios from 'axios'
import React,{useState,useEffect} from 'react';
import axios from "axios";

// const getImage = async (topText, bottomText) => {
//
//     let config = {
//         method: 'get',
//         url: 'https://ronreiter-meme-generator.p.rapidapi.com/meme?top='+topText+'&bottom='+bottomText+'&meme=2nd-Term-Obama&font_size=50&font=Arial',
//         headers: {
//             'X-RapidAPI-Host': 'ronreiter-meme-generator.p.rapidapi.com',
//             'X-RapidAPI-Key': '1f7eb6734cmsh2551fc8deef0ff0p1781b6jsn9e099f5c6b1d'
//         }
//     };
//
//     const response = await axios(config);
// }





function Api() {
    const [comments,setComments]=useState([])
    useEffect(() => {
        fetchComments();
    }, [])
    useEffect(() => {
        console.log(comments)
    }, [comments])
    const fetchComments=async()=>{
        let config = {
            method: 'get',
            url: 'https://ronreiter-meme-generator.p.rapidapi.com/images',
            headers: {
                'X-RapidAPI-Host': 'ronreiter-meme-generator.p.rapidapi.com',
                'X-RapidAPI-Key': '1f7eb6734cmsh2551fc8deef0ff0p1781b6jsn9e099f5c6b1d'
            }
        };

        const response = await axios(config);
        setComments(response.data)
    }

    let x = 1;
    return (
        <div className="Api">
            {
                comments && comments.map(comment=>{
                    return(
                        <div key={x++} style={{alignItems:'center',margin:'20px 60px'}}>
                            <h4>{comment}</h4>
                        </div>
                    )

                })
            }
        </div>
    );
}

export default Api;
