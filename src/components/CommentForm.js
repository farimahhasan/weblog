import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useMutation } from "@apollo/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SEND_COMMENT } from "./graphQl/mutations"
import { grey } from "@mui/material/colors";

const CommentForm = ({ slug }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [pressed, setPressed] = useState(false);

  const [sendComment, { loading, data }] = useMutation(SEND_COMMENT, {
    variables: { name, email, text, slug },
  });


  const sendHandler = () => {
    if (name && email && text) {
      sendComment();
      setPressed(true);
    } else {
      toast.warn("تمام فیلد هارو پر کن", {
        position: "top-center",
      });
    }
  };

  if (data && pressed) {
    toast.success("نظر ارسال شد و منتظر تایید می باشد", {
      position: "top-center",
    });
    setPressed(false);
  }

  return (
    <Grid
      container
      sx={{
        p: 3,
        mt: 5,
        justifyContent:"center"
      }}

    >
      <Grid item xs={12} m={2} textAlign="center">
        <Typography component="p" variant="h6" fontWeight={700} color={grey[50]}>
          فرم ارسال نظر
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8} md={6} m={2}>
        <div className="input-data">
          <input type="text" id="username" required autoComplete="off" value={name} onChange={(e) => setName(e.target.value)}/>
          <div className="underline"></div>
          <label htmlFor="username">نام کاربری</label>
        </div>
      </Grid>
      <Grid item xs={12} sm={8} md={6} m={2}>
      <div className="input-data">
          <input type="email" id="email" required autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} />
          <div className="underline"></div>
          <label htmlFor="email">ایمیل</label>
      </div>
      </Grid>
      <Grid item xs={12} sm={8} md={6} m={2}>
      <div className="input-data textarea">
            <textarea id="message" rows="30" cols="80" required autoComplete="off" value={text} onChange={(e) => setText(e.target.value)}></textarea>
            <div className="underline"></div>
            <label htmlFor="message">متن نظر</label>
            </div>
      </Grid>
      <Grid item xs={12} m={2} textAlign="center">
        {loading ? (
          <Button className="btn" variant="contained" disabled>
            در حال ارسال ...
          </Button>
        ) : (
          <Button className="btn" variant="contained" onClick={sendHandler}>
            ارسال
          </Button>
        )}
      </Grid>
      <ToastContainer rtl />
    </Grid>
  );
}

export default CommentForm;