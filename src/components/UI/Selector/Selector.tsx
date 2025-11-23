import React, { useState } from 'react';
import {
  SortButton,
  SortContainer,
  SortDropdown,
  SortLabel,
  SortOption,
  SortOptions,
} from 'components/UI/Selector/Selector.styles';

export interface SelectorProps {
  options: {
    value: string;
    name: string;
  }[];
  defaultValue: string;
  onSortChange: (value: string) => void;
}

const Selector = ({ options, defaultValue, onSortChange }: SelectorProps) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string>('');
  const handleSelect = (value: string) => {
    setSelected(value);
    onSortChange(value);
    setOpen(false);
  };
  const selectedLabel = options.find(opt => opt.value === selected)?.name || defaultValue;

  return (
    <SortContainer>
      <SortLabel>Sort by</SortLabel>
      <SortDropdown>
        <SortButton type="button" onClick={() => setOpen((prev: boolean) => !prev)}>
          {selectedLabel}
        </SortButton>
        <SortOptions open={open}>
          {options.map(option => (
            <SortOption
              key={option.value}
              onClick={() => handleSelect(option.value)}
              data-value={option.value}>
              {option.name}
            </SortOption>
          ))}
        </SortOptions>
      </SortDropdown>
    </SortContainer>
  );
};

export default Selector;
