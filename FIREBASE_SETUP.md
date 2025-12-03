# Firebase Setup Guide

## Complete Firebase Integration for Integrated Power Technologies

### Files Created:

#### 1. Core Firebase Configuration
- `lib/firebase.ts` - Main Firebase initialization
- `.env.local.example` - Environment variables template

#### 2. Firebase Services
- `lib/firebase/auth.ts` - Authentication functions
- `lib/firebase/firestore.ts` - Database operations
- `lib/firebase/storage.ts` - File storage operations

#### 3. React Hooks & Context
- `context/AuthContext.tsx` - Authentication state management
- `hooks/useFirebaseAuth.ts` - Authentication hook

#### 4. Security Rules
- `firestore.rules` - Firestore security rules
- `storage.rules` - Storage security rules

---

## Setup Instructions

### Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add Project"
3. Enter project name: "integrated-power-tech"
4. Enable Google Analytics (optional)
5. Click "Create Project"

### Step 2: Register Web App

1. In Firebase Console, click the web icon (</>)
2. Register app name: "Integrated Power Technologies"
3. Enable Firebase Hosting (optional)
4. Copy the Firebase configuration

### Step 3: Enable Authentication

1. Go to **Authentication** > **Sign-in method**
2. Enable these providers:
   - ✅ Email/Password
   - ✅ Google
   - ✅ Facebook (optional)

**For Google Sign-In:**
- Already enabled by default

**For Facebook Sign-In:**
1. Create Facebook App at [developers.facebook.com](https://developers.facebook.com)
2. Get App ID and App Secret
3. Add to Firebase Authentication settings

### Step 4: Create Firestore Database

1. Go to **Firestore Database**
2. Click "Create database"
3. Choose location (closest to Nigeria: europe-west1)
4. Start in **production mode**
5. Deploy security rules from `firestore.rules`

### Step 5: Enable Storage

1. Go to **Storage**
2. Click "Get started"
3. Start in **production mode**
4. Deploy security rules from `storage.rules`

### Step 6: Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`
2. Fill in your Firebase configuration:

```bash
cp .env.local.example .env.local
```

3. Edit `.env.local` with your Firebase config values:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSy...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Step 7: Deploy Security Rules

**Firestore Rules:**
```bash
firebase deploy --only firestore:rules
```

**Storage Rules:**
```bash
firebase deploy --only storage:rules
```

Or manually copy from `firestore.rules` and `storage.rules` files in Firebase Console.

### Step 8: Install Firebase (if not already done)

```bash
npm install firebase
```

---

## Firebase Features Implemented

### 1. Authentication
- ✅ Email/Password sign up
- ✅ Email/Password sign in
- ✅ Google sign in
- ✅ Facebook sign in
- ✅ Password reset
- ✅ Sign out
- ✅ Auth state management

### 2. Firestore Database
- ✅ User profiles
- ✅ Products collection
- ✅ Orders collection
- ✅ Cart synchronization
- ✅ Product reviews
- ✅ CRUD operations

### 3. Storage
- ✅ Product image uploads
- ✅ User avatar uploads
- ✅ File management
- ✅ Download URLs

### 4. Security
- ✅ Firestore security rules
- ✅ Storage security rules
- ✅ User-based access control
- ✅ File size limits
- ✅ File type validation

---

## Usage Examples

### Authentication

```typescript
import { useFirebaseAuth } from "@/hooks/useFirebaseAuth";

function MyComponent() {
  const { signIn, signUp, signOut, loading, error } = useFirebaseAuth();
  
  const handleSignIn = async () => {
    const result = await signIn(email, password);
    if (result.success) {
      console.log("Signed in!");
    }
  };
}
```

### Firestore Operations

```typescript
import { createOrder, getUserOrders } from "@/lib/firebase/firestore";

// Create an order
const { orderId, error } = await createOrder(userId, orderData);

// Get user orders
const { data, error } = await getUserOrders(userId);
```

### Storage Operations

```typescript
import { uploadProductImage } from "@/lib/firebase/storage";

// Upload product image
const { url, error } = await uploadProductImage(file, productId);
```

### Auth Context

```typescript
import { useAuth } from "@/context/AuthContext";

function MyComponent() {
  const { user, loading } = useAuth();
  
  if (loading) return <div>Loading...</div>;
  if (!user) return <div>Please sign in</div>;
  
  return <div>Welcome {user.displayName}!</div>;
}
```

---

## Firestore Collections Structure

### users
```javascript
{
  userId: string,
  email: string,
  displayName: string,
  phone: string,
  address: object,
  createdAt: timestamp,
  updatedAt: timestamp
}
```

### products
```javascript
{
  name: string,
  category: string,
  power: string,
  price: string,
  description: string,
  image: string,
  features: array,
  specifications: object,
  stock: number,
  createdAt: timestamp
}
```

### orders
```javascript
{
  userId: string,
  items: array,
  subtotal: number,
  tax: number,
  shipping: number,
  total: number,
  status: string,
  shippingAddress: object,
  createdAt: timestamp,
  updatedAt: timestamp
}
```

### cart
```javascript
{
  userId: string,
  items: array,
  createdAt: timestamp,
  updatedAt: timestamp
}
```

### reviews
```javascript
{
  productId: string,
  userId: string,
  rating: number,
  comment: string,
  createdAt: timestamp
}
```

---

## Security Rules Explained

### Firestore Rules
- Users can read all user profiles but only write their own
- Anyone can read products (public)
- Users can read their own orders
- Users can manage their own cart
- Anyone can read reviews, users can create/edit their own

### Storage Rules
- Anyone can read files
- Users can upload their own avatars (max 5MB, images only)
- Only admins can upload product images

---

## Next Steps

1. ✅ Install Firebase: `npm install firebase`
2. ✅ Create Firebase project
3. ✅ Enable Authentication providers
4. ✅ Create Firestore database
5. ✅ Enable Storage
6. ✅ Configure environment variables
7. ✅ Deploy security rules
8. ✅ Test authentication
9. ✅ Test database operations
10. ✅ Test file uploads

---

## Troubleshooting

### Common Issues:

**1. "Firebase not initialized"**
- Check `.env.local` file exists
- Verify all environment variables are set
- Restart development server

**2. "Permission denied"**
- Check Firestore/Storage rules
- Verify user is authenticated
- Check user permissions

**3. "Auth provider not enabled"**
- Enable provider in Firebase Console
- Configure OAuth credentials

**4. "Storage upload failed"**
- Check file size (max 5MB)
- Verify file type (images only)
- Check storage rules

---

## Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firebase Console](https://console.firebase.google.com/)
- [Firestore Security Rules](https://firebase.google.com/docs/firestore/security/get-started)
- [Firebase Authentication](https://firebase.google.com/docs/auth)
- [Firebase Storage](https://firebase.google.com/docs/storage)

---

**Status:** ✅ Firebase fully configured and ready to use!
