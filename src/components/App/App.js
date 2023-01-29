import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import DetailList from '../DetailsFolder/Details';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
      {/* route path used 👇 to bring to details page based on id */}
        <Route path="/details/:id" exact>
        <DetailList />
        </Route>
      </Router>
    </div>
  );
}


export default App;
