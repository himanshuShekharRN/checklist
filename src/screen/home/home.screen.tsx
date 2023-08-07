import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, SafeAreaView} from 'react-native';
import {CustomIcon} from '../../component';
import {RIGHT_ANGLE_BRACKET} from '../../utils/iconsName';
import {COLOR_MARLOW_BLUE} from '../../utils/colors';
import {styles} from './Home.style';

export const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        testID="homeBtn"
        onPress={() => navigation.navigate('CheckList')}>
        <CustomIcon
          name={RIGHT_ANGLE_BRACKET}
          size={380}
          color={COLOR_MARLOW_BLUE}
        />
      </Pressable>
    </SafeAreaView>
  );
};
