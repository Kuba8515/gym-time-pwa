import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout(props) {
  return (
    <div>
      <Navbar username={props.username} />
      {props.children}
      <Footer />
    </div>
  );
}
