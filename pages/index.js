import withLayout from '../components/Layout';
import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Page = () => <>
  <h1>My Blog</h1>
  <ul>
    <PostLink title="Hello Next.js" />
    <PostLink title="Learn Next.js is awesome" />
    <PostLink title="Deploy apps with Zeit" />
  </ul>
</>;

export default withLayout(Page);
