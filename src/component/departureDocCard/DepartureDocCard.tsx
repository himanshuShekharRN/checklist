import React from 'react';
import {Text, View} from 'react-native';
import {CustomIcon} from '../';
import {COLOR_MARLOW_BLUE} from '../../utils/colors';
import {styles} from './DepartureDocCard.style';
import {
  DONE,
  FILE_FILLED,
  PENDING,
  SKIPPED_OPTIONAL,
} from '../../utils/iconsName';
import {DepartureDocCardProps} from './DepartureDocCard.type';

export const DepartureDocCard: React.FC<DepartureDocCardProps> = props => {
  const {listData, disabledTextColor} = props;
  const {
    documentName,
    nationality,
    docNumber,
    issueDate,
    expiryDate,
    documentType,
    status,
    completed,
    isSkipped,
  } = listData;

  const isOptional = documentType === 'optional';
  const isPending = status === 'pending';

  const getNameOfIcon = (isCompleted: boolean): string => {
    let iconName = FILE_FILLED;
    if (isCompleted) {
      iconName = DONE;
      if (isOptional) {
        if (isSkipped) {
          iconName = SKIPPED_OPTIONAL;
        } else {
          iconName = DONE;
        }
      }
    } else {
      if (isPending) {
        iconName = PENDING;
      }
    }
    return iconName;
  };

  return (
    <View testID="departureDocCard" style={styles.container}>
      <CustomIcon
        name={getNameOfIcon(completed)}
        size={20}
        color={COLOR_MARLOW_BLUE}
      />
      <View style={styles.documentContainer}>
        <View style={styles.document}>
          <Text style={[styles.documentText, {color: disabledTextColor}]}>
            {documentName}
          </Text>
          {isOptional && (
            <Text style={[styles.optionalText, {color: disabledTextColor}]}>
              (Optional)
            </Text>
          )}
        </View>
        <Text
          style={[
            styles.nationality,
            {color: disabledTextColor},
          ]}>{`${nationality}, ${docNumber}`}</Text>
        <View style={styles.dateContainer}>
          <Text style={[styles.dateText, {color: disabledTextColor}]}>
            Issue date: {issueDate}
          </Text>
          <Text style={[styles.dateText, {color: disabledTextColor}]}>
            Exp. date: {expiryDate}
          </Text>
        </View>
      </View>
    </View>
  );
};
