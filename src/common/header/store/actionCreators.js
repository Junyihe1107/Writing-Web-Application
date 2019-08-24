import * as constants from './constants';
import {fromJS} from 'immutable';
import axios from 'axios';

export const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data),    //因为初始化的list也是immutable，要给它赋值也需要fromJS用immutable
  totalPage: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
})

export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
})

export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
})

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
})

export const changePage = (page) => ({
  type: constants.CHANGE_PAGE,
  page
})



export const getList = () => {    //返回的是一个函数，获取接口的数据
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) =>{
    const data = res.data;
    const action = changeList(data.data);
    dispatch(action);

    }).catch(() => {
      console.log('error');
    })
  }
};
