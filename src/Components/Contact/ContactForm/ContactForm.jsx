import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
//dependencias con emailjs y sweetalert 2
const initialState = {
  user_name: "",
  user_email: "",
  message: "",
};

const ContactForm = () => {
  const [form, setForm] = useState(initialState);

  const isValidEmail = (email) => {
    // return /\S+@\S+\.\S+/.test(email);
    return /\S+@\S+/.test(email);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (
      form.user_name !== "" &&
      isValidEmail(form.user_email) &&
      form.message !== ""
    ) {
      e.preventDefault();
      emailjs
        .send(
          "service_55fso6m",
          "contact_form",
          form,
          import.meta.env.VITE_EMAILJS_PUBLICKEY
        )
        .then((res) => {
          console.log(res.text);
        })
        .then(() => {
          setForm(initialState);
          Swal.fire({
            title: "Mensaje enviado!",
            text: "Muchas gracias por contactarme!",
            icon: "success",
            confirmButtonText: "Ok",
            buttonsStyling: false,
            customClass: {
              confirmButton: styles.alert_button,
            },
          });
        })
        .catch((error) => {
          Swal.fire({
            title: "Oh No!",
            text: "Hubo un error al enviar el mensaje, por favor inténtelo mas tarde",
            icon: "error",
            confirmButtonText: "Ok",
            buttonsStyling: false,
            customClass: {
              confirmButton: styles.alert_button,
            },
          });
          console.log(error.text);
        });
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.top_form}>
          <span className={styles.data_form}>
            <label className={styles.label} for="user_name">
              Nombre
            </label>
            <input
              className={styles.input_data}
              required
              type="text"
              name="user_name"
              value={form.user_name}
              onChange={handleChange}
            />
          </span>
          <span className={styles.data_form}>
            <label className={styles.label} for="user_email">
              Email
            </label>
            <input
              className={styles.input_data}
              required
              type="email"
              name="user_email"
              value={form.user_email}
              onChange={handleChange}
            />
          </span>
        </div>
        <div className={styles.bottom_form}>
          <label className={styles.label} for="message">
            Mensaje
          </label>
          <textarea
            className={styles.msg_box}
            required
            type="text"
            name="message"
            value={form.message}
            onChange={handleChange}
          />
          <input
            className={styles.send_btn}
            type="submit"
            value="Enviar"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
