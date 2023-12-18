import '@/settings/global.less';
import ReactDOM from 'react-dom/client';

if (document.getElementById('app')?.children.length === 0) {
  ReactDOM.createRoot(document.getElementById('app')!).render(<></>);
}
