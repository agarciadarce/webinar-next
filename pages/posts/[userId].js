import Container from "../../components/Container";
import PostCard from "../../components/PostCard";

const Index = ({ posts }) => {
  return (
    <Container title="Posts User">
      <div className="container mt-4">
        {posts.map((post) => (
          <PostCard value={post} />
        ))}
      </div>
    </Container>
  );
};
Index.getInitialProps = async (ctx) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${ctx.query.userId}`);
    const resJSON = await res.json();
    return { posts: resJSON };
  };
  
export default Index;
