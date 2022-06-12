import EnviaMensagem from "./components/EnviaMensagem/EnviaMensagem";
import styled from "styled-components";

const AppWhats = styled.div`
display: flex;
justify-content: center;
`

function App() {
  return (
    <AppWhats>
      <EnviaMensagem>

      </EnviaMensagem>

    </AppWhats>

  );
}

export default App;
