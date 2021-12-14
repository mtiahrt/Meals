import React from 'react';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';

const FavoritesScreen = (props) => {
  return (
    <MealList
      navigation={props.navigation}
      listData={MEALS.filter((meal) => meal.id === 'm5' || meal.id === 'm6')}
    />
  );
};

FavoritesScreen.navigationOptions = {
  headerTitle: 'My Favorites',
};

export default FavoritesScreen;
