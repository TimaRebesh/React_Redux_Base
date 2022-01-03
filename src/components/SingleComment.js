import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateComment, deleteComment } from '../redux/actions'

export default function SingleComment(props) {

    const { text, id } = props.data;
    const [commentText, setCommentText] = useState(text);
    const dispatch = useDispatch();

    const input = (e) => setCommentText(e.target.value);

    const submit = (e) => {
        e.preventDefault();
        dispatch(updateComment(commentText, id));
    }

    const remove = () => dispatch(deleteComment(id));

    return (
        <form className='comments-item' onSubmit={submit}>
            <div className='comments-item-delete' onClick={remove}>&times;</div>
            <input type='text' value={commentText} onChange={input} />
            <input type='submit' hidden />
        </form>
    )
}
