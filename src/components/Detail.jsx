import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Detail.css";

const Detail = (props) => {
  const { data } = props;
  const { id } = useParams();
  const [companyE, setCompanyE] = useState("");
  const [companyT, setCompanyT] = useState("");
  const [link, setLink] = useState("");
  const [detailE, setDetailE] = useState("");
  const [detailT, setDetailT] = useState("");
  const [marketCap, setMarketCap] = useState("");

  useEffect(() => {
    const result = data.find((item) => item.N_name === id);
    console.log(result);
    setCompanyE(result.N_COMPANY_E);
    setCompanyT(result.N_COMPANY_T);
    setLink(result.N_URL);
    setDetailE(result.N_BUSINESS_TYPE_E);
    setDetailT(result.N_BUSINESS_TYPE_T);
    setMarketCap(result.marketcap);
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h2 className="title">Company Name : {companyE}</h2>
        <h3 className="title">{companyT}</h3>
      </div>

      <div className="blog-detail">
        <div className="eng">
          <h3>Market Cap : {marketCap}</h3>
          <p>{detailE}</p>
        </div>
        <hr />

        <div className="th">
          <p>{detailT}</p>
        </div>
        <hr />
      </div>

      <div className="blog-footer">
        <strong>Link : {link}</strong>
      </div>
    </div>
  );
};

export default Detail;
