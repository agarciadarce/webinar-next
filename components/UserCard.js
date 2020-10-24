import Link  from 'next/link'
const UserCard =({value})=>{
    return(
        <div className="card">
                <img
                  className="card-img-top"
                  src={value.avatar}
                  alt={value.first_name}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {value.first_name} {value.last_name}
                  </h5>
                  <p className="card-text">Any</p>
                  <Link href={"/posts/" + value.id}>
                  <a className="btn btn-primary">
                    Ver sus publicaciones
                  </a>
                  </Link>
                </div>
              </div>
    )
}
export default UserCard;