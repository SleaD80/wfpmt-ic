import PayerInfo from '../components/PayerInfo';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'wfpmt-ic/PayerInfo',
  component: PayerInfo,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // tags: ['autodocs'],
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = {
  args: {
  },
};

export const Values = {
  args: {
    number: 2,
    date: '03.07.2024',
    name: 'Шигорина Наталья Николаевна',
    account: '00000000000000000000',
    inn: '00334052',
    amount: '0-00',
    address: 'г. Москва, ул. Дмитрия Ульянова 158/1',
    fee: 'OUR'
  },
};
