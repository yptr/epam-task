import React from 'react';

function Modal(props) {
    return (
        <div className='Modal'>
            <form>
                <div id='modal'>
                    <div id='modal-content'>
                        <div>
                        <p>Наименование</p>
                        <input type='text' id='name' value={props.name} onChange={props.onChange} placeholder='Введите название книги' />
                        </div>
                        <div>  
                        <p>Автор</p>
                        <input type='text'  id='author' value={props.author} onChange={props.onChange} placeholder='Введите автора книги' />
                        </div>  
                        <div>
                        <p>Год выпуска</p>  
                        <input type='number' id='year' value={props.year} maxLength='4' max='2017' onChange={props.onChange} placeholder='Введите год выпуска книги' />
                        </div>
                        <div>
                        <p>Изображение</p>
                        <input type='text' id='image' value={props.image} onChange={props.onChange} placeholder='Введите ссылку на изображение' />
                        </div>
                        <div id='form-buttons'>  
                        <input type='submit' id='save' value='Сохранить' onClick={props.handleSubmit}/>
                        <input type='button' id='close' value='Отменить' onClick={props.handleCancel}/> 
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Modal;