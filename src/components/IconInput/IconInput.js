import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const inputStyles = {
  small: {
    '--height': '24px',
    '--fontSize': '14px',
    '--borderBottom': '1px',
  },

  large: {
    '--height': '36px',
    '--fontSize': '18px',
    '--borderBottom': '2px',
  },
};

function IconInput({ label, icon, width = 250, size = 'large', placeholder }) {
  const iconSize = size === 'large' ? 24 : 16;

  return (
    <Wrapper>
      <PositionedIcon id={icon} size={iconSize} />
      <VisuallyHidden>{label}</VisuallyHidden>
      <StyledInput
        placeholder={placeholder}
        width={width}
        type="text"
        style={inputStyles[size]}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: max-content;
  color: ${COLORS.gray700};

  & > input::placeholder {
    color: ${COLORS.gray500};
    font-weight: normal;
  }

  &:hover {
    color: black;
  }
`;

const PositionedIcon = styled(Icon)`
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  margin: auto;
  pointer-events: none;
`;

const StyledInput = styled.input`
  width: ${(p) => `${p.width}px`};
  height: var(--height);
  border: none;
  border-bottom: var(--borderBottom) solid black;

  font-size: var(--fontSize);
  padding-left: var(--height);
  padding-top: 3px;
  color: inherit;
  font-weight: bold;

  &:focus {
    outline-offset: 2px;
  }
`;

export default IconInput;
