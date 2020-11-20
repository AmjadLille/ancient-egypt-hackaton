import styled from 'styled-components';
import Carte from './components/Carte';


const Pagecontainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: black;
  width: 100vw;
  height: auto;
`;

function App() {
  return (
    <Pagecontainer>
      <Carte />
    
    </Pagecontainer>
  );
}

export default App;
