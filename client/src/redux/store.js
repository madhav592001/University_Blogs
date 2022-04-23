import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { allBlogsReducer, blogReducer } from './reducers/blogsReducer';
import { allCategoriesReducer } from './reducers/categoriesReducer';


const reducer = combineReducers({
    allBlogs:allBlogsReducer,
    blog:blogReducer,
    allCategories:allCategoriesReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;