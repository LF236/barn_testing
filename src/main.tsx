import ReactDom from 'react-dom/client';

const root = document.querySelector( '#root' );

ReactDom.createRoot( root! ).render(
    <h1>Hola</h1>
);