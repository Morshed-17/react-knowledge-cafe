import profilePic from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex items-center justify-between p-4 mx-4 border-b-2'>
            <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
            <img src={profilePic} alt="" />
        </div>
    );
};

export default Header;