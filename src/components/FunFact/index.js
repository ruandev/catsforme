import React, { useState, useEffect } from 'react'
import { Facts, Fact } from './style'
import axios from 'axios';

export default function FunFact() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('http://cat-fact.herokuapp.com/facts/random')
      .then(result => {
        setData(result.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <Facts>
      <Fact>
        {data.text}
      </Fact>
      <button>
        New Fun Fact
      </button>
    </Facts>
  )
}