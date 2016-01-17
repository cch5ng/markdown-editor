//app/components/Preview.jsx

import React from 'react';

export default class Editor extends React.Component {
//export default () => {

	render() {
		return (
			<div className="col-xs-6 col-sm-6">preview {this.state.content}</div>
		);
	}
}