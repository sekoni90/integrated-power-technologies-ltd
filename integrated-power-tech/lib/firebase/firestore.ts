import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  Timestamp,
  DocumentData,
} from "firebase/firestore";
import { db } from "../firebase";

// Collections
export const COLLECTIONS = {
  USERS: "users",
  PRODUCTS: "products",
  ORDERS: "orders",
  CART: "cart",
  REVIEWS: "reviews",
};

// User operations
export const createUserProfile = async (userId: string, userData: any) => {
  try {
    await updateDoc(doc(db, COLLECTIONS.USERS, userId), {
      ...userData,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    });
    return { error: null };
  } catch (error: any) {
    // If document doesn't exist, create it
    try {
      await addDoc(collection(db, COLLECTIONS.USERS), {
        userId,
        ...userData,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
      });
      return { error: null };
    } catch (err: any) {
      return { error: err.message };
    }
  }
};

export const getUserProfile = async (userId: string) => {
  try {
    const docRef = doc(db, COLLECTIONS.USERS, userId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { data: docSnap.data(), error: null };
    } else {
      return { data: null, error: "User not found" };
    }
  } catch (error: any) {
    return { data: null, error: error.message };
  }
};

// Product operations
export const getAllProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, COLLECTIONS.PRODUCTS));
    const products: DocumentData[] = [];
    
    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });
    
    return { data: products, error: null };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
};

export const getProductById = async (productId: string) => {
  try {
    const docRef = doc(db, COLLECTIONS.PRODUCTS, productId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { data: { id: docSnap.id, ...docSnap.data() }, error: null };
    } else {
      return { data: null, error: "Product not found" };
    }
  } catch (error: any) {
    return { data: null, error: error.message };
  }
};

// Order operations
export const createOrder = async (userId: string, orderData: any) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTIONS.ORDERS), {
      userId,
      ...orderData,
      status: "pending",
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    });
    return { orderId: docRef.id, error: null };
  } catch (error: any) {
    return { orderId: null, error: error.message };
  }
};

export const getUserOrders = async (userId: string) => {
  try {
    const q = query(
      collection(db, COLLECTIONS.ORDERS),
      where("userId", "==", userId),
      orderBy("createdAt", "desc")
    );
    
    const querySnapshot = await getDocs(q);
    const orders: DocumentData[] = [];
    
    querySnapshot.forEach((doc) => {
      orders.push({ id: doc.id, ...doc.data() });
    });
    
    return { data: orders, error: null };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
};

export const updateOrderStatus = async (orderId: string, status: string) => {
  try {
    const docRef = doc(db, COLLECTIONS.ORDERS, orderId);
    await updateDoc(docRef, {
      status,
      updatedAt: Timestamp.now(),
    });
    return { error: null };
  } catch (error: any) {
    return { error: error.message };
  }
};

// Cart operations
export const saveCartToFirestore = async (userId: string, cartItems: any[]) => {
  try {
    const docRef = doc(db, COLLECTIONS.CART, userId);
    await updateDoc(docRef, {
      items: cartItems,
      updatedAt: Timestamp.now(),
    });
    return { error: null };
  } catch (error: any) {
    // If document doesn't exist, create it
    try {
      await addDoc(collection(db, COLLECTIONS.CART), {
        userId,
        items: cartItems,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
      });
      return { error: null };
    } catch (err: any) {
      return { error: err.message };
    }
  }
};

export const getCartFromFirestore = async (userId: string) => {
  try {
    const docRef = doc(db, COLLECTIONS.CART, userId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { data: docSnap.data().items, error: null };
    } else {
      return { data: [], error: null };
    }
  } catch (error: any) {
    return { data: null, error: error.message };
  }
};

// Review operations
export const addProductReview = async (
  productId: string,
  userId: string,
  reviewData: any
) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTIONS.REVIEWS), {
      productId,
      userId,
      ...reviewData,
      createdAt: Timestamp.now(),
    });
    return { reviewId: docRef.id, error: null };
  } catch (error: any) {
    return { reviewId: null, error: error.message };
  }
};

export const getProductReviews = async (productId: string) => {
  try {
    const q = query(
      collection(db, COLLECTIONS.REVIEWS),
      where("productId", "==", productId),
      orderBy("createdAt", "desc")
    );
    
    const querySnapshot = await getDocs(q);
    const reviews: DocumentData[] = [];
    
    querySnapshot.forEach((doc) => {
      reviews.push({ id: doc.id, ...doc.data() });
    });
    
    return { data: reviews, error: null };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
};
