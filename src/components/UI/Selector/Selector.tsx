import React, { useState } from 'react';
import type { SelectorProps } from 'types/types';
import {
  SortButton,
  SortContainer,
  SortDropdown,
  SortLabel,
  SortOption,
  SortOptions,
} from './Selector.styles';

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
