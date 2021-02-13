import React, {useState} from 'react';
import DatePicker from './DatePicker';
import GroupedBar from './GroupedBar';
import LoadingScreen from './LoadingScreen';
import {ContextProvider} from './context';

function App() {
    const [loading, setLoading] = useState(true);
    return (
        <ContextProvider>
            <div className="app">
                <LoadingScreen show={loading} />
                <DatePicker />
                <GroupedBar loading={setLoading} />
            </div>
        </ContextProvider>
    );
}

export default App;
