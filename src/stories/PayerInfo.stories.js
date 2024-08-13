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
    name: {value: 'Шигорина Наталья Николаевна'},
    account: {value: '00000000000000000000'},
    inn: {value: '00334052', "status": "ERROR", "message": "Некорректное значение"},
    amount: {value: '0-00'},
    address: {value: 'г. Москва, ул. Дмитрия Ульянова 158/1'},
    fee: 'OUR',
  },
};

export const TooltipStyle = {
  args: {
    ...TestData.args,
    warningStyle: 'tooltip',
  },
}

const Template = (args) => <PayerInfo {...args} />;
export const PaymentData = Template.bind({});
PaymentData.decorators = [(Story) => <DataProvider><Story/></DataProvider>];