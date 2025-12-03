import { useState } from "react";
import {
  signUpWithEmail,
  signInWithEmail,
  signInWithGoogle,
  signInWithFacebook,
  logOut,
  resetPassword,
} from "@/lib/firebase/auth";
import { useRouter } from "next/navigation";

export function useFirebaseAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const signUp = async (email: string, password: string, displayName: string) => {
    setLoading(true);
    setError(null);
    
    const { user, error } = await signUpWithEmail(email, password, displayName);
    
    if (error) {
      setError(error);
      setLoading(false);
      return { success: false, error };
    }
    
    setLoading(false);
    router.push("/");
    return { success: true, user };
  };

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    
    const { user, error } = await signInWithEmail(email, password);
    
    if (error) {
      setError(error);
      setLoading(false);
      return { success: false, error };
    }
    
    setLoading(false);
    router.push("/");
    return { success: true, user };
  };

  const signInGoogle = async () => {
    setLoading(true);
    setError(null);
    
    const { user, error } = await signInWithGoogle();
    
    if (error) {
      setError(error);
      setLoading(false);
      return { success: false, error };
    }
    
    setLoading(false);
    router.push("/");
    return { success: true, user };
  };

  const signInFacebook = async () => {
    setLoading(true);
    setError(null);
    
    const { user, error } = await signInWithFacebook();
    
    if (error) {
      setError(error);
      setLoading(false);
      return { success: false, error };
    }
    
    setLoading(false);
    router.push("/");
    return { success: true, user };
  };

  const signOut = async () => {
    setLoading(true);
    setError(null);
    
    const { error } = await logOut();
    
    if (error) {
      setError(error);
      setLoading(false);
      return { success: false, error };
    }
    
    setLoading(false);
    router.push("/signin");
    return { success: true };
  };

  const sendPasswordReset = async (email: string) => {
    setLoading(true);
    setError(null);
    
    const { error } = await resetPassword(email);
    
    if (error) {
      setError(error);
      setLoading(false);
      return { success: false, error };
    }
    
    setLoading(false);
    return { success: true };
  };

  return {
    signUp,
    signIn,
    signInGoogle,
    signInFacebook,
    signOut,
    sendPasswordReset,
    loading,
    error,
  };
}
