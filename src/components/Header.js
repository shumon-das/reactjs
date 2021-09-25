import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title}) => {
    const onClickFunc = () => {
        console.log("button Clicked")
    }
    return (
        <div className='headerPage'>
            <header className="header">
                <h1>First Tasks {title}</h1>
                  <Button color="green" text="Add" onClick={onClickFunc}/>
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
