import React, { useEffect, useState } from "react";
import { Row, Col, CardPanel } from 'react-materialize';
import "./style.css";
import API from "../../utils/API";

const parser = require("fast-xml-parser");
const he = require("he");

const options = {
  attributeNamePrefix : "@_",
  attrNodeName: "attr", //default is 'false'
  textNodeName : "#text",
  ignoreAttributes : true,
  ignoreNameSpace : false,
  allowBooleanAttributes : false,
  parseNodeValue : true,
  parseAttributeValue : false,
  trimValues: true,
  cdataTagName: "__cdata", //default is 'false'
  cdataPositionChar: "\\c",
  parseTrueNumberOnly: false,
  arrayMode: false, //"strict"
  attrValueProcessor: (val, attrName) => he.decode(val, {isAttributeValue: true}),//default is a=>a
  tagValueProcessor : (val, tagName) => he.decode(val), //default is a=>a
  stopNodes: ["parse-me-as-string"]
};

function FootprintHistory () {

  const [footprint, setFootprint] = useState([]);

  useEffect(() => {
    loadData();
  }, []);  

  function loadData() {
    const inputType = "1";
    const input = "98144";
    const income = "5";
    const householdSize = "4";
    API.getFootprint(inputType, input, income, householdSize).then(res => {
      const jsonData = parser.parse(res.data, options);
      console.log(jsonData.response);
      setFootprint(jsonData.response);
    }
  ).catch(err => console.log(err))};

    return (
      <Row>
        <Col
          l={6}
          m={6}
          s={12}
        >
          <CardPanel className="orangeCard">
            <span className="white-text">
              <p>You chose: {footprint.input_location}</p>
              <p>The size of your household: {footprint.input_size}</p>
              <p>Population of your zip code: {footprint.input_population}</p>
              <p>Type of location chosen: {footprint.input_location_mode}</p>
              <p>Income: {footprint.input_income}</p>
            </span>
          </CardPanel>
        </Col>
      </Row>
    );
  }

export default FootprintHistory;
