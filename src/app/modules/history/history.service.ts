import { SalesHistory } from './history.model';

// get all sales history
const getSalesHistory = async () => {
  const result = await SalesHistory.find();

  return result;
};

export const historyServices = {
  getSalesHistory,
};
