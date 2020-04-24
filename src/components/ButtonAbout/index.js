import React, { useState } from 'react';
import SweetAlert from 'sweetalert2-react';
import { Button } from './style';

export default function ButtonAbout({ analyticsRegister }) {
  const [showModal, setShowModal] = useState(false);

  function clickAbout() {
    analyticsRegister('About');
    setShowModal(true);
  }

  return (
    <>
      <Button onClick={clickAbout}>
        About
      </Button>

      <SweetAlert
        show={showModal}
        title="About"
        html="
        <div style='text-align: left'>
        <p>This is a 'Tinder' for cats. Random images and facts of catos will load and you can like it or not.</p>
        <p>Two api's are used:<p>
        <ul>
        <li><a href='https://alexwohlbruck.github.io/cat-facts/docs/'>cat-facts</a> provided by <a href='https://github.com/alexwohlbruck'>Alex Wohlbruck</a></li>
        <li><a href='https://docs.thecatapi.com/'>TheCatApi</a> provided by <a href='https://github.com/AdenForshaw'>Aden Forshaw</a></li>
        </ul>
        <p>Developed by <a href='https://github.com/ruandev'>Ruan Victor</a> with &#129505; in Recife</p>
        </div>
        "
        onConfirm={() => setShowModal(false)}
      />
    </>
  );
}
