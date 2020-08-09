import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/52663543?s=460&u=7a2349908be6e598a42813ce8e3200e15c88965b&v=4" alt="Marlon Mavinier" />
        <div>
          <strong>Marlon Mavinier</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    <br /> <br />
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </p>

      <footer>
        <p>Preço/hora
        <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
        Entrar em contato
      </button>
      </footer>
    </article>
  );
};

export default TeacherItem;