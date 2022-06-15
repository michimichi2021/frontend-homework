import { app } from '../src/firebase';
import { useState } from 'react';
import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth';
import { useHistory } from 'react-router-dom';

const auth = getAuth(app);
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const history = useHistory();

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  await createUserWithEmailAndPassword(auth, email, password)
  history.push('/')
}
const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
  setEmail(e.currentTarget.value)
}
const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
  setPassword(e.currentTarget.value)
}