import {useSelector} from 'react-redux';

export const usePersonalChecklistData = () => {
  const {individualChecklistData} = useSelector(
    state => state.checkListReducer,
  );

  const personalCompletedChecklist = individualChecklistData?.filter(
    data => data.completed === true,
  );

  const personalIncompleteChecklist = individualChecklistData?.filter(
    data => data.completed === false,
  );

  return [personalCompletedChecklist, personalIncompleteChecklist];
};
