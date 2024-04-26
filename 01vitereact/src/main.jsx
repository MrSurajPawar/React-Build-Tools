import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
        <div>
            <h1>Chai aur react !</h1>
        </div>
    );
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank'
//     },
//     children: 'click me to visit the google'
// }

const anotherElement = (
    <a href="https://www.google.com" target='_blank'>visit google</a>
);

const anotheruser = 'Suraj'
const reactElement = React.createElement(
    'a',
    {href: 'https://www.google.com' , target: '_blank'},
    'click me to visit the google',
    anotheruser
);

ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
);  
