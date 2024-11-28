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
    data: [
      {
        id: 1,
        title: 'Introduction to Programming',
        visible: true,
        updated: '2024-11-01T10:30:00Z',
      },
      {
        id: 2,
        title: 'Advanced Mathematics',
        visible: false,
        updated: '2024-10-20T15:45:00Z',
      },
      {
        id: 3,
        title: 'History of Technology',
        visible: true,
        updated: '2024-11-15T08:00:00Z',
      },
      {
        id: 4,
        title: 'Artificial Intelligence Basics',
        visible: false,
        updated: '2024-09-12T22:15:00Z',
      },
      {
        id: 5,
        title: 'Cybersecurity Fundamentals',
        visible: true,
        updated: '2024-11-24T17:30:00Z',
      },
    ],
  },
};
