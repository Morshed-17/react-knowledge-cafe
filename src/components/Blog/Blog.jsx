import PropTypes from "prop-types";
import { FaRegBookmark } from 'react-icons/fa';

const Blog = ({ blog ,handleBookMarks}) => {
  const {
    title,
    cover,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="border-b-2 pb-6 mb-6">
      <img className="w-full rounded-lg mb-6" src={cover} alt="" />
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center mb-6">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
            <span>{reading_time} min read</span>
            <button onClick={()=>handleBookMarks(blog)} className="text-lg text-red-600"><FaRegBookmark></FaRegBookmark></button>
        </div>
      </div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>
        {
            hashtags.map((hashtag, idx) => <span key={idx} className="mr-2">#{hashtag}</span>)
        }
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookMarks: PropTypes.func.isRequired
};
export default Blog;
