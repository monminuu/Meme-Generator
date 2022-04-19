import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Card} from "react-bootstrap";


function Pictures(props) {
    const [pictures,setPictures]=useState([])
    useEffect(() => {
        fetchPictures(props.topText, props.bottomText, props.imageName, props.fontName);
    }, [])
    useEffect(() => {
        console.log(pictures);
    }, [pictures])
    const fetchPictures = async (topText, bottomText, imageName, fontName) => {

        let config = {
            method: 'get',
            url: 'https://ronreiter-meme-generator.p.rapidapi.com/meme?top='+topText+'&bottom='+bottomText+'&meme='+imageName+'&font_size=50&font='+fontName,
            headers: {
                'X-RapidAPI-Host': 'ronreiter-meme-generator.p.rapidapi.com',
                'X-RapidAPI-Key': '1f7eb6734cmsh2551fc8deef0ff0p1781b6jsn9e099f5c6b1d'
            },
            responseType: "blob"
        };

        const response = await axios(config);
        setPictures(response.data);
        console.log(response);
    }

    let binaryData = [];
    binaryData.push(pictures);
    const url = URL.createObjectURL(new Blob(binaryData, {type: "application/jpeg"}));

    return (
        <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src={url}/>
            <Card.Title>Here is your MEME Image!</Card.Title>
            <Card.Text>Right click on the image and save it to your computer!</Card.Text>
        </Card>
    );
}

export default Pictures;
