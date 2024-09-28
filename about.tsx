import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutChild: React.FC<{ info: string }> = ({ info }) => {
    return <div>{info}</div>;
};

const About: React.FC = () => {
    const info = "This is the About page.";

    return (
        <div>
            <Navbar />
            <h1>About Page</h1>
            <AboutChild info={info} />
            <Footer />
        </div>
    );
};

export default About;