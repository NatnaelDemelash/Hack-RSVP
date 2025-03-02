'use server';

export async function signIn(prevState: void | null, formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  console.log('Email: ', email, 'Password: ', password);
}
