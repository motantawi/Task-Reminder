import { useState } from "react";
const Todos = () => {
  const [items, setItems] = useState("");
  const [itemList, setItemList] = useState([]);
  const handleRemove = (e) => {
    e.target.parentElement.parentElement.remove();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!items) {
      alert("Add Task First");
      return;
    }
    const item = {
      id: Math.random() * 100,
      value: items,
    };
    setItemList((oldArr) => [...oldArr, item]);
    setItems("");
  };
  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <h1 className="text-center mb-3 fw-bold">Todo List</h1>
            <div className="card">
              <div className="card-body p-5">
                <form
                  className="d-flex justify-content-center align-items-center mb-4"
                  onSubmit={handleSubmit}
                >
                  <div className="form-outline flex-fill">
                    <input
                      value={items}
                      type="text"
                      id="form2"
                      className="form-control"
                      placeholder="New task..."
                      onChange={(e) => setItems(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary ms-2">
                    Add
                  </button>
                </form>
                {/* Tabs navs */}
                <ul className="nav nav-tabs mb-4 pb-1">
                  <li className="nav-item nav-link active w-100 text-center">
                    Tasks
                  </li>
                </ul>
                {/* Tabs navs */}
                {/*  content */}

                <ul className="list-group mb-0">
                  {itemList.map((item) => {
                    return (
                      <li
                        key={item.id}
                        className="list-group-item d-flex align-items-center justify-content-between border-0 mb-2 rounded"
                        style={{ backgroundColor: "#f4f6f7" }}
                      >
                        <div>{item.value}</div>
                        <div>
                          <svg
                            onClick={handleRemove}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-x-lg text-primary"
                            viewBox="0 0 16 16"
                            style={{
                              fontSize: "30px !important",
                              cursor: "pointer",
                            }}
                          >
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                          </svg>
                        </div>
                      </li>
                    );
                  })}
                </ul>

                {/* content */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Todos;
