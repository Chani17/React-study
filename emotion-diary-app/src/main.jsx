import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  // BrowserRouter: 브라우저의 현재 주소를 저장하고 감지하는 역할
    <BrowserRouter>
      <App />
    </BrowserRouter>
)
