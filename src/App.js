import React from 'react';
import Book from './Book';
import Modal from './Modal';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [
        { image: 'https://img-gorod.ru/26/056/2605621_detail.jpg', name: 'Скотный двор', author: 'Джордж Оруэлл', year: 1945 },
        { image: 'https://img-gorod.ru/25/025/2502539_detail.jpg', name: 'Идиот', author: 'Фёдор Михайлович Достоевский', year: 1869 },
        { image: 'https://img-gorod.ru/25/392/2539286_detail.jpg', name: 'Ярмарка тщеславия', author: 'Уильям Мейкпис Теккерей', year: 1848 },
        { image: 'https://img-gorod.ru/24/108/2410803_detail.jpg', name: 'Три товарища', author: 'Эрих Мария Ремарк', year: 1936 }
      ],
      image: '',
      name: '',
      author: '',
      year: 0,
      index: 0,
      showModal: false,
      addMode: false
    };

  }

  onChange = e => this.setState({
    [e.target.id]: e.target.value
  });

  handleAdd = () => this.setState({
    showModal: true,
    addMode: true
  });

  handleEdit = index => this.setState({
    showModal: true,
    index: index,
    image: this.state.books[index].image,
    name: this.state.books[index].name,
    author: this.state.books[index].author,
    year: this.state.books[index].year
  });

  handleCancel = () => this.setState({
    showModal: false,
    image: '',
    name: '',
    author: '',
    year: 0
  });

  handleSubmit = (e, index) => {
    e.preventDefault();
    if (this.state.addMode) {
      this.setState({
        books: [...this.state.books, {
        image: this.state.image,
        name: this.state.name,
        author: this.state.author,
        year: this.state.year
        }]
      });
    } else {
      this.state.books.map((book, i) => {
        if (this.state.index == i) {
          let books = this.state.books;
          books[i] = {
            image: this.state.image,
            name: this.state.name,
            author: this.state.author,
            year: this.state.year
          };
          this.setState({
            books: books
          });
        }
      })
    }
  this.handleCancel();
};

  handleDelete = index => this.setState({
    books: this.state.books.filter((book, i) => i !== index)
  });

  render() {
    return <div className='App'>
      <div>
      <button id='addBook' onClick={this.handleAdd}>Добавить книгу</button>
      </div>
      {this.state.showModal && <Modal { ...this.state } handleSubmit={this.handleSubmit} onChange={this.onChange} handleCancel={this.handleCancel}/>}
      {
        this.state.books.map((book, i) => (
      <Book key={i} { ...book } handleEdit={ () => this.handleEdit(i) } handleDelete={ () => this.handleDelete(i) }/>
    ))
    }
    </div>
  }
}

export default App;
