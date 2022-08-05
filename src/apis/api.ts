import axios, { AxiosResponse } from 'axios';
import { ICampType } from 'types/Camp';

export const fetchCamps = async (): Promise<AxiosResponse<any>> => {
  const response = await axios.get('/camps');
  return response.data;
};

export const fetchCampsByType = async (type: ICampType): Promise<AxiosResponse<any>> => {
  const response = await axios.get(`/camps?type=${type}`);
  return response.data;
};

export const fetchCamp = async (campId: number) => {
  const response = await axios.get(`/camps/${campId}`);
  return response.data;
};
