# Firebase Quick Start

## 🚀 Get Started in 5 Minutes

### 1. Install Firebase (if needed)
```bash
cd integrated-power-tech
npm install firebase
```

### 2. Create Firebase Project
1. Visit: https://console.firebase.google.com/
2. Click "Add Project"
3. Name: "integrated-power-tech"
4. Click "Create Project"

### 3. Get Configuration
1. Click web icon (</>)
2. Register app
3. Copy the config object

### 4. Set Environment Variables
Create `.env.local` file:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 5. Enable Services

**Authentication:**
- Go to Authentication > Sign-in method
- Enable: Email/Password, Google

**Firestore:**
- Go to Firestore Database
- Click "Create database"
- Choose location: europe-west1 (closest to Nigeria)
- Start in production mode

**Storage:**
- Go to Storage
- Click "Get started"
- Start in production mode

### 6. Deploy Security Rules

Copy rules from:
- `firestore.rules` → Firestore Rules tab
- `storage.rules` → Storage Rules tab

### 7. Restart Dev Server
```bash
npm run dev
```

## ✅ You're Done!

Firebase is now integrated with:
- Authentication (Email, Google, Facebook)
- Firestore Database
- Cloud Storage
- Security Rules

## 📝 Quick Usage

### Sign Up User
```typescript
import { useFirebaseAuth } from "@/hooks/useFirebaseAuth";

const { signUp } = useFirebaseAuth();
await signUp(email, password, name);
```

### Sign In User
```typescript
const { signIn } = useFirebaseAuth();
await signIn(email, password);
```

### Get Current User
```typescript
import { useAuth } from "@/context/AuthContext";

const { user } = useAuth();
console.log(user?.email);
```

### Create Order
```typescript
import { createOrder } from "@/lib/firebase/firestore";

const { orderId } = await createOrder(userId, orderData);
```

## 🔗 Important Links

- Firebase Console: https://console.firebase.google.com/
- Full Setup Guide: See `FIREBASE_SETUP.md`
- Firebase Docs: https://firebase.google.com/docs

---

**Need Help?** Check `FIREBASE_SETUP.md` for detailed instructions!
