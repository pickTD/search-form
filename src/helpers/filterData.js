import { get } from 'lodash';

export const filterByMultiselect = (data, name, filter) => data.reduce((acc, item) => {
  if (filter.includes(get(item, name))) {
    return [...acc, item];
  }
  return acc;
}, []);

export const filterByLimiter = (data, name, filter) => data.reduce((acc, item) => {
  if (item[name] <= filter) {
    return [...acc, item];
  }
  return acc;
}, []);

export const filterByRange = (data, name, filter) => data.reduce((acc, item) => {
  if (get(item, name) >= filter.min && get(item, name) <= filter.max) {
    return [...acc, item];
  }
  return acc;
}, []);

export const filterByBoolean = (data, name, filter) => {
  if (filter) {
    return data.filter(item => item[name] !== item.house.floors && item[name] !== 1);
  }
  return data;
};
