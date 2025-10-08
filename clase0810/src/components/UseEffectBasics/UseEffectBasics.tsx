// src/UseEffectBasics.tsx
import { useEffect, useState } from "react";
import styles from "./UseEffectBasics.module.css";

export default function UseEffectBasics() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("Ana");

  // Runs once on mount
  useEffect(() => {
    console.log("Component mounted");
    return () => {
      console.log("Unmounted: cleanup subscriptions/timers here.");
    };
  }, []);

  // Runs whenever "count" changes
  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  // Runs whenever "username" changes
  useEffect(() => {
    console.log("Username changed:", username);
  }, [username]);

  return (
    <div className={styles.MainContainer}>
      <h2>Use effect example</h2>
      <div className={styles.container}>
        <input
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <button
          className={styles.simpleButton}
          onClick={() => setCount((c) => c + 1)}
        >
          Click: {count}
        </button>
      </div>
      <div className={styles.note}>
        Check browser console to be able to understand how use effect works in
        each case
      </div>
    </div>
  );
}
