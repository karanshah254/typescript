import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Greet from './components/Greet'
import Heading from './components/Heading';
import Input from './components/Input';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import LoggedIn from './components/states/LoggedIn';
import Status from './components/Status';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  };

  const namelist = [
    {
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      first: 'Tony',
      last: 'Stark'
    },
    {
      first: 'Tom',
      last: 'Cruise'
    }
  ]
  return (
    <div className="App">
      {/* <Greet name='Karan' age={20} /> */}
      {/* <Person name={personName} />
      <PersonList names={namelist} /> */}
      {/* <Status status='error' /> */}
      {/* <Oscar>
        <Heading>
          Placeholder text
        </Heading>
      </Oscar> */}
      {/* <Button
        handleClick={(event, id) => {
          console.log('Button clicked', event, id)
        }}
      />
      <Input
        value=''
        handleChange={(event) => {
          console.log(event)
        }}
      /> */}
      {/* <Container styles={{
        border: '1px solid black',
        padding: '1rem',
        color: 'red',
        backgroundColor: 'lightgray'
      }} /> */}
      <LoggedIn />
    </div>
  );
}

export default App;
