import profilePic from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex items-center justify-between pt-9 pb-8 border-b-2 mb-9'>
            <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
            <img src={profilePic} alt="" />
        </div>
    );
};

export default Header;