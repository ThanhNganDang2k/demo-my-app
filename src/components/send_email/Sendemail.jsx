import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { logout, sendEmail } from "../../Redux/Actions/userActions";
import { Link, useNavigate } from "react-router-dom";
import Message from "../../components/loadingError/Error";
import Loading from "../../components/loadingError/Loading";
const Sendemail = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  // const redirect = location.search ? location.search.split("=")[1] : "/";

  const userSend = useSelector((state) => state.userEmail);
  const { error, userEmail } = userSend;
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (userInfo) {
  //     history("/");
  //   }
  // }, [userInfo, history]);

  const sendemailHandler = (e) => {
    e.preventDefault();
    console.log(userEmail);
    dispatch(sendEmail(email));
    console.log(userEmail);
    // navigate("/");
  };

  return (
    <>
      <div className="profile">
        <div className="container mt-lg-5 mt-3">
          <div className="row align-items-start">
            {/* panels */}
            <div
              className="tab-content col-lg-8 pb-5 pt-lg-0 pt-3"
              id="v-pills-tabContent"
            >
              <div
                className="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                <div className="container d-flex flex-column justify-content-center align-items-center login-center">
                  {userEmail ? (
                    <div className="successfully">
                      {" "}
                      <h2>Email: {userEmail} send successfully</h2>
                    </div>
                  ) : (
                    <form className="Login col-md-8 col-lg-4 col-11">
                      {/* {loading && <Loading />} */}
                      <div className="info">
                        {error && (
                          <Message
                            variant="alert-danger"
                            style={{ color: "red" }}
                          >
                            {error}
                          </Message>
                        )}{" "}
                        {userEmail && (
                          <Message
                            variant="alert-danger"
                            style={{ color: "red" }}
                          >
                            {userEmail.Message}
                          </Message>
                        )}
                        <input
                          type="email"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                          type="submit"
                          onClick={(e) => {
                            sendemailHandler(e);
                          }}
                        >
                          SEND
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sendemail;
