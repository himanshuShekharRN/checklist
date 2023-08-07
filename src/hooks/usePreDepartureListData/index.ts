import {useSelector} from 'react-redux';
import {RootState} from '../../store';

export const usePreDepartureListData = () => {
  const {departureCheckList: allPreDepartureDataList} = useSelector(
    (state: RootState) => state.departureCheckListReducer,
  );

  const completedPreDepartureDataList = allPreDepartureDataList?.filter(
    data => data.completed === true,
  );

  const inCompletePreDepartureList = allPreDepartureDataList?.filter(
    data => data.completed === false,
  );

  return [inCompletePreDepartureList, completedPreDepartureDataList];
};
