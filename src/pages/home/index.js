import React, {PureComponent} from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {BackTop} from './style';

import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style';

class Home extends PureComponent{
  handleScrollTop(){
    window.scrollTo(0, 0);
  }

  render(){
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className = 'banner-img' alt = '' src = "//upload.jianshu.io/admin_banners/web_images/4686/b0c8770725de15714a4cb894f0ecdbc16f216008.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {this.props.showScroll ?  <BackTop onClick = {this.handleScrollTop}>顶部</BackTop> : null}
      </HomeWrapper>
    )
  }


  componentDidMount(){
    this.props.changeHomeData();
    this.bindEvents();
  }


  componentWillUnmount(){
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }


  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
  changeHomeData(){
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  },

  changeScrollTopShow(){
    if(document.documentElement.scrollTop > 100){
      const action = actionCreators.toggleTopShow(true);
      dispatch(action);
    }
    else{
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
});

export default connect(mapState, mapDispatch)(Home);
