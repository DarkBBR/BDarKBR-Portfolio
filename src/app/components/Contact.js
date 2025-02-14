import { useState } from "react";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import "../styles/contacts.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_zy8882n",
        "template_vdobxom",
        {
          from_name: formData.name,
          to_name: "Arthur",
          message: formData.message,
          reply_to: formData.email,
        },
        "VA5y9bBzIeJJbbSnw"
      )
      .then((result) => {
        toast.success('<3 Sua mensagem foi enviada, logo eu irei enviar a resposta!', {
            position: "top-right",
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Erro ao enviar:", error); // Adiciona o log detalhado no console
        toast.error("Houve um erro ao enviar a mensagem. Tente novamente.");
      });
  };

  return (
    <div className="form-section">
      <div className="contact-info">
        <h2>Interessado? Que tal criarmos um projeto juntos?</h2>
        <p>
          <strong>Discord:</strong> bdarkbr
        </p>
        <p>
          <strong>GitHub:</strong> github.com/DarKBBR
        </p>
        <p>
          <strong>Email:</strong> arthurdevin@gmail.com
        </p>
        <p>
          <strong>Número:</strong> +55 (14) 99865-1913
        </p>
      </div>

      <form className="form-container" onSubmit={handleSubmit}>
        <input
          className="input"
          name="name"
          type="text"
          placeholder="Nome"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className="input"
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          className="input"
          name="message"
          placeholder="Mensagem"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="button">
          Enviar
        </button>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
