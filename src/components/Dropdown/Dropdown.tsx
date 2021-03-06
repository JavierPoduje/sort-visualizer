import { useState } from 'react';

// Components
import Button from '../Button/Button';

// Styles
import './dropdown.scss';

type item = {
  title: string;
  onClick: (event: React.MouseEvent) => void;
};

interface IDropdown {
  title: string;
  items: item[];
  info?: string;
  disabled: boolean;
}

const Dropdown: React.FC<IDropdown> = ({
  title,
  items,
  info,
  disabled,
}: IDropdown) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className={`dropdown ${disabled ? 'disabled' : ''}`}>
      <button onClick={() => setShowOptions(!showOptions)} disabled={disabled}>
        <h3>
          {title} {info ?? <span className="info">{info}</span>}
        </h3>
      </button>
      {showOptions && (
        <ul>
          {items.map((item, idx) => (
            <li key={idx}>
              <Button
                title={item.title}
                onClick={(e) => {
                  item.onClick(e);
                  setShowOptions(!showOptions);
                }}
                disabled={disabled}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
