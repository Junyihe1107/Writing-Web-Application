import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {WriterWrapper, RecommendItem}  from '../style';

class Writer extends PureComponent{
  render(){
    return (
      <WriterWrapper>
          作者
      </WriterWrapper>
    )
  }
}

export default Writer;
