import React from "react";
import './style.scss';
import AppLayout from "../../layouts/AppLayout";
import Button from "../Button/ui/Button";

import iconPrimary from '../../assets/icons/icon-primary.svg';
import iconSecondary from '../../assets/icons/icon-primary.svg';
import iconDisabled from '../../assets/icons/icon-disabled.svg';

const sizes = ['L', 'M', 'S'];
const states = ['default', 'hover', 'press', 'focus', 'disabled'];
const types = ['primary', 'secondary', 'danger'];

const App = () => {
  return (
    <AppLayout>
      <div className="buttons-grid">
        {sizes.map(size => (
          <React.Fragment key={size}>
            {states.map(state => (
              <React.Fragment key={state}>
                {types.map(type => (
                  <Button
                    key={`${size}-${state}-${type}`}
                    type={type}
                    size={size}
                    state={state}
                    iconLeft={state === 'disabled' ? iconDisabled : iconPrimary}
                    iconRight={iconSecondary}
                  />
                ))}
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </div>
    </AppLayout>
  );
};

export default App;
