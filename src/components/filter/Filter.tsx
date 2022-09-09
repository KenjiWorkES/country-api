import React, { useState } from 'react';

const Filter: React.FC = () => {
  const [selected, setSelected] = useState<string>('');

  const changeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value);
  };

  return (
    <select value={selected} className="filter" onChange={changeHandler}>
      <option value="" disabled={true}>
        Filter by country
      </option>
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
};

export default Filter;
