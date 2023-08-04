import {useSelector} from 'react-redux';

export const useChecklistCompletionStatus = () => {
  let progressStatus = 0;
  const {departureCheckList} = useSelector(
    state => state.departureCheckListReducer,
  );

  const totalChecklistAvailable = departureCheckList?.length;
  const completedChecklist = departureCheckList?.filter(
    data => data.completed === true,
  )?.length;

  progressStatus = +Math.ceil(
    (completedChecklist / totalChecklistAvailable) * 100,
  ).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  return [progressStatus, completedChecklist];
};
