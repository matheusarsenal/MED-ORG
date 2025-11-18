import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

Parse.setAsyncStorage(AsyncStorage);

Parse.initialize("YOUR_APPLICATION_ID", "c8szDPOfdGwg6dTxdy2UztQSOfaU2P3anUNvgcWR");
Parse.serverURL = 'https://parseapi.back4app.com/';

export default Parse;