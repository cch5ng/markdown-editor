//app/components/Editor.jsx

import React from 'react';

//export breaks if I try to put everything into {}
//also breaks if I try to put in multiple divs

export default class Editor extends React.Component {
//export default () => {

	constructor(props) {
		super(props);
		this.state = {content: props.initialContent};
		/*this.setState = this.setState.bind(this);*/
	}

	// getInitialState() {
	// 	return {value: 'Hello!'};
	// }

	handleChange(event) {
		console.log('value: ' + event.target.value);
		this.setState({content: event.target.value});
		//console.log({this.state.content});
	}

	render() {
		return (
			<div className="col-xs-6 col-sm-6">
				{/* had to bind to this in the onChange call to handleChange() */}
				<textarea cols="70" rows="25" className="editor" value={this.state.content} onChange={this.handleChange.bind(this)}></textarea>
			</div>
		);
	}

};

Editor.propTypes = { initialContent: React.PropTypes.string };
Editor.defaultProps = { initialContent: '# Heading1 ## Heading2' };
