import PropTypes from 'prop-types'

const Header = ({title}) => {
    return (
        <div>
            <header>
                <h1>First Tasks {title}</h1>
            </header>
        </div>
    )
}

Header.defaultProps = {
    title : "First practis on react"
}
Header.propTypes = {
    title : PropTypes.string.isRequired
}

export default Header
