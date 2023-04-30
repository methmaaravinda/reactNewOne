import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import store from './redux/store';
import { Provider } from 'react-redux';
import HooksCakeContainer from './components/HooksCakeContainer';
import Image from './components/Image';
import NewImage from './components/newImage';
import Form from './Form';
import { useState } from "react";
import AddItems from './AddItems';
import Axioss from './axios';
import YourComponent from './Youtubeex';

function App() {
 
  return (
    <Provider store={store}>
      <div className="App">
        <Form
        Items={Items}
        handleDelete = {handleDelete}
        handleOnchange = {handleOnchange}
        />
        <AddItems/>
        <Axioss/>
        <YourComponent/>
      </div>
    </Provider>
  );
}

export default App;

/* redux toolkit query 

create store , 
base url, endpoints(builder.query)[get]=> mutation(builder.mutation)[post,put,patch,delete],
query(function)=> create the end point,
useEnd point hook creates => useNAMEQuery, useNAMEMutation,
{ data(object), isLoading(boolean), isSuccess(boolean), isError(boolean) , error(object) } => destructuring,
const [onlyfirstProperty] = useNAMEQuery/mutation Hook...... onlyfirstProperty(data) => post patch   


*/