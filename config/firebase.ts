import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyD9bqQrJIhkU7CMC7OY_cCxQ8YsJxPFJYc',
  authDomain: 'alphabi-test-project.firebaseapp.com',
  projectId: 'alphabi-test-project',
  storageBucket: 'alphabi-test-project.appspot.com',
  messagingSenderId: '693431771859',
  appId: '1:693431771859:web:7f0751806f8401540daa26',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth()
