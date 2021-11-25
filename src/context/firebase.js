import React, { useEffect, useState, useContext } from "react";
import { auth, createUserProfileDocument } from "../util/firebase";

const FirebaseContext = React.createContext({ currentUser: null });

function FirebaseProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({ currentUser: null });
  let unsubscribeFromAuth = null;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log("auth changed", user);
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            currentUser: { id: snapshot.id, ...snapshot.data() },
          });
        });
        return;
      }
      setCurrentUser({ currentUser: null });
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <FirebaseContext.Provider value={currentUser}>
      {children}
    </FirebaseContext.Provider>
  );
}

function useFirebase() {
  const context = useContext(FirebaseContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }

  return context;
}

export { FirebaseContext, FirebaseProvider, useFirebase };
