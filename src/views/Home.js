import React, {component} from 'react'; 
import Shelf from './components/Shelf';
import FAB from './components/FAB';

event default class Home extends component{
	render(){
		return(<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Shelf/>
            </div>
           <FAB/>
          </div>)
	}
}