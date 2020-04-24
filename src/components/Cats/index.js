import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v1 as uuidv1 } from 'uuid';
import { FaRandom } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { Area, Buttons, Button } from './style';
import PawCat from '../../assets/paw_cat.png';

export default function Cats({ analyticsRegister }) {
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

  function newRandomImage() {
    analyticsRegister('randomImage');
    setUrlImage('');
    setNewImage(!newImage);
  }

  function vote(thumbs) {
    const valueVote = thumbs ? 1 : 0;
    analyticsRegister(`vote ${thumbs ? 'positive' : 'negative'}`);

    const body = {
      image_id: imageId,
      subId,
      value: valueVote,
    };

    axios
      .post('https://api.thecatapi.com/v1/votes', body, {
        headers: { 'x-api-key': { apiKey } },
      })
      .then(newRandomImage())
      .catch((error) => console.log(error));
  }

  return (
    <Area image={urlImage}>
      <Buttons>
        <Button title="Like" onClick={() => vote(true)} color="#348a5d">
          <img src={PawCat} alt="Like" width="50px" height="50px" />
        </Button>
        <Button title="Unlike" color="#ad2c34" onClick={() => vote(false)}>
          <AiOutlineClose />
        </Button>
        <Button title="New Image" onClick={newRandomImage} color="#015a6b">
          <FaRandom />
        </Button>
      </Buttons>
    </Area>
  );
}
