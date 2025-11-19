import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PARSE_APP_ID, PARSE_JS_KEY, PARSE_URL } from '@env';

Parse.setAsyncStorage(AsyncStorage);

Parse.initialize(PARSE_APP_ID, PARSE_JS_KEY);
Parse.serverURL = PARSE_URL;

export default Parse;