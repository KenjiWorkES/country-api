import React, { useContext } from 'react';
import SingleInfo from '../components/single/SingleInfo';
import MainButton from '../components/ui/MainButton';
import { useParams } from 'react-router-dom';
import { CountryContext } from '../context/country-context';
import { CountryContextType } from '../types';

const Single: React.FC = () => {
  const params = useParams();

  const { getSingleCountry } = useContext<CountryContextType>(CountryContext);

  const country = getSingleCountry(params.countryName);

  return (
    <section className="single">
      <div className="single__controls">
        <MainButton />
      </div>
      <div className="single__content">
        <SingleInfo country={country} />
      </div>
    </section>
  );
};

export default Single;
