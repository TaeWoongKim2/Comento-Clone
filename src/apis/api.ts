import axios, { AxiosResponse } from 'axios';
import { ICampType, ICamp } from 'types/Camp';

const API_SERVER_URL = 'https://caffein-server.herokuapp.com/api';

export const fetchCamps = async (): Promise<AxiosResponse<any>> => {
  const { data } = await axios.get(`${API_SERVER_URL}/camps`);
  return data;
};

export const fetchCampsByType = async (type: ICampType): Promise<AxiosResponse<ICamp[]>> => {
  const { data } = await axios.get(`${API_SERVER_URL}/camps?type=${type}`);
  return data;
};

export const fetchCamp = async (campId: number) => {
  const response = await axios.get(`${API_SERVER_URL}/camps/${campId}`);
  return response.data;
};

export const fetchCommunites = async () => {
  const response = await axios.get(`${API_SERVER_URL}/communities`);
  return response.data;
};
