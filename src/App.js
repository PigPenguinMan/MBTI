
import './App.css';
import Home from './pages/Home';
import Question from './pages/Question';
import Result from './pages/Result';
import { Route, Routes } from 'react-router-dom';
import { DataProvider } from './Context/DataContext'
function App() {
  return (
    <div className="App">
      <DataProvider>
        <Routes>
          <Route path='/' element={<Home />} > </Route>
          <Route path='/Match' element={<Question />}></Route>
          <Route path='/Result' element={<Result />}></Route>
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
