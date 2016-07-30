var AllItems = React.createClass({
  handleDelete: function(id) {
    this.props.handleDelete(id);
  },

  handleEdit: function() {

  },

  render: function() {
    var items= this.props.items.map((item) => {
      return (
        <div key={item.id}>
          <Item item={item}
            handleDelete={this.handleDelete.bind(this, item.id)}
            handleEdit={this.handleEdit}/>
        </div>
      );
    });

    return(
        <div>
          {items}
        </div>
      );
  }
});