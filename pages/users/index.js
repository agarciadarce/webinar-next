import Container from "../../components/Container";
import UserCard from "../../components/UserCard";

const Index = ({ users }) => {
  return (
    <Container title="Usuarios">
      <div className="container mt-4">
        <div className="row">
          {users.map((value, index) => (
            <div className="col-3" key={index}>
              <UserCard value={value}/>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

Index.getInitialProps = async (ctx) => {
  const res = await fetch(`https://reqres.in/api/users/`);
  const resJSON = await res.json();
  return { users: resJSON.data };
};

export default Index;
