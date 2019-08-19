import React from 'react';

function Book(props) {

        return (
            <div className="Book">
                <div className="content">
                    <div id="image">
                        <img src={props.image} alt="Обложка книги"></img>
                    </div>
                    <div id="text">
                        <div id="name">
                            <h2>{props.name}</h2>
                        </div>
                        <div id="author">
                            <p>{props.author}</p>
                        </div>
                        <div id="year">
                            <p>{props.year} г.</p>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <div>
                        <button id="edit" onClick={props.handleEdit}>Редактировать</button>
                    </div>
                    <div>
                        <button id="delete" onClick={props.handleDelete}>Удалить</button>
                    </div> 
                </div>
            </div>
        )
    }

export default Book;