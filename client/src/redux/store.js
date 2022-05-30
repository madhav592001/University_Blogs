import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { allBlogsReducer, blogReducer, postBlogReducer,deleteBlogReducer, updateBlogReducer } from './reducers/blogsReducer';
import { allCategoriesReducer } from './reducers/categoriesReducer';
import { loginReducer, registerReducer,  } from './reducers/authReducer';


const reducer = combineReducers({
    allBlogs:allBlogsReducer,
    blog:blogReducer,
    allCategories:allCategoriesReducer,
    register:registerReducer,
    login:loginReducer,
    postBlog:postBlogReducer,
    deleteBlog:deleteBlogReducer,
    updateBlog:updateBlogReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;