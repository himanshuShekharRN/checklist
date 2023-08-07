import React, {useCallback, useEffect, useRef, useState} from 'react';
import {View, Text, FlatList, Alert, Modal, Animated} from 'react-native';

import {
  CustomIcon,
  DepartureDocCard,
  Space,
  SwipableActionButton,
  SwipableCards,
} from '../';
import {
  COLOR_GREEN_600,
  COLOR_GREY_600,
  COLOR_NAVY_800,
  COLOR_WHITE,
} from '../../utils/colors';
import {styles} from './NationalChecklist.style';
import {
  CHECK_DONE,
  DONE,
  SKIPPED_OPTIONAL,
  UNCHECK,
} from '../../utils/iconsName';
import {
  useChecklistCompletionStatus,
  usePreDepartureListData,
} from '../../hooks';
import {useDispatch} from 'react-redux';
import {
  checklistSubmitted,
  checklistUnchecked,
} from '../../store/reducer/departureChecklist';
import {ALERT_MSG, SKIPPED} from '../../utils/constant';
import {NationalChecklistProps} from './NationalChecklist.type';

export const NationalChecklist: React.FC<NationalChecklistProps> = props => {
  const {testID} = props;

  const [completedChecklist] = useChecklistCompletionStatus();
  const [inCompletePreDepartureList, completedPreDepartureDataList] =
    usePreDepartureListData();

  const dispatch = useDispatch();
  const rotationValue = useRef(new Animated.Value(0)).current;
  const [modalVisible, setModalVisible] = useState(false);

  const resetRotation = useCallback(() => {
    Animated.timing(rotationValue, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    }).start(({finished}) => {
      if (finished) {
        setModalVisible(false);
      }
    });
  }, [rotationValue]);

  const startRotationAnimation = useCallback(() => {
    Animated.timing(rotationValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(({finished}) => {
      if (finished) {
        setModalVisible(false);
        resetRotation();
      }
    });
  }, [resetRotation, rotationValue]);

  const rotate = rotationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['280deg', '360deg'],
  });

  const handleOnSubmit = items => {
    const submitTheChecklist = () => {
      setModalVisible(true);
      dispatch(checklistSubmitted({items}));
    };

    Alert.alert('', ALERT_MSG, [
      {
        text: 'No',
        onPress: () => {},
      },
      {text: 'Yes', onPress: submitTheChecklist},
    ]);
  };

  useEffect(() => {
    if (modalVisible) {
      startRotationAnimation();
    }
  }, [modalVisible, startRotationAnimation]);

  const handleOnSkip = items =>
    dispatch(checklistSubmitted({items, key: SKIPPED}));
  const handleOnDone = items =>
    dispatch(checklistSubmitted({items, key: DONE}));
  const handleOnUncheck = items => dispatch(checklistUnchecked(items));

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
            data={completedPreDepartureDataList}
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
    <View testID={testID}>
      <FlatList
        data={inCompletePreDepartureList}
        bounces={false}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={getHeaderComponent()}
        renderItem={renderItem}
        ListFooterComponent={getFooterComponent()}
        contentContainerStyle={styles.containerStyle}
      />
      <Modal animationType="fade" transparent={false} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <Animated.View style={{transform: [{rotate}]}}>
            <CustomIcon name={CHECK_DONE} size={70} color={COLOR_WHITE} />
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
};
