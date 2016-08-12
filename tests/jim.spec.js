import React from 'react';
import expect from 'expect';
import expectJSX from 'expect-jsx';

expect.extend(expectJSX);

class TestComponent extends React.Component ({


  describe('change password', () => {
    it('should have new passwords that are the same', () => {
      expect(newPassword).to.be(updatedPassword);

    })
    it('should update passwords that are not equal', () => {
      expect(currentPassword).not.to.equal(inputPassword);
    })

    it('should not be empty', () => {
      expect([1,2,3]).to.not.be.empty();
  })
});
