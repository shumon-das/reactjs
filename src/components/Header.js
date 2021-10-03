import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router'


const Header = ({title, onAdd, showAdd}) => {
    const location = useLocation()
    const onClickFunc = () => {
        console.log("button Clicked")
    }
    return (
        <div className='headerPage'>
            <header className="header">
                <h1>First Tasks {title}</h1>
                  {location.pathname === "/" && <Button color={showAdd ? 'red' : "green"} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>}
                  <Button color="blue" text="Remove" onClick={onClickFunc}/>
                  <Button color="red" text="Subcribe" onClick={onClickFunc}/>
            </header>
        </div>
    )
}

Header.defaultProps = {
    title : "On React"
}
Header.propTypes = {
    title : PropTypes.string.isRequired
}

export default Header
