# 📬 Register Interest Form with EmailJS

A sleek, modern, and responsive **Register Interest** form built with **HTML, CSS, JavaScript, Bootstrap**, and integrated with **EmailJS** to send confirmation emails. This project is perfect for landing pages or product waitlists.

![Preview](https://via.placeholder.com/1000x500.png?text=Project+Screenshot)

---

## ✨ Features

- Clean & responsive UI (Bootstrap 5)
- Glassmorphism card design
- Dark, professional gradient background
- Confirmation email sent using **EmailJS**
- Smooth transition to a thank-you screen
- Perfect for Upwork portfolio / client projects

---

## 💻 Tech Stack

- **HTML5**
- **CSS3**
- **Bootstrap 5**
- **JavaScript (Vanilla)**
- **[EmailJS](https://www.emailjs.com/)** – for email delivery

---

## 🚀 How It Works

1. User fills out their **name and email**
2. On form submission:
   - A **confirmation email** is sent to the user via EmailJS
   - A custom **thank-you message** replaces the form on the page

---

## 🔧 Setup & Configuration

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/register-interest-emailjs.git

 2. Open the project in your code editor and replace the following in index.html:

```bash
emailjs.init("YOUR_PUBLIC_KEY");

emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
You can get these values from your EmailJS Dashboard.
```

3. Make sure your EmailJS template includes:
```bash
{{name}}

{{email}}
```

4. Launch the index.html file in your browser and test it out.

## 📸 Screenshots

### 🔹 Register Form
![Register Form](https://github.com/user-attachments/assets/6ed2ebfd-d7e8-4c72-b9f0-b8821850280e)

---

### 🔹 Thank You Message
![Thank You Message](https://github.com/user-attachments/assets/2facbb7c-7aba-49f7-b0a2-1d6f3b5f3d61)


## 📂 Folder Structure

   ```bash
  register-interest-form-emailjs/
├── index.html
├── style.css
├── script.js
├── README.md

```

## 📌 Live Demo

🔗 [View Live on Vercel](https://romil-patel.vercel.app)  
*(Replace the link if deployed elsewhere)*

**Romil Patel**  
📧 rp5089601@gmail.com  
🌐 [romil-patel.vercel.app](https://romil-patel.vercel.app)


