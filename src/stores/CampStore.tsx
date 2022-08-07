import { createContext } from 'react';
import { observable, makeObservable } from 'mobx';

import { fetchCamp } from 'apis/api';
import { ICampDetail } from 'types/Camp';

class CampsStore {
  @observable campDetail: ICampDetail | null = null;

  constructor() {
    makeObservable(this);
  }

  fetchCampById = async (id: number) => {
    const { data } = await fetchCamp(id);
    this.campDetail = data;
  };
}

export default createContext(new CampsStore());
