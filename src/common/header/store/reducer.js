import * as constants from './constants';
import {fromJS} from 'immutable';

const defaultState = fromJS({
  focused: false,
  list: [],   //immutable数据类型
  mouseIn: false,
  page: 1,
  totalPage: 1
});

export default (state = defaultState, action) => {
  switch(action.type){
    case constants.SEARCH_FOCUS:    //immutable对象的set方法，会结合之前immutable对象的值   //和设置的值，返回一个全新的对象
      return state.set('focused', true);
    case constants.SEARCH_BLUR:
      return  state.set('focused', false);
    case constants.CHANGE_LIST:
      return state.merge({  //merge相当于多个set，可以同时改变多个值
        list: action.data,
        totalPage: action.totalPage
      })
    case constants.MOUSE_ENTER:
      return  state.set('mouseIn', true);
    case constants.MOUSE_LEAVE:
      return  state.set('mouseIn', false);
    case constants.CHANGE_PAGE:
      return  state.set('page', action.page);
    default:
      return state;
    }

}
