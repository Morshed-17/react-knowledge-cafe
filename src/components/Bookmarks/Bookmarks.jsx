import PropTypes from "prop-types";
import Bookmark from "./Bookmark";
const Bookmarks = ({bookMarks, readingTime}) => {
    return (
        <div className="md:w-1/3 ">
        <div className="bg-gray-100 rounded-lg p-6 border-sky-200 border-2 mb-6">
          <h3 className="text-2xl text-blue-900 font-bold text-center">Spent time on read: {readingTime}</h3>
        </div>
         <div className="bg-gray-100 rounded-lg p-6">
         <h2 className="text-xl font-bold pb-5">Bookmarked Blogs: {bookMarks.length}</h2>  
          <ul>
            {
              bookMarks.map((bookMark, idx) => <Bookmark key={idx} bookmark={bookMark}></Bookmark>)
            }
          </ul>
         </div>
        </div>
    );
};

Bookmarks.propTypes= {
  bookMarks: PropTypes.array,
  readingTime: PropTypes.number
  
}
export default Bookmarks;