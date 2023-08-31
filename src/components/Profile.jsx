import React from "react";
import "../App.css"
function Profile() {
  return (
    <div>
      <div style={{ width: "100%", margin: "auto"}}>
        <div className="profile-section">
          <div>
            <img id="profile-img" src="https://res.cloudinary.com/dk0o7tdks/image/upload/v1693501814/profile-img_bhfvqc.png" alt="profile-img" />
          </div>
          <div>
            <h1 style={{lineHeight:"0px",fontSize:"40px"}}>Sukhvindra Singh</h1>
            <h2 style={{lineHeight:"20px"}}>Web Developer/Android Developer</h2>
            <p>
              Seeking a beginner role to enhance and explore my technical
              knowledge gained at MDU University in the last three years.I hold
              a BCA degree from GITM college and won the quiz challenge held at
              campus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
