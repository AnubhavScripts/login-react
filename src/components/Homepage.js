import React from 'react';
import { useAuth } from '../context/authcontest';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Code, FileCode, Terminal, Database } from 'lucide-react';

const HomePage = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <FileCode className="text-purple-600" size={24} />
              <h1 className="text-xl font-bold text-gray-800">Firebase Auth Demo</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-sm font-medium text-purple-600">
                    {currentUser?.email?.[0].toUpperCase()}
                  </span>
                </div>
                <span className="text-sm text-gray-600">{currentUser?.email}</span>
              </div>
              <button
                onClick={handleSignOut}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Firebase Setup Guide */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Database className="text-purple-600" size={24} />
                <h2 className="text-xl font-bold text-gray-800">
                  Firebase Setup Guide
                </h2>
              </div>
              <ol className="space-y-4 text-gray-600">
                <li>
                  <strong>1.</strong> Create a new project in Firebase Console
                </li>
                <li>
                  <strong>2.</strong> Enable Authentication service
                </li>
                <li>
                  <strong>3.</strong> Add Email/Password and Google sign-in methods
                </li>
                <li>
                  <strong>4.</strong> Get your Firebase configuration
                </li>
                <li>
                  <strong>5.</strong> Create a web app in your Firebase project
                </li>
              </ol>
            </div>
          </div>

          {/* Installation Guide */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="text-purple-600" size={24} />
                <h2 className="text-xl font-bold text-gray-800">
                  Installation Steps
                </h2>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-2">1. Install dependencies:</p>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <code className="text-sm text-purple-600">
                      npm install firebase react-router-dom
                    </code>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-2">2. Initialize Firebase:</p>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <code className="text-sm text-purple-600">
                      import {'{'} initializeApp {'}'} from 'firebase/app';<br />
                      const app = initializeApp(firebaseConfig);
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Implementation Guide */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden md:col-span-2">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Code className="text-purple-600" size={24} />
                <h2 className="text-xl font-bold text-gray-800">
                  Implementation Guide
                </h2>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    Project Structure
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <pre className="text-sm text-gray-600">
{`src/
  ├── components/
  │   ├── LoginPage.js
  │   ├── HomePage.js
  │   └── ProtectedRoute.js
  ├── context/
  │   └── AuthContext.js
  ├── firebase.js
  ├── App.js
  └── index.js`}
                    </pre>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    Current Status
                  </h3>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-purple-800">
                      <strong>Logged in as:</strong>
                    </p>
                    <p className="text-purple-600">{currentUser?.email}</p>
                    <p className="text-purple-800 mt-2">
                      <strong>Auth Status:</strong>
                    </p>
                    <p className="text-purple-600">Authentication is working correctly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;