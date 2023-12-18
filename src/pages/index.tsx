import LoadingProcess from '@/components/loadingProcess';
import { PAGE } from '@/settings/config';
import { Context, InitialState, Reducer } from '@/settings/constant';
import '@/settings/global.less';
import { ActionType, TContext } from '@/settings/type';
import Fetcher, { contentType, formatType } from 'lesca-fetcher';
import { Suspense, lazy, memo, useContext, useMemo, useReducer } from 'react';
import ReactDOM from 'react-dom/client';

Fetcher.install({
  hostUrl: import.meta.env.VITE_API_PATH || './api',
  contentType: contentType.JSON,
  formatType: formatType.JSON,
});

if (import.meta.env.VITE_MOCKING === 'true') {
  import('@/mocks/browser').then((e) => {
    e.worker.start({ serviceWorker: { url: './mockServiceWorker.js' } });
  });
}

const Pages = memo(() => {
  const [context] = useContext(Context);
  const page = context[ActionType.Page];

  const Page = useMemo(() => {
    const [target] = Object.values(PAGE).filter((data) => data === page);
    if (target) {
      const Element = lazy(() => import(`./${target}/index.tsx`));
      return (
        <Suspense fallback=''>
          <Element />
        </Suspense>
      );
    }
    return '';
  }, [page]);

  return Page;
});

const App = () => {
  const [state, setState] = useReducer(Reducer, InitialState);
  const value: TContext = useMemo(() => [state, setState], [state]);
  return (
    <div className='App'>
      <Context.Provider {...{ value }}>
        <div className='navbar bg-base-100 z-40'>
          <div className='flex-1 hidden lg:block'>
            <a className='btn btn-ghost text-xl'>AUDI / VOLKSWAGEN EMAIL TEMPLATES</a>
          </div>
          <div className='flex-none'>
            <ul className='menu menu-horizontal z-50 px-1'>
              <li>
                <a href='https://jameshsu1125.github.io/2022-audi-edm-template/' target='_blank'>
                  Last Version
                </a>
              </li>
              <li>
                <details>
                  <summary>How to use</summary>
                  <ul className='p-2 bg-base-100 rounded-t-none'>
                    <li>
                      <a
                        target='_blank'
                        href='https://tsengseal.medium.com/%E7%B4%80%E9%8C%84-%E7%94%A8-outlook-%E5%81%9A-edm-%E7%9A%84%E5%BE%AE%E5%88%B6%E9%9C%B8%E6%94%BB%E7%95%A5-92fb4ff71d37'
                      >
                        Outlook desktop
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://jameshsu1125.github.io/2022-audi-edm-template/online.html'
                        target='_blank'
                      >
                        Outlook online
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
        <Pages />
        {state[ActionType.LoadingProcess]?.enabled && <LoadingProcess />}
      </Context.Provider>
    </div>
  );
};

if (document.getElementById('app')?.children.length === 0) {
  ReactDOM.createRoot(document.getElementById('app')!).render(<App />);
}
