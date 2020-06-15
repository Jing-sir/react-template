import * as constsnts from './constants'
import {fromJS} from 'immutable'
const defaultState = fromJS({
    app: 'Hello World',
});
//reducer数据仓库
export default (state = defaultState ,action) => {
    switch (action.type) {
        case constsnts.SEARCH_FOCUS:
            return state.set('focused', true);
        case constsnts.SEARCH_BLUR:
            return state.set('focused', false);
        case constsnts.CHANGE_LIST:
            return state.merge({
                list: action.data,
                totalPage: action.totalPage});
        case constsnts.MOUSE_ENTER:
            return state.set('mouseIn', true);
        case constsnts.MOUSE_LEAVE:
            return state.set('mouseIn', false);
        case constsnts.CHANGE_PAGE:
            return state.set('page', action.page);
        default:
            return state;
    }
}
