import { createRoot } from 'react-dom/client';
import 'normalize.css';
import './index.css';
import 'antd/dist/antd.css'
import App from "@components/root/app/App.tsx";

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(<App />);
