import { isPropertyAssignment } from 'typescript';
import Layout from '../components/Layout';

export default function Contact(props) {
  return (
    <Layout username={props.username}>
      <div>Contact me please</div>
    </Layout>
  );
}
