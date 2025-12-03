import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
  listAll,
} from "firebase/storage";
import { storage } from "../firebase";

// Upload file to Firebase Storage
export const uploadFile = async (
  file: File,
  path: string
): Promise<{ url: string | null; error: string | null }> => {
  try {
    const storageRef = ref(storage, path);
    const snapshot = await uploadBytes(storageRef, file);
    const url = await getDownloadURL(snapshot.ref);
    return { url, error: null };
  } catch (error: any) {
    return { url: null, error: error.message };
  }
};

// Upload product image
export const uploadProductImage = async (
  file: File,
  productId: string
): Promise<{ url: string | null; error: string | null }> => {
  const path = `products/${productId}/${file.name}`;
  return uploadFile(file, path);
};

// Upload user avatar
export const uploadUserAvatar = async (
  file: File,
  userId: string
): Promise<{ url: string | null; error: string | null }> => {
  const path = `users/${userId}/avatar.jpg`;
  return uploadFile(file, path);
};

// Delete file from Firebase Storage
export const deleteFile = async (
  path: string
): Promise<{ error: string | null }> => {
  try {
    const storageRef = ref(storage, path);
    await deleteObject(storageRef);
    return { error: null };
  } catch (error: any) {
    return { error: error.message };
  }
};

// Get download URL for a file
export const getFileURL = async (
  path: string
): Promise<{ url: string | null; error: string | null }> => {
  try {
    const storageRef = ref(storage, path);
    const url = await getDownloadURL(storageRef);
    return { url, error: null };
  } catch (error: any) {
    return { url: null, error: error.message };
  }
};

// List all files in a directory
export const listFiles = async (
  path: string
): Promise<{ files: string[] | null; error: string | null }> => {
  try {
    const storageRef = ref(storage, path);
    const result = await listAll(storageRef);
    const files = result.items.map((item) => item.fullPath);
    return { files, error: null };
  } catch (error: any) {
    return { files: null, error: error.message };
  }
};
