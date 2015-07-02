/**
 * @author Dimitri Reifschneider [dimitri.reifschneider@maxdome.de]
 * Date: 22/06/15
 */

'use strict';

var data = [
    { author: "Pete Hunt", text: "This is one comment" },
    { author: "Jordan Walke", text: "This is another comment" }
];

/**
 * Comment box
 */
var CommentBox = React.createClass({
    displayName: 'CommentBox',
    handleCommentSubmit: function (comment) {
        this.setState({ data: this.props.data.push(comment) });
    },
    getInitialState: function() {
        return { data: [] };
    },
    render: function () {
        return (
            <div className="comment-box">
                <h1>Comments</h1>
                <CommentList data={this.props.data}></CommentList>
                <CommentForm onCommentSubmit={this.handleCommentSubmit}></CommentForm>
            </div>
        );
    }
});

/**
 * Comment list
 */
var CommentList = React.createClass({
        render: function () {
            var comments = this.props.data.map(function (comment) {
                return (
                    <Comment author={comment.author}>
                        {comment.text}
                    </Comment>
                );
            });
            return (
                <div className="comment-list">
                    {comments}
                </div>
            );
        }
});

/**
 * Comment form
 */
var CommentForm = React.createClass({
    handleSubmit: function (e) {
        e.preventDefault();

        var author = React.findDOMNode(this.refs.author).value.trim();
        var text = React.findDOMNode(this.refs.text).value.trim();

        if (!text || !author) {
            return;
        }

        this.props.onCommentSubmit({author: author, text: text});

        React.findDOMNode(this.refs.author).value = '';
        React.findDOMNode(this.refs.text).value = '';
    },
    render: function () {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Your Name" ref="author" />
                <input type="text" placeholder="Say something" ref="text" />
                <input type="submit" value="Post" />
            </form>
        );
    }
});

/**
 * Comment
 */
var Comment = React.createClass({
    render: function () {
        return (
            <div className="comment">
                <h2>{this.props.author}</h2>
                <span>{this.props.children.toString()}</span>
            </div>
        );
    }
});

/**
 * Render DOM node
 */
React.render(
    <CommentBox data={data} />,
    document.getElementById('content')
);