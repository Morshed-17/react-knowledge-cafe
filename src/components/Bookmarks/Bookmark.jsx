import PropTypes from 'prop-types'
const Bookmark = ({bookmark}) => {
    const {title} = bookmark
  return (
    <div className='bg-white p-6 rounded-lg mb-6 shadow-slate-200 shadow-md'>
        <h3 className='text-lg'>{title}</h3>
    </div>
  )
}

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark