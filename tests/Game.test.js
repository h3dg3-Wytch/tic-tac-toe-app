import React from 'react';
import renderer from 'react-test-renderer';


import RejectionButton from '../components/RejectionButton';

describe('<Game />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<RejectionButton />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree.children.length).toBe(1);
  });

});