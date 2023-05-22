import { InfinitySpin } from 'react-loader-spinner';
import { Component } from 'react';

export class Loader extends Component {
  render() {
    return (
      <>
        <InfinitySpin width="200" color="#3f51b5" />
      </>
    );
  }
}
