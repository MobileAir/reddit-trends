import React, {useState} from 'react';
import GroupedBar from './GroupedBar';
import LoadingScreen from './LoadingScreen';

function App() {
    const [loading, setLoading] = useState(true);
    return (
        <div className="App">
            <LoadingScreen show={loading} />
            <GroupedBar loading={setLoading} />
        </div>
    );
}

export default App;
