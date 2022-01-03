import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleComment from "./SingleComment";
import { newComment } from '../redux/actions';
import uniqid from 'uniqid';

export default function Comments(props) {

    const [text, setText] = useState('');
    const comments = useSelector(state => state.commentsReducer.comments);
    const dispatch = useDispatch();

    const input = (e) => setText(e.target.value);

    const submit = (e) => {
        e.preventDefault();
        dispatch(newComment(text, uniqid()));
        setText('');
    }

    return (
        <div className='card-comments'>
            <form className='comments-item-create' onSubmit={submit}>
                <input type='text' value={text} onChange={input} />
                <input type='submit' hidden />
            </form>
            {comments.length > 0 &&
                comments.map(data => <SingleComment key={data.id} data={data}/>)}

        </div>
    )
}
