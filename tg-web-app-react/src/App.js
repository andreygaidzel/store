import './App.css';
import { useEffect } from "react";

const tg = window.Telegram.WebApp;

function App() {

    useEffect(() => {
        tg.ready();
    }, [])

    const onClose = () => {
        console.log(33, tg);
        tg.close();
    }

    return (
        <div className="App">
            work
            <button onClick={onClose}>Close</button>
            <span className={'username'}>
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    );
}

export default App;
