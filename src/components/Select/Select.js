import React from 'react';
import styled from 'styled-components';
import VisuallyHidden from '../VisuallyHidden';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

function Select({ label, value, onChange, children }) {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <VisuallyHidden>
        <label for={label}>Choose an option:</label>
      </VisuallyHidden>
      <HiddenSelect id={label} value={value} onChange={onChange}>
        {children}
      </HiddenSelect>
      <CustomSelect>
        {displayedValue}
        <Icon id="chevron-down" className="leftPadding" />
      </CustomSelect>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const HiddenSelect = styled.select`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  opacity: 0;
`;

const CustomSelect = styled.div`
  padding: 12px 16px;
  padding-right: 12px;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  font-size: 16px;
  color: ${COLORS.gray700};
  display: flex;
  align-items: center;

  .leftPadding {
    padding-left: 15px;
  }

  ${HiddenSelect}:focus + & {
    outline: 2px solid hsl(218deg 57% 53%);
  }

  ${HiddenSelect}:hover + & {
    color: black;
  }
`;

export default Select;
