import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TimeInput } from './components/TimeInput';

import './styles.css';

const App = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <h1 className="text-center">react-time-hook</h1>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col col-6">
          <div className="mb-3">
            <label className="form-label">12-hour</label>
            <TimeInput value="12:30 AM" />
          </div>
          <div className="mb-3">
            <label className="form-label"> 24-hour</label>
            <TimeInput value="12:30" format="24" />
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
