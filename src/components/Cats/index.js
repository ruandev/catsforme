import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v1 as uuidv1 } from 'uuid';
import { FaThumbsUp, FaThumbsDown, FaRandom } from 'react-icons/fa';
import { Area, Buttons, Button } from './style';


export default function Cats() {
  const apiKey = process.env.API_KEY;
  let subId = uuidv1();
  if (localStorage.getItem('sub_id') != null) {
    subId = localStorage.getItem('sub_id');
  } else {
    localStorage.setItem('sub_id', subId);
  }


  const [newImage, setNewImage] = useState(false);
  const [urlImage, setUrlImage] = useState('');
  const [imageId, setImageId] = useState('');

  useEffect(() => {
    axios.get('https://api.thecatapi.com/v1/images/search', { params: { limit: 1, size: 'full' }, headers: { 'x-api-key': apiKey } })
      .then((result) => {
        setUrlImage(result.data[0].url);
        setImageId(result.data[0].id);
      })
      .catch((error) => console.log(error));
  }, [apiKey, newImage]);

  function newRandomImage() {
    setUrlImage('');
    setNewImage(!newImage);
  }

  function vote(thumbs) {
    const valueVote = (thumbs ? 1 : 0);

    const body = {
      image_id: imageId,
      subId,
      value: valueVote,
    };

    axios.post('https://api.thecatapi.com/v1/votes', body, { headers: { 'x-api-key': { apiKey } } })
      .then(newRandomImage())
      .catch((error) => console.log(error));
  }

  return (
    <Area image={urlImage}>
      <Buttons>
        <Button title="Like" color="green" onClick={() => vote(true)}><FaThumbsUp /></Button>
        <Button title="Unlike" color="red" onClick={() => vote(false)}><FaThumbsDown /></Button>
        <Button title="New Image" onClick={newRandomImage}><FaRandom /></Button>
      </Buttons>
    </Area>
  );
}
