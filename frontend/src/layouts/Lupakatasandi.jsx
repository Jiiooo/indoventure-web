import React, { useState } from 'react';

const Lupakatasandi = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kirim permintaan pengaturan ulang kata sandi ke server
    // Contoh: axios.post('/forgot-password', { email });
    setSubmitted(true);
  };

  return (
    <div>
      <h2>Lupa Kata Sandi</h2>
      {submitted ? (
        <p>Email verifikasi telah dikirim. Silakan cek email Anda.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <button type="submit">Kirim Permintaan</button>
        </form>
      )}
    </div>
  );
};

export default Lupakatasandi;
