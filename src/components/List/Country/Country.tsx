import React from 'react';
import { useDispatch } from 'react-redux';

import styles from '@/components/List/Country/index.scss';
import classes from '@/components/index.scss';
import dataAC from '@/redux/actionCreators/dataActionCreator';
import { CountryState, CountryType } from '@/types/types';

const Country: React.FC<CountryState> = ({ countries, selected, options }) => {
  const dispatch = useDispatch();

  const handleClick = (element: CountryType) => dispatch(dataAC.selectedAC(element));

  const getRandomArbitrary = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  return (
    <React.Fragment>
      {countries.map(element => (
        <li
          key={getRandomArbitrary(0, 1e100)}
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
          role="button"
          onKeyPress={() => null}
          tabIndex={0}
          onClick={() => handleClick(element)}
          className={classes['country-hover']}
        >
          <span className={classes['counter']}>
            {(selected === options[0][0] && element.cases) ||
              (selected === options[1][0] && element.todayCases) ||
              (selected === options[2][0] && element.todayDeaths) ||
              (selected === options[3][0] && element.deaths) ||
              (selected === options[4][0] && element.todayRecovered) ||
              (selected === options[5][0] && element.recovered)}
          </span>
          <span className={classes['country']}>{element.country}</span>
          <img
            className={styles['country-flag']}
            src={element.countryInfo.flag}
            alt={element.country}
          />
        </li>
      ))}
    </React.Fragment>
  );
};

export default Country;
