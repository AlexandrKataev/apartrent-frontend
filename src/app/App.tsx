import { getEstateList } from 'entities/EstateList/model/estateListSlice';
import { Header } from 'layout/Header';
import { useEffect } from 'react';
import s from './App.module.scss';

import Routing from './routing';

const App: React.FC = () => {
  return (
    <div className={s.app}>
      <Header />
      <Routing />
    </div>
  );
};

export default App;
