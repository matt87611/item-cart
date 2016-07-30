var Body = React.createClass({
  getInitialState: function() {
    return { items: [] }
  },

  componentDidMount: function() {
    $.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response }) });
  },

  handleSubmit: function(item) {
     var newState = this.state.items.concat(item);
     this.setState({ items: newState });
  },

  handleDelete: function(id) {
    $.ajax({
      url: '/api/v1/items/' + id,
      type: 'DELETE',
      success:() => {
        this.removeItemClient(id);
      }
    });
  },

  removeItemClient: function(id) {
    var newItems = this.state.items.filter((item) => {
      return item.id != id;
      });
    this.setState({ items: newItems });
  },

  render: function() {
    return (
      <div>
        <NewItem handleSubmit={this.handleSubmit}/>
        <AllItems items={this.state.items} handleDelete={this.handleDelete} />
      </div>
    );
  }
});