//one test each using mocha.js

import React from 'react';
import expect from 'expect';
import expectJSX from 'expect-jsx';

import ProjectNode from '../client/components/ProjectNode';

expect.extend(expectJSX);

class TestComponent extends React.Component {}

describe('expect-jsx', () => {
  it('works', () => {
    expect(<div />).toEqualJSX(<div />);
    // ok

    expect(<div a="1" b="2" />).toEqualJSX(<div />);
    // Error: Expected '<div\n  a="1"\n  b="2"\n/>' to equal '<div />'

    expect(<span />).toNotEqualJSX(<div/>);
    // ok
    const testObj = {name: "testProject", status: "pitch", costToDate: 50, estimateToComplete: 5000};


    expect(<div><ProjectNode project={testObj} /></div>).toIncludeJSX(<ProjectNode project={testObj} />);
    // ok
  });
});
