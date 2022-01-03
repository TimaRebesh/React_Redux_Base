import './App.css';
import Likes from './components/Likes';
import Title from './components/Title';
import Comments from './components/Comments';
import Spinner from './components/Spinner';

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <Spinner />
        <div className="card">
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing" />
            <Title />
            <Likes />
          </div>
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default App;
