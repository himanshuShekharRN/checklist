import {DATA} from '../../utils/mockData';

export const usePreDepartureListData = () => {
  const allPreDepartureDataList = DATA;
  const completedPreDepartureDataList = DATA.filter(
    data => data.completed === true,
  );

  return [allPreDepartureDataList, completedPreDepartureDataList];
};
