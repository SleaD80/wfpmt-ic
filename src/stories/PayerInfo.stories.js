import PayerInfo from '../components/PayerInfo';
import DataProvider from './decorators/DataProvider';

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
  args: {},
};

export const TestData = {
  args: {
    payer_name: 'Шигорина Наталья Николаевна',
    payer_account: '00000000000000000000',
    payer_inn: '00334052',
    payer_amount: '0-00',
    payer_address: 'г. Москва, ул. Дмитрия Ульянова 158/1',
    fee: 'OUR',
  },
};

const Template = (args) => <PayerInfo {...args} />;
export const PaymentData = Template.bind({});
PaymentData.decorators = [(Story) => <DataProvider><Story/></DataProvider>];