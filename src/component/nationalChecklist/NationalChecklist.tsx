import React from 'react';
import {View, Text, FlatList} from 'react-native';

import {
  DepartureDocCard,
  Space,
  SwipableActionButton,
  SwipableCards,
} from '../';
import {
  COLOR_GREEN_600,
  COLOR_GREY_600,
  COLOR_NAVY_800,
} from '../../utils/colors';
import {styles} from './NationalChecklist.style';
import {DONE, SKIPPED_OPTIONAL, UNCHECK} from '../../utils/iconsName';
import {DATA} from '../../utils/mockData';
import {
  useChecklistCompletionStatus,
  usePreDepartureListData,
} from '../../hooks';

export const NationalChecklist: React.FC = () => {
  const [completedChecklist] = useChecklistCompletionStatus();
  const completedPreDepartureDataList = usePreDepartureListData();

  const handleOnSubmit = items => console.log('SUBMIT', items);
  const handleOnSkip = items => console.log('SKIP', items);
  const handleOnDone = items => console.log('DONE', items);
  const handleOnUncheck = items => console.log('UNCHECK', items);

  const getDetailsBasedOn = (_docType, _isCompleted = false) => {
    if (_isCompleted) {
      return [
        {
          fn: handleOnUncheck,
          iconName: UNCHECK,
          backgroundColor: COLOR_GREEN_600,
          iconText: 'Uncheck',
        },
      ];
    } else if (_docType === 'actionRequired') {
      return [
        {
          fn: handleOnSubmit,
          iconName: DONE,
          backgroundColor: COLOR_NAVY_800,
          iconText: 'Submitted',
        },
      ];
    } else if (_docType === 'optional') {
      return [
        {
          fn: handleOnDone,
          iconName: DONE,
          backgroundColor: COLOR_GREEN_600,
          iconText: 'Done',
        },
        {
          fn: handleOnSkip,
          iconName: SKIPPED_OPTIONAL,
          backgroundColor: COLOR_NAVY_800,
          iconText: 'Skip',
        },
      ];
    } else if (_docType === 'mandatory') {
      return [
        {
          fn: handleOnDone,
          iconName: DONE,
          backgroundColor: COLOR_GREEN_600,
          iconText: 'Done',
        },
      ];
    }
  };

  const renderRightActions = item => {
    const {completed, documentType} = item;
    const details = getDetailsBasedOn(documentType, completed);

    let firstButtonDetails = {...details[0]};
    let secondButtonDetails = {};
    if (details?.length > 1) {
      secondButtonDetails = {...details[1]};
    }

    return (
      <SwipableActionButton
        firstButtonDetails={firstButtonDetails}
        secondButtonDetails={secondButtonDetails}
        itemDetails={item}
      />
    );
  };

  const renderItem = ({item}) => {
    return (
      <SwipableCards renderRightActions={() => renderRightActions(item)}>
        <DepartureDocCard listData={item} />
      </SwipableCards>
    );
  };

  const getHeaderComponent = () => (
    <View style={styles.headerComponent}>
      <Text style={styles.headerComponentText}>
        Items should only be ticked off once the corresponding original paper
        document has been added to your Blue Pouch in preparation for departure.
      </Text>
      <Space height={20} />
      <Text style={styles.status}>Pending</Text>
    </View>
  );

  const renderCompletedItems = ({item}) => {
    return (
      <SwipableCards renderRightActions={() => renderRightActions(item)}>
        <DepartureDocCard disabledTextColor={COLOR_GREY_600} listData={item} />
      </SwipableCards>
    );
  };

  const getFooterComponent = () => {
    if (completedChecklist) {
      return (
        <>
          <View style={styles.completedSection}>
            <Text style={styles.completedText}>Completed</Text>
          </View>
          <FlatList
            data={completedPreDepartureDataList[1]}
            renderItem={renderCompletedItems}
            keyExtractor={item => item.id}
          />
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <FlatList
      data={DATA}
      bounces={false}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={getHeaderComponent()}
      renderItem={renderItem}
      ListFooterComponent={getFooterComponent()}
      contentContainerStyle={styles.containerStyle}
    />
  );
};
