import React, { useState } from "react";
import TextField from "@mui/material/TextField";
// import { TimePickerToolbar } from '@mui/x-date-pickers-pro';
import ClearIcon from "@mui/icons-material/Clear";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { months } from "./Data";
import style from "./SignUp.module.css"
import { FaTwitter } from 'react-icons/fa';
import { userDetails } from "../../atoms/userDetails";
import { useSetRecoilState } from "recoil";


export default function SignUp(){
  const [open, setOpen] =useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false)
  const [errortxt, setErrorTxt] = useState("")

  // const[users,setUsers]=useState([])
  const navigate = useNavigate()
  const oldData = JSON.parse(localStorage.getItem("userData")) || []

  const setAtomUserDetails = useSetRecoilState(userDetails)

  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const pattern1=/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/;

  function isEmail(str) {
    return str.match(pattern);
  }
  function isPassword(str1){
    return str1.match(pattern1)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name === "" || email === "" || password === "") {
      setError(true)
      setErrorTxt("Please fill the all detail")
    } else if (name.length < 3) {
      setError(true)
      setErrorTxt("*Name should be atlest 3 characters")
    } else if (isEmail(email) === null) {
      setError(true)
      setErrorTxt("*Invalid email")
    } else if (isPassword(password)===null) {
      setError(true)
      setErrorTxt("*Password must be one character capital and special character")
    }
    else if (oldData.find((val) => val.email === email)) {
      setError(true)
      setErrorTxt(`${email} already exists`)
      //   setName("")
      // setEmail("")
      // setPassword("")
    }
    else {
      setError(false)
      alert(`welcome ${name}  SignUp Successfull`)
      setName("")
      setEmail("")
      setPassword("")


      const newUser = {
        name: name,
        email: email,
        password: password
      }

      const updatedUsers = [...oldData, newUser]
      localStorage.setItem("userData", JSON.stringify(updatedUsers))

      navigate("/login")
    }
  }

  let dates = new Array(31)
    .fill()
    .map((_, i) => i + 1);

  const currentYear = new Date().getFullYear();
  const years = new Array(120)
    .fill()
    .map((_, i) => currentYear - i);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            height: "65vh",
            width: "60vw",
            borderRadius: "16px"
          }
        }}

      >
        <DialogActions>
          <ClearIcon
            onClick={handleClose}
            sx={{ position: "absolute", left: 0, top: 0, margin: "16px", cursor: "pointer" }}
          />
        </DialogActions>
        <div className={style.formContainer}>
          <DialogTitle sx={{ position: "absolute", left: 0, top: 0, marginLeft: "1.5em" }}>
            <h1 className={style.header}>Create your account</h1>
          </DialogTitle>
          <DialogContent
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div className="twiter">
            <FaTwitter size={55} style={{color:'#00acee',marginTop:'0px'}} />
            </div>
            
            <TextField
              sx={{ marginTop: "6rem", padding: "0.5rem", width: "88%" }}
              id="outlined-basic"
              label="Name"
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />

            <TextField
              sx={{ marginTop: "1rem", padding: "0.5rem", width: "88%" }}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            {/* <TextField
             sx={{ marginTop: "1rem" ,padding:"0.5rem"}}
            id="outlined-basic"
            label="Phone"
            variant="outlined"
          /> */}

            <TextField
              sx={{ marginTop: "1rem", padding: "0.5rem", width: "88%" }}
              id="outlined-basic"
              label="Password"
              type="password"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
              value={password}

            />

            <div className={style.dobContainer}>
              <div >
                <Box sx={{ minWidth: 200 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Month</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={Month}
                      label="Month"
                      // onChange={handleChange}
                      MenuProps={{
                        anchorOrigin: {
                          vertical: "top",
                          horizontal: "center"
                        },
                        transformOrigin: {
                          vertical: "bottom",
                          horizontal: "center"
                        },
                        PaperProps: {
                          sx: {
                            maxHeight: "38vh",
                          }
                        }
                      }}
                    >
                      <MenuItem value="" disabled>
                        <em>Select month</em>
                      </MenuItem>
                      {months.map((month, index) => {
                        return <MenuItem
                          key={Math.random() * 10000} value={index}>{month}</MenuItem>;
                        // sx:{{ py: 0, fontSize: '0.9rem' }}
                      })}

                    </Select>
                  </FormControl>
                </Box>
              </div>

              <div >
                <Box sx={{ minWidth: 100 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Day</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={Day}
                      label="Day"
                      // onChange={handleChange}
                      MenuProps={{
                        anchorOrigin: {
                          vertical: "top",
                          horizontal: "center"
                        },
                        transformOrigin: {
                          vertical: "bottom",
                          horizontal: "center"
                        },
                        PaperProps: {
                          sx: {
                            maxHeight: "38vh",
                          }
                        }
                      }}
                    >
                      <MenuItem value="" disabled>
                        <em>Select Day</em>
                      </MenuItem>
                      {dates.map((date, index) => {
                        return <MenuItem
                          key={Math.random() * 10000}
                          value={date}>{date}</MenuItem>;
                      })}
                    </Select>
                  </FormControl>
                </Box>
              </div>
              <div >
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Year</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={Year}
                      label="Year"
                      // onChange={handleChange}
                      MenuProps={{
                        anchorOrigin: {
                          vertical: "top",
                          horizontal: "center"
                        },
                        transformOrigin: {
                          vertical: "bottom",
                          horizontal: "center"
                        },
                        PaperProps: {
                          sx: {
                            maxHeight: "38vh",
                          }
                        }
                      }}
                    >
                      <MenuItem value="" disabled>
                        <em>Select Year</em>
                      </MenuItem>
                      {years.map((year, index) => {
                        return <MenuItem key={Math.random() * 10000} value={year}>{year}</MenuItem>;
                      })}

                    </Select>
                  </FormControl>
                </Box>
              </div>
            </div>

            {error ? <small style={{ color: "red" }}>{errortxt}</small> : null}
            {/* {error && <p>{error}</p>} */}
            <Button
              sx={{ marginTop: "1rem", padding: "0.5rem" }}
              variant="contained"
              onClick={handleSubmit}
            >
              SignUp
            </Button>
          </DialogContent>

        </div>
      </Dialog>

      <button  onClick={handleClickOpen} className={style.signUp_btn} >
        SignUp
      </button>
    </div>
  );
};

