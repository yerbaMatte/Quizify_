import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// What did i learn?
/*

1. To make a API calls choose useQuery hook instead of useEffect.
a) According to the official docs the useEffect hook runs after the rendering of the entire UI or component completes. So when we put an API call in it, the API call will start after the complete rendering of UI completes
START Render -> Complete Render -> Show loading UI -> Start Api Call -> Render UI with data
b) In the strict mode the useEffect is rendered twice


Line 45 Avoid document selection API. Logic can be twiqued to have dynamic className in element
Line 22 Function selectAnswer can be made bit easy to read and simpler. If data is structured in right way, maybe usage of map can also be avoided.

*/
