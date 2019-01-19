import { combineReducers } from 'redux';
import RussianReducer from './RussianReducer';
import EnglishReducer from './EnglishReducer';

export default combineReducers({
    russianLanguage: RussianReducer,
    englishLanguage: EnglishReducer
});