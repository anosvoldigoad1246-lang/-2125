body {
  margin: 0;
  height: 100vh;
  background: linear-gradient(135deg, #ff6a88, #ff99ac);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Segoe UI', sans-serif;
  overflow: hidden;
}

.container {
  background: rgba(255,255,255,0.2);
  padding: 30px;
  border-radius: 25px;
  text-align: center;
  max-width: 360px;
  backdrop-filter: blur(10px);
  animation: fade 1.5s ease;
}

@keyframes fade {
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
}

.title {
  color: white;
  font-size: 30px;
  text-shadow: 0 0 20px pink;
}

.subtitle {
  color: #fff;
  margin-bottom: 10px;
}

.photos {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.pic {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid white;
  box-shadow: 0 0 25px rgba(255,255,255,0.6);
  animation: float 3s infinite;
}

@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
  100% { transform: translateY(0); }
}

.countdown {
  color: white;
  font-size: 18px;
  margin: 15px 0;
}

.message {
  color: white;
  font-size: 16px;
  margin: 15px 0;
  min-height: 120px;
}

button {
  padding: 10px 25px;
  border: none;
  border-radius: 25px;
  background: white;
  color: hotpink;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  transform: scale(1.1);
}

#love {
  margin-top: 20px;
  font-size: 18px;
  color: white;
  animation: pop 1s ease;
}

.hidden {
  display: none;
}

@keyframes pop {
  from { opacity: 0; transform: scale(0.5); }
  to { opacity: 1; transform: scale(1); }
}

/* falling hearts */
.hearts::before {
  content: "❤️ 💕 💖 💗 💓";
  position: fixed;
  top: -10%;
  left: 0;
  width: 100%;
  font-size: 30px;
  animation: fall 6s linear infinite;
}

@keyframes fall {
  from { transform: translateY(-10%); }
  to { transform: translateY(110%); }
}

