import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/5/5'}
          fotoPost={'https://picsum.photos/200/200'}
        />
        <Post
          nomeUsuario={'bela'}
          fotoUsuario={'https://picsum.photos/10/10'}
          fotoPost={'https://picsum.photos/150/150'}
        />
        <Post
          nomeUsuario={'maya'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/210/210'}
        />
      </MainContainer>
    );
  }
}

export default App;
