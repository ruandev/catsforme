import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Facts, Fact, Button } from './style';

export default function FunFact({ analyticsRegister }) {
  const [data, setData] = useState({});
  const [newFact, setNewFact] = useState(false);

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

  function newRandomFact() {
    analyticsRegister('newRandomFact');
    setNewFact(!newFact);
  }

  return (
    <Facts>
      <Fact>{data.text}</Fact>
      <Button
        onClick={newRandomFact}
      >
        New Fun Fact
      </Button>
    </Facts>
  );
}
