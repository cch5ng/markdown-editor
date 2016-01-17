//app/components/App.jsx

import React from 'react';
// import Editor from './Editor.jsx';
// import Preview from './Preview.jsx';
var marked = require('marked');

//TODO see if I can 
export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {content: props.initialContent, markdown: props.initialMd};
	}

	handleChange(event) {
		var md = marked(event.target.value);
		this.setState({content: event.target.value, markdown: md});
		$('#preview_iframe').contents().find('html').html(this.state.markdown);
	}

	render() {

		return (
			<div className="container">
				<div className="row gap-medium"></div>
				<div className="row">
					<div className="col-xs-6 col-sm-6">
						<p className="h2">Markdown Editor <span className="link"><a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="_blank">(cheatsheet)</a></span></p>
						{/* had to bind to this in the onChange call to handleChange() */}
						<textarea cols="70" rows="25" className="editor" value={this.state.content} onChange={this.handleChange.bind(this)}></textarea>
					</div>

					<div className="col-xs-6 col-sm-6">
						<h2>Preview</h2>
						<iframe id="preview_iframe" height="505" seamless="true">
						</iframe>
					</div>

				</div>
			</div>
		);
	}
}

var initMarkdown = marked('# Heading1');
console.log('initMarkdown: ' + initMarkdown);
App.propTypes = { initialContent: React.PropTypes.string };
App.defaultProps = { initialContent: '', initialMd: ''};