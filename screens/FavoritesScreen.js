import React from 'react';
import { Item, HeaderButtons } from 'react-navigation-header-buttons';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
const FavoritesScreen = props => {
  return (
    <MealList
      navigation={props.navigation}
      listData={MEALS.filter(meal => meal.id === 'm5' || meal.id === 'm6')}
    />
  );
};

FavoritesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'My Favorites',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default FavoritesScreen;
