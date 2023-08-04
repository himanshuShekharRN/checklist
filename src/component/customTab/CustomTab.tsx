import React, {useState} from 'react';
import {useWindowDimensions} from 'react-native';
import {TabBar, TabBarIndicator, TabView} from 'react-native-tab-view';

import {CustomIcon} from '../';
import {COLOR_MARLOW_BLUE, COLOR_NAVY_500, COLOR_RED} from '../../utils/colors';
import {FirstRoute} from './firstRoute';
import {SecondRoute} from './secondRoute';
import {styles} from './CustomTab.style';
import {OUTLINE_EXCLAMATION} from '../../utils/iconsName';
import {CustomTabProps, Routes} from './CustomTab.type';
import {ThirdRoute} from './thirdRoute';
import {FourthRoute} from './fourthRoute';
import {FifthRoute} from './fifthRoute';

export const CustomTab: React.FC<CustomTabProps> = props => {
  const {
    routes = [],
    firstRoute,
    secondRoute,
    thirdRoute,
    fourthRoute,
    fifthRoute,
  } = props;

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);

  const renderScene = ({route}: {route: Routes}) => {
    switch (route.key) {
      case 'first':
        return <FirstRoute children1={firstRoute} />;
      case 'second':
        return <SecondRoute children2={secondRoute} />;
      case 'third':
        return <ThirdRoute children3={thirdRoute} />;
      case 'fourth':
        return <FourthRoute children4={fourthRoute} />;
      case 'fifth':
        return <FifthRoute children5={fifthRoute} />;
      default:
        return null;
    }
  };

  const getTabBarIcon = props => {
    const {route} = props;

    if (route.requireAttention) {
      return (
        <CustomIcon
          isPressable={false}
          name={OUTLINE_EXCLAMATION}
          size={16}
          color={COLOR_RED}
          iconWrapperStyle={styles.iconWrapperStyle}
        />
      );
    } else {
      return null;
    }
  };

  const renderTabBar = props => (
    <TabBar
      {...props}
      scrollEnabled
      activeColor={COLOR_MARLOW_BLUE}
      inactiveColor={COLOR_NAVY_500}
      indicatorStyle={styles.indicatorStyle}
      renderIndicator={indicatorProps => {
        const width = indicatorProps?.getTabWidth(index) - 20;
        return <TabBarIndicator {...indicatorProps} width={width} />;
      }}
      renderIcon={_props => getTabBarIcon(_props)}
      style={styles.tabBar}
      tabStyle={styles.tabStyle}
      labelStyle={styles.labelStyle}
    />
  );

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={renderTabBar}
    />
  );
};
