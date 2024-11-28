import type { StoryObj, Meta } from '@storybook/react';
import TableComponent from './TableComponent';

const meta: Meta<typeof TableComponent> = {
  title: 'ui/components/atoms/TableComponent',
  component: TableComponent,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: [],
  },
};
