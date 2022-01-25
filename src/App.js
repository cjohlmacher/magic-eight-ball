import './App.css';
import EightBall from './Components/EightBall/EightBall';

const answers = [
  {msg: "It is certain.", color: 'green'},
  {msg: "Yes - Definitely.", color: 'green'},
  {msg: "Love that for you.", color: 'green'},
  {msg: "Make it so.", color: 'green'},
  {msg: "Outlook good.", color: 'green'},
  {msg: "Yes.", color: 'green'},
  {msg: "You want it. You got it.", color: 'green'},
  {msg: "Reply hazy, try again.", color: 'goldenrod'},
  {msg: "Ask again later.", color: 'goldenrod'},
  {msg: "Better not tell you now.", color: 'goldenrod'},
  {msg: "Is that the right question?", color: 'goldenrod'},
  {msg: "Tread lightly here.", color: 'goldenrod'},
  {msg: "Maybe yes, Maybe no. You decide.", color: 'goldenrod'},
  {msg: "Entering a tunnel. Poor reception.", color: 'goldenrod'},
  {msg: "Don't count on it.", color: 'red'},
  {msg: "My sources say no.", color: 'red'},
  {msg: "Outlook not so good.", color: 'red'},
  {msg: "Very doubtful.", color: 'red'},
  {msg: "Danger here. Beware.", color: 'red'},
  {msg: "Not in your lifetime.", color: 'red'},
  {msg: "Only in another universe.", color: 'red'},
  {msg: "I'm trapped - set me free!", color: 'red'},
]

function App() {
  return (
    <div className="App">
      <EightBall answers={answers}/>
    </div>
  );
}

export default App;
