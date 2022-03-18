import './index.css';
import Heading from './Components/heading';
import ExpenseItem from './Components/ExpenseItem';
function App() {
  return (
    <div>
      <Heading></Heading>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
