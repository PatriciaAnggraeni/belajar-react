import logo from './logo.svg';
import './App.css';

// import file component di sini (file js)
import { Intro } from './components/Intro';
import Welcome from './components/Welcome';
import User from './components/User';

function App() {
    return (
        <div className="App">
            {/* panggil fungsi Intro di sini, tag berupa nama fungsi */}
            <Intro/>

            {/* panggil fungsi Welcome di sini, tag berupa nama fungsi */}
            <Welcome/>

            {/* panggil fungsi User di sini, tag berupa nama fungsi */}
            <User id={"id-user"} class={"user-name"} name={"Angga"}/>

        </div>
    );
}

export default App;
