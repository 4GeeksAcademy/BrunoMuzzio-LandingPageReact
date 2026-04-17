const Card = () => {
    return(
        <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100 text-center">
                <img src="https://picsum.photos/500" className="card-img-top" alt="..." />
                <div className="card-body p-4">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque.
                    </p>
                </div>
                <div className="card-footer bg-light py-3">
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        </div>
    )
}

export default Card;