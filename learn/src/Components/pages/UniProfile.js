import "./UniProfile.css";
import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";

function UniProfile(props) {
  let history = useHistory();
  const { data } = props.location;
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [website, setWebsite] = useState("");
  const [district, setDistrict] = useState("");
  const [general, setGeneral] = useState("");
  const [duration, setDuration] = useState("");
  const [tuition, setTuition] = useState("");
  const [scholarship, setScholarship] = useState("");
  const [admissiondate, setAdmissiondate] = useState("");
  const [listOfDepartment, setDepartmentlist] = useState([]);
  //const [listOfDepartment, setDepartmentlist] = useState("");

  /*const showdepartment = (name) =>{
    Axios.post('http://localhost:3001/departmentinfo')
    .then((response)=>{
              if(response.data.message)
              {}
              else{
                console.log(response.data);
              if(response.data[0].Name===name)
              { history.push({
                pathname: '/departmentdetails',
                data: name
              });}
              else{
              }
            }
              //console.log(response.data);
          })   
  };*/

  useEffect(() => {
    getAllDepartment();
    getUniversityInfo();
  }, []);

  const getUniversityInfo = () => {
    Axios.post('http://localhost:3001/uniuser', {
      email: data
    }).then((response) => {
      setName(response.data[0].Name);
      setMail(response.data[0].Email);
      setDistrict(response.data[0].District);
      setWebsite(response.data[0].Website);
      setGeneral(response.data[0].General);
      setDuration(response.data[0].Duration);
      setTuition(response.data[0].Tuition);
      setScholarship(response.data[0].Scholarship);
      setAdmissiondate(response.data[0].Admissiondate);
    })
  };

  const getAllDepartment = () => {
    Axios.post('http://localhost:3001/departmentinfo', {
      name: data
    }).then((response) => {
        setDepartmentlist(response.data);
        //console(response.data);
    })
};

  return (
    <div className="backgroundcontainer">
      <Col className="profilecontainer" style={{alignItems: "center"}}>
        <h1 style={{fontSize: 36, fontFamily: "Times New Roman", fontWeight: "bold", marginBottom: "10px"}}>{name}</h1>
        <h1 style={{fontSize: 16, fontFamily: "Times New Roman", fontWeight: "bold", marginTop: "10px", color: "#222F6E"}}><Link>{website}</Link></h1>
        <h1 style={{fontSize: 16, fontFamily: "Times New Roman", fontWeight: "400", marginTop: "10px"}}>{district}</h1>
            <Col>
              <Row>
                <br></br>
                <p style={{fontSize: 18, fontFamily: "Times New Roman"}}>______________________________________________________________________</p>
              </Row>
              <Row>
                <p style={{fontSize: 18, fontFamily: "Times New Roman", fontWeight: "600", marginTop: "10px"}}>General</p>
              </Row>
              <Row>
                <h3 style={{fontSize: 14, fontFamily: "Times New Roman", fontWeight: "400", marginTop: "10px"}}>{general}</h3>
              </Row>
              <Row>
                <h3 style={{fontSize: 18, fontFamily: "Times New Roman", fontWeight: "600", marginTop: "10px"}}>Duration</h3>
              </Row>
              <Row>
                <h3 style={{fontSize: 14, fontFamily: "Times New Roman", fontWeight: "400", marginTop: "10px"}}>{duration}</h3>
              </Row>
              <Row>
                <h3 style={{fontSize: 18, fontFamily: "Times New Roman", fontWeight: "600", marginTop: "10px"}}>Tuition</h3>
              </Row>
              <Row>
                <h3 style={{fontSize: 14, fontFamily: "Times New Roman", fontWeight: "400", marginTop: "10px"}}>{tuition}</h3>
              </Row>
              <Row>
                <h3 style={{fontSize: 18, fontFamily: "Times New Roman", fontWeight: "600", marginTop: "10px"}}>Scholarship</h3>
              </Row>
              <Row>
                <h3 style={{fontSize: 14, fontFamily: "Times New Roman", fontWeight: "400", marginTop: "10px"}}>{scholarship}</h3>
              </Row>
              <Row>
                <h3 style={{fontSize: 18, fontFamily: "Times New Roman", fontWeight: "600", marginTop: "10px"}}>Admission Date</h3>
              </Row>
              <Row>
                <h3 style={{fontSize: 14, fontFamily: "Times New Roman", fontWeight: "400", marginTop: "10px"}}>{admissiondate}</h3>
              </Row>
              <Row>
                <h3 style={{fontSize: 18, fontFamily: "Times New Roman", fontWeight: "600", marginTop: "10px"}}>Department List</h3>
              </Row>
              <Row>
                {listOfDepartment.map((values, key) => {
                  return (
                      <div>{values.Name}</div>
                  )
                })}  
              </Row>
              <Row>
                <p style={{fontSize: 18, fontFamily: "Times New Roman"}}>______________________________________________________________________</p>
                <br></br>
              </Row>
            </Col>
      </Col>
    </div>
  );
}

export default UniProfile