import React, { useState, useEffect } from 'react'
import { Area, Buttons, Button } from './style'
import axios from 'axios';
import { v1 as uuidv1 } from 'uuid';
import { FaThumbsUp, FaThumbsDown, FaRandom } from 'react-icons/fa';


export default function Cats() {
  const api_key = process.env.API_KEY;
  let sub_id = uuidv1();
  if (localStorage.getItem("sub_id") != null) {
    sub_id = localStorage.getItem("sub_id")
  } else {
    localStorage.setItem("sub_id", sub_id);
  }


  const [newImage, setNewImage] = useState(false);
  const [urlImage, setUrlImage] = useState("");
  const [imageId, setImageId] = useState("");

  useEffect(() => {
    axios.get('https://api.thecatapi.com/v1/images/search', { params: { limit: 1, size: "full" }, headers: { 'x-api-key': api_key } })
      .then(result => {
        setUrlImage(result.data[0].url)
        setImageId(result.data[0].id)
      })
      .catch(error => console.log(error));
  }, [api_key, newImage]);

  function newRandomImage() {
    setUrlImage("");
    setNewImage(!newImage)
  }

  function vote(thumbs) {
    const valueVote = (thumbs ? 1 : 0);
    console.log("SUB_ID: " + sub_id)

    const body = {
      "image_id": imageId,
      "sub_id": sub_id,
      "value": valueVote
    }

    axios.post('https://api.thecatapi.com/v1/votes', body, { headers: { 'x-api-key': { api_key } } })
      .then(newRandomImage())
      .catch(error => console.log(error));
  }

  return (
    <Area image={urlImage}>
      <Buttons>
        <Button title="Like" color="green" onClick={() => vote(true)}><FaThumbsUp /></Button>
        <Button title="Unlike" color="red" onClick={() => vote(false)}><FaThumbsDown /></Button>
        <Button title="New Image" onClick={newRandomImage}><FaRandom /></Button>
      </Buttons>
    </Area >
  )
}