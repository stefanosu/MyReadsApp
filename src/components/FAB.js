import React, {Component} from 'react';

export default class FAB extends Component {
	render(){
		return( <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>)
	}
}	