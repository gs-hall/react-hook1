import axios from 'axios';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function getList() {
  await sleep(1000);
  const response = await axios.get(process.env.REACT_APP_USERS_URL);
  return response;
};

export async function getItem(itemID) {
  if (itemID === undefined) {return null};
  await sleep(1000);
  const response = await axios.get(process.env.REACT_APP_USER_BASE_URL+itemID+'.json');
  return response;
};