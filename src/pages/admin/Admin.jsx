import React from "react";
import "./Admin.scss";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  let navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.clear();
    navigate("/log-in");
  };
  return (
    <section id="admin">
      <div className="container admin">
        <div className="admin__task-bar">
          <div>
            <h3>Manage My Account</h3>
            <a href="#">My Profile</a>
            <a href="#">Address Book</a>
            <a href="#">My Payment Options</a>
          </div>
          <div>
            <h3>My Orders</h3>
            <a href="#">My Returns</a>
            <a href="#">My Cancellations</a>
          </div>
          <button onClick={handleLogOut} className="logout-btn">
            Log out
          </button>
        </div>
        <form className="admin__form" action="">
          <h2 className="admin__form__title">Edit Your Profile</h2>
          <div className="admin__form__info">
            <div className="admin__form__input">
              <label for="fname">First Name</label>
              <input type="text" name="fname" id="fname" placeholder="Md" />
            </div>
            <div className="admin__form__input">
              <label for="lname">Last Name</label>
              <input type="text" name="lname" id="lname" placeholder="Rimel" />
            </div>
            <div className="admin__form__input">
              <label for="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="rimel1111@gmail.com"
              />
            </div>
            <div className="admin__form__input">
              <label for="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Kingston, 5236, United State"
              />
            </div>
          </div>
          <div className="admin__form__password">
            <p>Password Changes</p>
            <input type="password" placeholder="Current Password" />
            <input type="password" placeholder="New Password" />
            <input type="password" placeholder="Confirm New Password" />
          </div>
          <div className="admin__form__btns">
            <button className="admin__form__cancel">Cancel</button>
            <button className="admin__form__save">Save Changes</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Admin;
