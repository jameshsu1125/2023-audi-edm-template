import { memo, useState } from 'react';
import { HomeContext, HomeState, THomeState } from './config';
import ve from './img/ve.jpg';
import vr from './img/vr.jpg';
import ar from './img/ar.jpg';
import ae from './img/ae.jpg';
import './index.less';
import Template from './template';

const Home = memo(() => {
  const [state, setState] = useState<THomeState>(HomeState);

  return (
    <div className='Home'>
      <HomeContext.Provider value={[state, setState]}>
        <div className='mockup-browser border border-base-300'>
          <div className='mockup-browser-toolbar'>
            <div className='input border border-base-300'>volkswagen template</div>
          </div>
          <div className='flex w-full flex-col lg:flex-row'>
            <div className='grid flex-grow card bg-base-300 rounded-box place-items-center space-y-5 p-5'>
              <h1 className='text-2xl my-5 capitalize'>empty document</h1>
              <Template>
                <img src={ve} alt='' />
              </Template>
              <button
                onClick={() => {
                  window.open('https://app.postdrop.io/share/u5el9toQT8wM0kPHdwS1oxkdxlLcFmoi1dlg');
                }}
                className='btn btn-wide bg-warning capitalize'
              >
                empty template URL
              </button>
            </div>
            <div className='divider divider-vertical lg:divider-horizontal'>OR</div>
            <div className='grid flex-grow card bg-base-300 rounded-box place-items-center space-y-5 p-5'>
              <h1 className='text-2xl my-5 capitalize'>regular document</h1>
              <Template>
                <img src={vr} alt='' />
              </Template>
              <button
                onClick={() => {
                  window.open('https://app.postdrop.io/share/pRpo6grZ0cfpH-1kIgSxW9PdC5F90LaU66NE');
                }}
                className='btn btn-wide bg-success capitalize'
              >
                regular template URL
              </button>
            </div>
          </div>
        </div>
        <div className='mockup-browser border border-base-300'>
          <div className='mockup-browser-toolbar'>
            <div className='input border border-base-300'>audi template</div>
          </div>
          <div className='flex w-full flex-col lg:flex-row'>
            <div className='grid flex-grow card bg-base-300 rounded-box place-items-center space-y-5 p-5'>
              <h1 className='text-2xl my-5 capitalize'>empty document</h1>
              <Template>
                <img src={ae} alt='' />
              </Template>
              <button
                onClick={() => {
                  window.open('https://app.postdrop.io/share/ZRvVkMPJv-ALywPw2LTQ4_o-4_4-HH1vrfMj');
                }}
                className='btn btn-wide bg-warning capitalize'
              >
                empty template URL
              </button>
            </div>
            <div className='divider divider-vertical lg:divider-horizontal'>OR</div>
            <div className='grid flex-grow card bg-base-300 rounded-box place-items-center space-y-5 p-5'>
              <h1 className='text-2xl my-5 capitalize'>regular document</h1>
              <Template>
                <img src={ar} alt='' />
              </Template>
              <button
                onClick={() => {
                  window.open('https://app.postdrop.io/share/4X7NOYVQHOu0jAnpC538cYADLSduiJADC8nU');
                }}
                className='btn btn-wide bg-success capitalize'
              >
                regular template URL
              </button>
            </div>
          </div>
        </div>
      </HomeContext.Provider>
    </div>
  );
});

export default Home;
