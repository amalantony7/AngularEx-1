import { StringRevPipe } from './string-rev.pipe';

describe('StringRevPipe', () => {
  it('create an instance', () => {
    const pipe = new StringRevPipe();
    expect(pipe).toBeTruthy();
  });
});
