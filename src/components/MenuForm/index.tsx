import React from 'react';

import { Container, Navigation, DropboxLogo, Form } from './styles';

const MenuForm: React.FC = () => {

  function handleToggle() {
    if (window.toggleActiveMenu) window.toggleActiveMenu();
  };

  return (
    <Container>
      <Navigation>
        <h1>
          <DropboxLogo />
          <span>DropBox Clone</span>
        </h1>

        <button className="action--close" onClick={handleToggle}>
          x
        </button>
      </Navigation>
      <Form>
        <span className="title">Registre-se</span>
        <span className="subtitle">Preencha o formulário abaixo</span>

        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Sobrenome" />
        <input type="email" placeholder="e-Mail" />
        <input type="password" placeholder="Senha"/>

        <button>Prosseguir</button>

        <span className="terms">Esta página está sujeita à Política de Privacidade e aos Termos de Uso do serviço. </span>
      </Form>
    </Container>
  ) 
}

export default MenuForm;