let products = [
  {
    src: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name: "Fancy Product",
    price: "$40.00 - $80.00",
    action: "View option",
  },
  {
    src: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name: "Special Item",
    price: "$20.00 - $18.00",
    action: "Add Cart",
  },
  {
    src: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name: "Popular Item",
    price: " $40.00",
    action: "Add Cart",
  },
  {
    src: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name: "Sale Item",
    price: " $50.00-$25.00",
    action: "Add Cart",
  },
  {
    src: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name: "Special Item",
    price: "$20.00 - $18.00",
    action: "Add Cart",
  },
  {
    src: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name: "Fancy Product",
    price: " $120.00 - $280.00",
    action: "View Options",
  },
  {
    src: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name: "Sale Item",
    price: "$50.00 - $25.00",
    action: "Add Cart",
  },
  {
    src: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name: "Popular Item",
    price: " $40.00",
    action: "Add Cart",
  },
];

let ShowProducts = (props) => {
  return (
    <div>
      <div classNameName="container px-4 px-lg-5 ">
        <div className="row  row-cols-xl-4 justify-content-center">
          {products.map((i, index) => {
            return (
              <div key={index} className="col mb-5">
                <div className="card h-100">
                  <img className="card-img-top" src={i.src} />
                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">{i.name}</h5>
                      {i.price}
                    </div>
                  </div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a
                        className={
                          props.itemArray[index] === 0
                            ? "btn btn-outline-dark mt-auto"
                            : "btn btn-outline-dark mt-aut disabled"
                        }
                        href="#"
                        onClick={() => {
                          props.addItem(index);
                        }}
                      >
                        {i.action}
                      </a>
                    </div>
                  </div>
                  {i.action === "Add Cart" ? (
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        <a
                          className={
                            props.itemArray[index] >= 1
                              ? "btn btn-outline-dark mt-auto "
                              : "btn btn-outline-dark mt-auto disabled"
                          }
                          href="#"
                          onClick={() => {
                            props.removeItem(index);
                          }}
                        >
                          Remove Item
                        </a>
                      </div>
                    </div>
                  ) : (
                    <p className="text-center">New items</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShowProducts;
