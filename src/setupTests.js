import 'react-render-hook';
import { connectToDevTools } from 'react-devtools-core';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

connectToDevTools();

configure({ adapter: new Adapter() });
