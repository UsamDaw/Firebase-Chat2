// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

// Firebase config (kopier den fra din index.html)
const firebaseConfig = {
    apiKey: "AIzaSyAAKf_mvwIncmmZHKqATY7E5mAq6r5LDHo",
    authDomain: "chat-app-38e75.firebaseapp.com",
    projectId: "chat-app-38e75",
    storageBucket: "chat-app-38e75.firebasestorage.app",
    messagingSenderId: "538361199706",
    appId: "1:538361199706:web:b532a50451e0a41d75ac63"
  };

// Init Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const messagesRef = collection(db, "messages");

// Auth elements
const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");
const logoutBtn = document.getElementById("logout-btn");
const email = document.getElementById("email");
const password = document.getElementById("password");
const loginForm = document.getElementById("login-form");
const chat = document.getElementById("chat");
const sendBtn = document.getElementById("send-btn");
const messageInput = document.getElementById("message-input");
const messagesDiv = document.getElementById("messages");
const q = query(messagesRef, orderBy("timestamp"));

// Registrer bruker
signupBtn.addEventListener("click", () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(userCredential => {
      console.log("Bruker registrert:", userCredential.user);
    })
    .catch(error => alert(error.message));
});

// Logg inn
loginBtn.addEventListener("click", () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(userCredential => {
      console.log("Logget inn:", userCredential.user);
    })
    .catch(error => alert(error.message));
});

// Logg ut
logoutBtn.addEventListener("click", () => {
  signOut(auth);
});

// Endring i login-status
onAuthStateChanged(auth, user => {
  if (user) {
    loginForm.style.display = "none";
    chat.style.display = "block";
  } else {
    loginForm.style.display = "block";
    chat.style.display = "none";
  }
});

// Meldingen sendes med klikk
sendBtn.addEventListener("click", async () => {
    const user = auth.currentUser;
    const text = messageInput.value.trim();
    if (!text || !user) return;
  
    await addDoc(messagesRef, {
      text: text,
      user: user.email,
      timestamp: serverTimestamp()
    });

  
    messageInput.value = "";
  });

// Meldingen sendes med enter knappen
  messageInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      sendBtn.click();
    }
  });


  onSnapshot(q, snapshot => {
    messagesDiv.innerHTML = "";
    snapshot.forEach(doc => {
      const msg = doc.data();
      const div = document.createElement("div");
  
      const isMine = auth.currentUser && msg.user === auth.currentUser.email;
      div.classList.add(isMine ? "own" : "other");
      div.innerHTML = `<strong>${msg.user}</strong><br>${msg.text}`;
  
      // Rediger og slett bare egne meldinger
    // Rediger og slett bare egne meldinger
if (isMine) {
    const editBtn = document.createElement("button");
    editBtn.textContent = "Rediger";
    editBtn.classList.add("edit-btn");  // Legger til stilklassen for redigeringsknappen
    editBtn.onclick = () => {
      const newText = prompt("Endre melding:", msg.text);
      if (newText) {
        updateDoc(doc.ref, { text: newText });
      }
    };
  
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Slett";
    deleteBtn.classList.add("delete-btn");  // Legger til stilklassen for sletteknappen
    deleteBtn.onclick = () => {
      if (confirm("Slett denne meldingen?")) {
        deleteDoc(doc.ref);
      }
    };
  
    div.appendChild(editBtn);
    div.appendChild(deleteBtn);
  }  
  
      messagesDiv.appendChild(div);
    });
  });
  