import React, { useState } from 'react';
import { Elastic } from 'react-burgers';

import variables from '../../styles/variables.scss';

const BurgerIcon = props => {
  const [active, setActive] = useState(!1);
  const [over, setOver] = useState(!1);
  console.log(over);
  return (
    <div className="burger-icon">
      <div className="inscription">Menu</div>
      <Elastic
        onClick={() => {
          setActive(!active);
          props.isOpen();
        }}
        onMouseEnter={() => {
          setOver(!over);
        }}
        active={active}
        width={15}
        color={variables.globalcoloraccent}
        lineHeight={2}
        lineSpacing={2}
        border={1}
        borderRadius={50}
        padding="10px"
      />
    </div>
  );
};

export default BurgerIcon;
