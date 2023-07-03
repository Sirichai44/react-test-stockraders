import React, { useState, useEffect } from "react";
import "./Blogs.css";
import { Link } from "react-router-dom";

const Blogs = (props) => {
  const { data } = props;
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const result = data.filter((item) =>
      item.N_name.toLowerCase().includes(search)
    );
    setFilterData(result);
  }, [search]);

  return (
    <div className="blog-container">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="ค้นหาชื่อคน"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <article>
        {filterData.map((item) => (
          <Link to={`/blog/${item.N_name}`} key={item.N_name}>
            <div className="card">
              <h2>Name: {item.N_name}</h2>
              <p>{item.N_COMPANY_E}</p>
              <p>{item.N_BUSINESS_TYPE_E.substring(0, 100) + "....."}</p>
              <hr />
            </div>
          </Link>
        ))}
      </article>
    </div>
  );
};

export default Blogs;
