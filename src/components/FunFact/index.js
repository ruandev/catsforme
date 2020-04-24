import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Facts, Fact } from './style';

export default function FunFact() {
  const [data, setData] = useState({});
  const [newFact, setNewFact] = useState(false);

  useEffect(() => {
    axios
      .get('http://cat-fact.herokuapp.com/facts/random', {
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
    <Facts>
      <Fact>{data.text}</Fact>
      <button
        type="button"
        onClick={() => {
          setNewFact(!newFact);
        }}
      >
        New Fun Fact
      </button>
    </Facts>
  );
}
