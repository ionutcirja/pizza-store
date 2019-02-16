// @flow
import React from 'react';
import FormField from '../../../forms/components/form-field';
import { SizesWrapper } from '../../style';

type Props = {
  options: Array<string>,
};

const Sizes = ({ options }: Props) => (
  <SizesWrapper>
    <FormField
      name="size"
      type="select"
      label="Please select your desired size"
      placeholder="Select pizza size"
      options={options}
    />
  </SizesWrapper>
);

export default Sizes;
