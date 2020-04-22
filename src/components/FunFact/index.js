import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Facts, Fact } from './style';

export default function FunFact() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('http://cat-fact.herokuapp.com/facts/random')
      .then((result) => {
        setData(result.data);
        console.log(data)
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Facts>
      <Fact>
        A happy cat holds her tail high and steady.
      </Fact>
      <button type="button">
        New Fun Fact
      </button>
    </Facts>
  );
}
