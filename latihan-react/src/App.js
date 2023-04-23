import logo from './logo.svg';
import './App.css';

// import file component di sini (file js)
import { Intro } from './components/Intro';

function App() {
    return (
        <div className="App">
            {/* panggil fungsi Intro di sini, tag berupa nama fungsi */}
            <Intro/>
        </div>
    );
}

export default App;
