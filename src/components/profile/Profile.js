import { useDispatch, useSelector } from 'react-redux'

import styles from './Profile.css'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { changeIsOnline } from '../../actions/profile'
import { profileSelector } from '../../selectors/profile'



function Profile () {
	const dispatch = useDispatch()
    const { name, isOnline } = useSelector(profileSelector)

	const handleIsOnlineChange = (event) => {
        dispatch(changeIsOnline(event.target.checked))
    }



	return (
		<div className="profile">
			<h1>Profile</h1>
			<span>{ name }</span>
			{
				isOnline ? <sup>Online</sup> : ''
			}
			<br />
			<FormControlLabel
                control={
                    <Checkbox
                        checked={isOnline}
                        onChange={handleIsOnlineChange}
                        name="checkedB"
                        color="primary"
                    />
                }
                label={<p>Change online</p>}
            />
			
		</div>
	)
}

export default Profile;