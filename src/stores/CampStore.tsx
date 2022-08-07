import { createContext } from 'react';
import { observable, makeObservable } from 'mobx';

import { fetchCamp } from 'apis/api';
import { ICampDetail } from 'types/Camp';

class CampStore {
  @observable campDetail: ICampDetail | null = null;

  constructor() {
    makeObservable(this);
  }

  fetchCampById = async (id: number) => {
    const { data } = await fetchCamp(id);
    this.campDetail = data;
    console.info(this.campDetail);
  };
}

export default createContext(new CampStore());
