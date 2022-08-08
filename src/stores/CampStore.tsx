import { createContext } from 'react';
import { observable, makeObservable, action } from 'mobx';

import { fetchCamp } from 'apis/api';
import { ICampDetail } from 'types/Camp';

class CampStore {
  @observable campDetail: ICampDetail | null = null;

  constructor() {
    makeObservable(this);
  }

  @action fetchCampById = async (id: number) => {
    const { data } = await fetchCamp(id);
    this.campDetail = data;
  };
}

export default createContext(new CampStore());
