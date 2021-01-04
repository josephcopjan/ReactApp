import React from 'react';
import { getState } from 'redux';
import AddBook from '../../actions/AddBook';
import DeleteBook from '../../actions/DeleteBook';
import EditBook from '../../actions/EditBook';
import BookCard from  '../presentationals/BookCard';

import { Link} from "react-router-dom";
import AppRoutes from '../../src/AppRoutes';
//import '../../styles/main.css';

//Provider/Container React Component
class Books extends React.Component {
  dispatchAction (input) {
    switch (input) {
      case "TRASH":
        this.props.store.dispatch(DeleteBook());
        break;
      case "PLUS":
        this.props.store.dispatch(AddBook());
        break;
      case "PENCIL":
        this.props.store.dispatch(EditBook());
        break;
    }
  }

  componentWillMount() {
    this.props.store.subscribe(this.forceUpdate.bind(this));
  }

  render() {
    const stateProps = this.props.store.getState();
    const bookItems = stateProps.books.map((book) =>
      <BookCard
        key = { book }
        stateProps = { stateProps }
        dispatchAction = {this.dispatchAction.bind(this)}
      />
    );
    return (
    <div>

    <footer class="container-fluid text-center">
      <p>Footer Text</p>
    </footer>

      <div className="books-container">
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/category">Category</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
        <AppRoutes/>
        {bookItems}
      </div>
      </div>
    )
  }
}


export default Books;

