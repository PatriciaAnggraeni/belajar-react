import logo from './logo.svg';
import './App.css';

// import file component di sini (file js)
import { Intro } from './components/Intro';
import Welcome from './components/Welcome';

function App() {
    return (
        <div className="App">
            {/* panggil fungsi Intro di sini, tag berupa nama fungsi */}
            <Intro/>

            {/* panggil fungsi Welcome di sini, tag berupa nama fungsi */}
            <Welcome/>
        </div>
    );
}

export default App;
