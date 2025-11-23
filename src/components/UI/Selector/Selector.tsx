import React, { useState } from 'react';

import * as S from './styled';

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
    <S.SortContainer>
      <S.SortLabel>Sort by</S.SortLabel>
      <S.SortDropdown>
        <S.SortButton type="button" onClick={() => setOpen((prev: boolean) => !prev)}>
          {selectedLabel}
        </S.SortButton>
        <S.SortOptions open={open}>
          {options.map(option => (
            <S.SortOption
              key={option.value}
              onClick={() => handleSelect(option.value)}
              data-value={option.value}>
              {option.name}
            </S.SortOption>
          ))}
        </S.SortOptions>
      </S.SortDropdown>
    </S.SortContainer>
  );
};

export default Selector;
