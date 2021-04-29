import { Form } from "react-bootstrap";
import { timeZones } from "./timezones";
import { useState } from "react";

const FormFields = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    timeZone: "Europe/Andorra",
    password: "",
    checked: true
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, userName, password, email, checked } = details;
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z0-9])(?=.*[!@#$]).{8,15}$/g;
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (
      firstName !== "" &&
      lastName !== "" &&
      userName !== "" &&
      password !== "" &&
      email !== ""
    ) {
      if (!email.match(emailRegex)) {
        alert("Email need to be valid format");
      } else if (firstName.toLowerCase() === lastName.toLowerCase()) {
        console.log(email.match(emailRegex));
        alert("First name and Last Name need not to be same");
      } else if (!password.match(regex)) {
        alert(
          "Password length need to be atleast 8 - 15 characters long. password need to have a number, letter, and symbol"
        );
      } else {
        console.log(details);
        setDetails(initialState);
        alert(`Successfully logged in as ${userName}`);
      }
    } else {
      alert("Need to Enter Details in all fields and agree T&C");
    }
  };

  const [details, setDetails] = useState(initialState);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            value={details.firstName}
            onChange={(e) =>
              setDetails({ ...details, firstName: e.target.value })
            }
            placeholder="first name"
            className="input_box bg-dark text-white"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            value={details.lastName}
            onChange={(e) =>
              setDetails({ ...details, lastName: e.target.value })
            }
            placeholder="last name"
            className="input_box bg-dark text-white"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>user Name</Form.Label>
          <Form.Control
            type="text"
            value={details.userName}
            onChange={(e) =>
              setDetails({ ...details, userName: e.target.value.toLowerCase() })
            }
            placeholder="username"
            className="input_box bg-dark text-white"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            value={details.email}
            onChange={(e) =>
              setDetails({ ...details, email: e.target.value.toLowerCase() })
            }
            placeholder="email address"
            className="input_box bg-dark text-white"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Time Zone</Form.Label>
          <Form.Control
            as="select"
            className="input_box bg-dark text-white"
            value={details.timeZone}
            onChange={(e) =>
              setDetails({ ...details, timeZone: e.target.value })
            }
          >
            {timeZones.map((time) => (
              <option value={time}>{time}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={details.password}
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            placeholder="password"
            className="input_box bg-dark text-white"
          />
        </Form.Group>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Form.Check
            type="checkbox"
            checked={true}
            onChange={(e) =>
              setDetails({ ...details, checked: e.target.checked })
            }
            label="I agree the terms and conditions"
            className="my-1"
          />
          <button
            className="my-1 submit_btn"
            type="submit"
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
          <p className="my-1">
            Already have an account ?{" "}
            <span style={{ color: "#10ff8d" }}> Log in </span>
          </p>
        </div>
      </Form>
    </div>
  );
};
export default FormFields;
