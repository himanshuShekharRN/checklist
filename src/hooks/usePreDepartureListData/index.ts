import {useSelector} from 'react-redux';

export const usePreDepartureListData = () => {
  const {departureCheckList: allPreDepartureDataList} = useSelector(
    state => state.departureCheckListReducer,
  );

  const completedPreDepartureDataList = allPreDepartureDataList?.filter(
    data => data.completed === true,
  );

  const inCompletePreDepartureList = allPreDepartureDataList?.filter(
    data => data.completed === false,
  );

  return [inCompletePreDepartureList, completedPreDepartureDataList];
};
