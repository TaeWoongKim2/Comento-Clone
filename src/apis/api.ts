import axios from 'axios';
import { ICampType } from 'types/Camp';

const API_SERVER_URL = 'https://caffein-server.herokuapp.com/api';

export const fetchCamps = async () => {
  const { data } = await axios.get(`${API_SERVER_URL}/camps`);
  return data;
};

export const fetchCampsByType = async (type: ICampType) => {
  const { data } = await axios.get(`${API_SERVER_URL}/camps?type=${type}`);
  return data;
};

export const fetchCamp = async (campId: number) => {
  const { data } = await axios.get(`${API_SERVER_URL}/camps/${campId}`);
  return data;
};

export const fetchCommunites = async () => {
  const { data } = await axios.get(`${API_SERVER_URL}/communities`);
  return data;
};
