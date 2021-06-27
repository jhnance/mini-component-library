import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

function Select({ label, value, onChange, children }) {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <>
      <Wrapper label={label}>
        <FlexWrapper>
          {displayedValue}
          <Icon id="chevron-down" className="leftPadding" />
          <HiddenSelect value={value} onChange={onChange}>
            {children}
          </HiddenSelect>
        </FlexWrapper>
      </Wrapper>
    </>
  );
}

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;

  .leftPadding {
    padding-left: 15px;
  }
`;

const HiddenSelect = styled.select`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  opacity: 0;
`;

const Wrapper = styled.div`
  width: max-content;
  height: 43px;
  padding: 12px 16px;
  background-color: ${COLORS.transparentGray15};
  border: none;
  border-radius: 8px;
  font-size: 16px;
  color: ${COLORS.gray700};
  position: relative;
`;

export default Select;
