import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import applications from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(applications, composeEnhancers(
    applyMiddleware(thunk)
));

export default store
