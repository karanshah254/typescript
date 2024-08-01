import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Greet from './components/Greet'
import Heading from './components/Heading';
import Input from './components/Input';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Counter from './components/states/Counter';
import LoggedIn from './components/states/LoggedIn';
// import User from './components/states/User';
import Status from './components/Status';
import { ThemeContextProvider } from './components/context/ThemeContext';
import Box from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import User from './components/context/User';




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
      {/* <LoggedIn /> */}
      {/* <User name='karan' email='karan@mail.com' /> */}
      {/* <Counter /> */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default App;
