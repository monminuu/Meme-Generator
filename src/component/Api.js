import React,{useState,useEffect} from 'react';
import axios from "axios";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from "bootstrap/js/src/dropdown";

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
        setComments(response.data);
    }

    let x = 1;
    return (
        <div className="Api">
            {/*{*/}
            {/*    //comments && comments.map(comment=>{*/}
            {/*        return(*/}
            {/*            <div key={x++} style={{alignItems:'center',margin:'20px 60px'}}>*/}
            {/*                // <DropdownButton id="dropdown-item-button" title="Dropdown button">*/}
            {/*                //     <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>*/}
            {/*                //     <Dropdown.Item as="button">Action</Dropdown.Item>*/}
            {/*                //     <Dropdown.Item as="button">Another action</Dropdown.Item>*/}
            {/*                //     <Dropdown.Item as="button">Something else</Dropdown.Item>*/}
            {/*                // </DropdownButton>*/}
            {/*            </div>*/}
            {/*        )*/}

            {/*    })*/}
            {/*}*/}
        </div>
    );
}

export default Api;
