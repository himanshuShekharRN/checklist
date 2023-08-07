import {useSelector} from 'react-redux';
import {RootState} from '../../store';

export const usePersonalChecklistData = () => {
  const {individualChecklistData} = useSelector(
    (state: RootState) => state.checkListReducer,
  );

  const personalCompletedChecklist = individualChecklistData?.filter(
    data => data.completed === true,
  );

  const personalIncompleteChecklist = individualChecklistData?.filter(
    data => data.completed === false,
  );

  return [personalCompletedChecklist, personalIncompleteChecklist];
};
