import { combineReducers } from'redux-immutable';
import { reducer as headerReducer } from '../components/header/store';
const reducer = combineReducers({ // store数据仓库
    header: headerReducer,
});
export default reducer;
