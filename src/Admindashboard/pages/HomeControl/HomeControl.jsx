import React from 'react';
import LogoControl from '../../components/LogoControl/LogoControl';
import SliderControl from '../../components/SliderControl/SliderControl';
import FavAndTitleControl from '../../components/FavAndTitleControl/FavAndTitleControl';

const HomeControl = () => {
  return (
    <div>
      <LogoControl></LogoControl>
      <SliderControl></SliderControl>
      <FavAndTitleControl></FavAndTitleControl>
    </div>
  );
};

export default HomeControl;