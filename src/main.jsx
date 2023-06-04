import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/main.css';

import Topo from './topo.jsx';
import Corpo from './corpo.jsx'
import RodaPe from './rodape.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <>
    <Topo/>
    <Corpo/>
    <RodaPe/>
  </>
)


