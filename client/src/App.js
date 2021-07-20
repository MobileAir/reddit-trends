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
                <div className="container">
                    <div className="picker-container">
                        <DatePicker />
                    </div>
                    <div className="chart-container">
                        <GroupedBar loading={setLoading} />
                    </div>
                </div>
            </div>
        </ContextProvider>
    );
}

export default App;
