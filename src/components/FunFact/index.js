import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AreaFact, Fact } from './style';

export default function FunFact({ newFact }) {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get('https://cat-fact.herokuapp.com/facts/random', {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => console.log(error));
  }, [newFact]);

  return (
    <AreaFact>
      <Fact>{data.text}</Fact>
    </AreaFact>
  );
}
