import './App.css';
import React from 'react';
import ThemedComponent from './components/usecontext';   
import { ThemeProvider } from './ThemeContext'; 

const App = () => {
    return (
        <ThemeProvider>
            <ThemedComponent />
        </ThemeProvider>
    );
};

export default App;
