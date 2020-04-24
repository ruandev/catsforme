import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v1 as uuidv1 } from 'uuid';
import {
  Area, Buttons, Button, Unlike,
} from './style';
import PawCat from '../../assets/paw_cat.png';

export default function Cats({ analyticsRegister, handleVote }) {
  const apiKey = process.env.API_KEY;
  let subId = uuidv1();
  if (localStorage.getItem('sub_id') != null) {
    subId = localStorage.getItem('sub_id');
  } else {
    localStorage.setItem('sub_id', subId);
  }

  const [urlImage, setUrlImage] = useState('');
  const [imageId, setImageId] = useState('');
  const [newImage, setNewImage] = useState('');

  useEffect(() => {
    axios
      .get('https://api.thecatapi.com/v1/images/search', {
        params: { limit: 1, size: 'full' },
        headers: { 'x-api-key': apiKey },
      })
      .then((result) => {
        setUrlImage(result.data[0].url);
        setImageId(result.data[0].id);
      })
      .catch((error) => console.log(error));
  }, [apiKey, newImage]);

  function vote(thumbs) {
    const valueVote = thumbs ? 1 : 0;
    analyticsRegister(`vote ${thumbs ? 'positive' : 'negative'}`);

    const body = {
      image_id: imageId,
      sub_id: subId,
      value: valueVote,
    };

    axios
      .post('https://api.thecatapi.com/v1/votes', body, {
        headers: { 'x-api-key': apiKey },
      })
      .then(() => {
        handleVote();
        setNewImage(!newImage);
      })
      .catch((error) => console.log(error));
  }

  return (
    <Area image={urlImage}>
      <Buttons>
        <Button title="Unlike" color="#ad2c34" onClick={() => vote(false)}>
          <Unlike>X</Unlike>
        </Button>
        <Button title="Like" color="#348a5d" onClick={() => vote(true)}>
          <img src={PawCat} alt="Like" width="50px" height="50px" />
        </Button>
      </Buttons>
    </Area>
  );
}
