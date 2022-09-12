import React from 'react';
import { BordersType } from '../../types';

const BordersInfo: React.FC<BordersType> = ({ borders }) => {
  return (
    <div className="single__borders">
      <p className="single__label">Borders:</p>
      <div className="single__countries">
        {borders.map((border) => (
          <p key={border} className="single__border">
            {border}
          </p>
        ))}
      </div>
    </div>
  );
};

export default BordersInfo;
