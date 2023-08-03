import {DATA} from '../../utils/mockData';

export const useChecklistCompletionStatus = () => {
  let progressStatus = 0;
  const totalChecklistAvailable = DATA.length;

  const completedChecklist = DATA?.filter(
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
