/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

/**
 * Accessibility requirements:
 *
 * 1. Should specify these attribute values indicating
 * the actual progress of the bar.
 *    a. `aria-valuenow`
 *    b. `aria-valuemin`
 *    c. `aria-valuemax`
 *
 * 2. Might need to allow for an `aria-describedby`? I'm
 * not sure whether that is needed on the progress bar itself
 * or as an attribute on the part of the page whose loading is
 * described by the progress bar.
 *
 * So it's the difference between:
 *    1. <progress id="progressBar" aria-describedby="pageRegion"></progress>
 *    2. <section id="pageRegion" aria-describedby="progressBar"></section>
 */
function ProgressBar({ value, size }) {
  let ProgressBarVariant;
  switch (size) {
    case 'small':
      ProgressBarVariant = SmallProgressBar;
      break;
    case 'medium':
      ProgressBarVariant = MediumProgressBar;
      break;
    case 'large':
      ProgressBarVariant = LargeProgressBar;
      break;
    default:
      ProgressBarVariant = SmallProgressBar;
  }

  return (
    <ProgressBarVariant
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={value}
      value={value}
      max="100"
    >
      {`${value}%`}
    </ProgressBarVariant>
  );
}

const BaseProgressBar = styled.progress`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 4px;
  /* This allows the 1% and 99% values to not flow out of the progress bar container at the small and medium sizes */
  overflow: hidden;

  &[value]::-webkit-progress-bar {
    background: transparent;
  }

  &[value]::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-radius: ${(p) => (p.value === 100 ? '4px' : '4px 0 0 4px')};
  }
`;

const SmallProgressBar = styled(BaseProgressBar)`
  height: 8px;
`;

const MediumProgressBar = styled(BaseProgressBar)`
  height: 12px;
`;

const LargeProgressBar = styled(BaseProgressBar)`
  border-radius: 8px;
  padding: 4px;
  height: 24px;
`;

export default ProgressBar;
