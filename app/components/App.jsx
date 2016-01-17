//app/components/App.jsx

import React from 'react';
// import Editor from './Editor.jsx';
// import Preview from './Preview.jsx';

//TODO see if I can 
export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {content: props.initialContent, markdown: props.initialMd};
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
			<div className="container">
				<div className="row gap-medium"></div>
				<div className="row">
					{/*<Editor />*/}
					<div className="col-xs-6 col-sm-6">
						{/* had to bind to this in the onChange call to handleChange() */}
						<textarea cols="70" rows="25" className="editor" value={this.state.content} onChange={this.handleChange.bind(this)}></textarea>
					</div>

					{/*<Preview />*/}
					<div className="col-xs-6 col-sm-6">preview {this.state.markdown}</div>

				</div>
			</div>
		);
	}
}

App.propTypes = { initialContent: React.PropTypes.string };
App.defaultProps = { initialContent: '# Heading1 ## Heading2', initialMd: 'initial markdown'};