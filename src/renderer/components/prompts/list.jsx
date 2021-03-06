'use strict';

var React = require('react');
var mui = require('material-ui');

var PromptMixin = require('./prompt-mixin');

var RadioButton = mui.RadioButton;


var ListPrompt = React.createClass({

  mixins: [PromptMixin],

  getInitialState: function () {
    return {
      answer: this.props.defaultAnswer
    };
  },

  _getKeyName: function (name) {
    return 'list-item-' + name;
  },

  _onClick: function (value) {
    this.setState({
      answer: this.props.choices.findIndex(function (item) {
        var itemValue = item.value || item;
        return itemValue === value;
      }, null)
    });
  },

  render: function () {

    var choices = this.props.choices.map(function (choice, index) {

      var name = choice.name || choice;
      var key = this._getKeyName(name);

      return (
        <RadioButton
          key={key}
          name={this.props.name}
          value={name}
          label={name}
          onClick={this._onClick.bind(this, value)}
          defaultChecked={this.state.answer === index}
          className="list-prompt-list-item"
        />
      );
    }, this);

    return (
      <div className="list-prompt fieldset">
        <label style={{ background: this.props.color }}>
          {this.props.message}
        </label>
        <div className="list-prompt-list">
          {choices}
        </div>
      </div>
    );
  }

});


module.exports = ListPrompt;

