import React, { useState } from "react";
import jsPDF from "jspdf";

import "./main.css";

const PersonalInfo = ({ onFormSubmit }) => {
  const [formData, setData] = useState({
    //biodata
    selfName: "",
    selfEmail: "",
    selfNumber: "",
    selfLocation: "",
    profile: "",
    //project Details
    projectName1: "",
    projectDetails1: "",
    projectLink1: "",
    tools1: "",
    projectName2: "",
    projectDetails2: "",
    projectLink2: "",
    tools2: "",
    projectName3: "",
    projectDetails3: "",
    projectLink3: "",
    tools3: "",
    //Skills/interest/Activities
    languages: "",
    technicalSkills: "",
    certification1: "",
    certificate1: "",
    certification2: "",
    certificate2: "",
    activities: "",

    //Education
    school_name10: "",
    percentage_10: "",
    year_10: "",
    school_name12: "",
    percentage_12: "",
    year_12: "",
    grad_college: "",
    grad_gpa: "",
    grad_year: "",
    //links
    github: "",
    linkedin: "",
  });
  const handleInput = (field, value) => {
    setData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the form data to the parent component
    onFormSubmit(formData);
  };

  return (
    <div>
      <img src={require("./assets/programmer.png")} alt="" />
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            maxLength={20}
            required
            value={formData.selfName}
            placeholder="Tony Stark"
            onChange={(e) => handleInput("selfName", e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            required
            type="email"
            placeholder="tony@stark.com"
            value={formData.selfEmail}
            onChange={(e) => handleInput("selfEmail", e.target.value)}
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            required
            type="text"
            placeholder="9999999999"
            maxLength={10}
            value={formData.selfNumber}
            onChange={(e) => handleInput("selfNumber", e.target.value)}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            required
            type="text"
            placeholder="6th,aventor street"
            maxLength={50}
            value={formData.selfLocation}
            onChange={(e) => handleInput("selfLocation", e.target.value)}
          />
        </div>
        <div>
          <label>Portfolio link:</label>
          <input
            required
            type="text"
            placeholder="https://project.com"
            value={formData.profile}
            onChange={(e) => handleInput("profile", e.target.value)}
          />
        </div>
        <div>
          <img src={require("./assets/project.png")} alt="" />
        </div>
        <div>
          <div>
            <img src={require("./assets/number-1.png")} alt="" />
          </div>
          <label>Project Name</label>
          <input
            required
            type="text"
            placeholder="weather app"
            value={formData.projectName1}
            onChange={(e) => handleInput("projectName1", e.target.value)}
          />
        </div>
        <div>
          <label>Project Details</label>
          <input
            required
            type="text"
            placeholder="App giving details of weather"
            value={formData.projectDetails1}
            onChange={(e) => handleInput("projectDetails1", e.target.value)}
          />
        </div>
        <div>
          <label>Project Link</label>
          <input
            required
            type="text"
            placeholder="https//weather.com"
            value={formData.projectLink1}
            onChange={(e) => handleInput("projectLink1", e.target.value)}
          />
        </div>
        <div>
          <label>Tools Used</label>
          <input
            required
            type="text"
            placeholder="HTML,CSS,JS"
            value={formData.tools1}
            onChange={(e) => handleInput("tools1", e.target.value)}
          />
        </div>

        <div>
          <div>
            <img src={require("./assets/track.png")} alt="" />
          </div>
          <label>Project Name</label>
          <input
            required
            type="text"
            placeholder="weather app"
            value={formData.projectName2}
            onChange={(e) => handleInput("projectName2", e.target.value)}
          />
        </div>
        <div>
          <label>Project Details</label>
          <input
            required
            type="text"
            placeholder="App giving details of weather"
            value={formData.projectDetails2}
            onChange={(e) => handleInput("projectDetails2", e.target.value)}
          />
        </div>
        <div>
          <label>Project Link</label>
          <input
            required
            type="text"
            placeholder="https//weather.com"
            value={formData.projectLink2}
            onChange={(e) => handleInput("projectLink2", e.target.value)}
          />
        </div>
        <div>
          <label>Tools Used</label>
          <input
            required
            type="text"
            placeholder="HTML,CSS,JS"
            value={formData.tools2}
            onChange={(e) => handleInput("tools2", e.target.value)}
          />
        </div>
        <div>
          <div>
            <img src={require("./assets/number-3.png")} alt="" />
          </div>
          <label>Project Name</label>
          <input
            required
            type="text"
            placeholder="weather app"
            value={formData.projectName3}
            onChange={(e) => handleInput("projectName3", e.target.value)}
          />
        </div>
        <div>
          <label>Project Details</label>
          <input
            required
            type="text"
            placeholder="App giving details of weather"
            value={formData.projectDetails3}
            onChange={(e) => handleInput("projectDetails3", e.target.value)}
          />
        </div>
        <div>
          <label>Project Link</label>
          <input
            required
            type="text"
            placeholder="https//weather.com"
            value={formData.projectLink3}
            onChange={(e) => handleInput("projectLink3", e.target.value)}
          />
        </div>
        <div>
          <label>Tools Used</label>
          <input
            required
            type="text"
            placeholder="HTML,CSS,JS"
            value={formData.tools3}
            onChange={(e) => handleInput("tools3", e.target.value)}
          />
        </div>
        <div>
          <img src={require("./assets/education.png")} alt="" />

          <div>
            <div>
              <img src={require("./assets/school.png")} alt="" />
            </div>
            <label>School Name</label>
            <input
              required
              type="text"
              placeholder="St. Don Bosco International College"
              value={formData.school_name10}
              onChange={(e) => handleInput("school_name10", e.target.value)}
            />
          </div>

          <div>
            <label>School Name (10th)</label>
            <input
              required
              type="text"
              placeholder="Enter school name (10th)"
              value={formData.school_name10}
              onChange={(e) => handleInput("school_name10", e.target.value)}
            />
          </div>

          <div>
            <label>Percentage (10th)</label>
            <input
              required
              type="text"
              placeholder="Enter percentage (10th)"
              value={formData.percentage_10}
              onChange={(e) => handleInput("percentage_10", e.target.value)}
            />
          </div>

          <div>
            <label>Year (10th)</label>
            <input
              required
              type="text"
              placeholder="Enter year (10th)"
              value={formData.year_10}
              onChange={(e) => handleInput("year_10", e.target.value)}
            />
          </div>

          <div>
            <label>School Name (12th)</label>
            <input
              required
              type="text"
              placeholder="Enter school name (12th)"
              value={formData.school_name12}
              onChange={(e) => handleInput("school_name12", e.target.value)}
            />
          </div>

          <div>
            <label>Percentage (12th)</label>
            <input
              required
              type="text"
              placeholder="Enter percentage (12th)"
              value={formData.percentage_12}
              onChange={(e) => handleInput("percentage_12", e.target.value)}
            />
          </div>

          <div>
            <label>Year (12th)</label>
            <input
              required
              type="text"
              placeholder="Enter year (12th)"
              value={formData.year_12}
              onChange={(e) => handleInput("year_12", e.target.value)}
            />
          </div>
          <img src={require("./assets/college.png")} alt="" />

          <div>
            <label>Grad College</label>
            <input
              required
              type="text"
              placeholder="Enter college name (grad)"
              value={formData.grad_college}
              onChange={(e) => handleInput("grad_college", e.target.value)}
            />
          </div>

          <div>
            <label>Grad GPA</label>
            <input
              required
              type="text"
              placeholder="Enter GPA (grad)"
              value={formData.grad_gpa}
              onChange={(e) => handleInput("grad_gpa", e.target.value)}
            />
          </div>

          <div>
            <label>Grad Year</label>
            <input
              required
              type="text"
              placeholder="Enter year of graduation (grad)"
              value={formData.grad_year}
              onChange={(e) => handleInput("grad_year", e.target.value)}
            />
          </div>
          <div>
            <img src={require("./assets/languages.png")} alt="" />
            <label>Languages</label>
            <input
              required
              type="text"
              placeholder="Enter languages"
              value={formData.languages}
              onChange={(e) => handleInput("languages", e.target.value)}
            />
          </div>

          <div>
            <img src={require("./assets/4727496.png")} alt="" />

            <label>Technical Skills</label>
            <input
              required
              type="text"
              placeholder="Enter technical skills"
              value={formData.technicalSkills}
              onChange={(e) => handleInput("technicalSkills", e.target.value)}
            />
          </div>

          <div>
            <img src={require("./assets/certificate.png")} alt="" />
            <label>Certification 1</label>
            <input
              required
              type="text"
              placeholder="Enter certification 1"
              value={formData.certification1}
              onChange={(e) => handleInput("certification1", e.target.value)}
            />
          </div>

          <div>
            <label>Certificate link 1</label>
            <input
              required
              type="text"
              placeholder="www.github.com/project"
              value={formData.certificate1}
              onChange={(e) => handleInput("certificate1", e.target.value)}
            />
          </div>

          <div>
            <label>Certification 2</label>
            <input
              required
              type="text"
              placeholder="Enter certification 2"
              value={formData.certification2}
              onChange={(e) => handleInput("certification2", e.target.value)}
            />
          </div>
          <div>
            <label>Certificate link 2</label>
            <input
              required
              type="text"
              placeholder="www.github.com/project"
              value={formData.certificate2}
              onChange={(e) => handleInput("certificate2", e.target.value)}
            />
          </div>

          <div>
            <img src={require("./assets/activity.png")} alt="" />

            <label>professional summary</label>
            <input
              required
              type="text"
              placeholder="Enter summary"
              value={formData.activities}
              maxLength={400}
              onChange={(e) => handleInput("activities", e.target.value)}
            />
          </div>

          <div>
            <img src={require("./assets/6994770.png")} alt="" />
            <label>Linkedin</label>
            <input
              required
              type="text"
              placeholder="wwew.linkedin.com/profile"
              value={formData.linkedin}
              onChange={(e) => handleInput("linkedin", e.target.value)}
            />
          </div>
          <div>
            <label>Github</label>
            <input
              required
              type="text"
              placeholder="wwew.github.com/profile"
              value={formData.github}
              onChange={(e) => handleInput("github", e.target.value)}
            />
          </div>
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default PersonalInfo;
