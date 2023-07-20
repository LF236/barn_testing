import ReactDom from 'react-dom/client';
import BarnAppComponent from './components/BarnAppComponent';
const root = document.querySelector( '#root' );

ReactDom.createRoot( root! ).render(
    <BarnAppComponent />
);