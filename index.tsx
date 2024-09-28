import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Child from '../components/Child';

const Home: React.FC = () => {
    return (
        <div>
            <Navbar />
            <h1>Home Page</h1>
            <p>Welcome to the Home page!</p>
        
            <p>This is a child component:</p>
      <Child name="John" age={30} />
    
            <Footer />
        </div>
    );
};

export default Home;