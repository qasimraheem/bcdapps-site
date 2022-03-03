import React,{useState} from "react";
import "./jobApplication.scss";
import Select from "react-select";
import cvIcon from "../../images/cv.svg";
// import crossIcon from "../../images/cross.png";



const JobApplication = () => {
    const [name, setName] = useState('');
    const [email,setEmail] = useState('');
    const [number, setNumber] = useState();

    const options = ['1000$-5000$', '5000$-10000$', ' 10000$-20000$', '20000$-30000$', '5000$-10000$', ' 10000$-20000$', '20000$-30000$']

    return (
        <section>
        <modal name="job-application" style={{height:"auto",width:"560px",background:"rgba(0, 0, 0, 0.7)",overflow:"visible"}} className="job">
          <form className="contact-form">
            <div className="form-loader">
                    <div className="lds-ripple">
                                <div></div>
                                <div></div>
                                    </div>
                                    <p>Loading . . .</p>
                                    </div>
            <input className="inputs gray-txt" value={name} type="text" name="name" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
            <input className="inputs gray-txt" type="email" value={email} name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input className="inputs gray-txt" value={number} type="number" name="phone_no" placeholder="Phone#" onChange={(e) => setNumber(e.target.value)} />
            <div className="post-cv">
            <Select options={options} className="custom-select2" />
            </div>
            <div className="post-cv">
            <Select options={options} className="custom-select2" />
            </div>
            <div className="resume-content mt20">
                    <input type="file" name="file" id="file" className="inputfile"/>
                    <label className="custom-input-file" for="file">Upload Resume</label>
                    <img className="cv-icon" src={cvIcon} alt="cv"/>
                    <p className="m15">file name</p>
                    {/* <img className="cross-icon m15" src={crossIcon} alt="cancle"/> */}
                  </div>
             <div className="inputs gray-txt" placeholder="Message"></div>
            <a className="send-btn">Apply</a>
          </form>
        </modal>
      </section>
    )
}

export default JobApplication;