import { useDispatch, useSelector } from 'react-redux';
import { changeTitle } from '../redux/actions';

export default function Title(props) {

    const text = useSelector(state => state.titleReducer.text);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(changeTitle(e.target.value));
    }

    return (
        <div className='card-title'>
            <div className='card-title-top'>
                <input
                    type="text"
                    value={text}
                    onChange={handleChange}
                    placeholder='enter your message' />
            </div>
        </div>
    )
}
