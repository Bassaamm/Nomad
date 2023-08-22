import { supabase } from "./supabase";

export async function loginSupabase({ email, password }) {
  console.log(email, password);
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    console.log(error);
    throw new Error("wrong data");
  }
  return data;
}
export async function getExistUser() {
  const { data: userSession } = await supabase.auth.getSession();
  if (!userSession.session) return null;

  const { data: userAcc, error } = await supabase.auth.getUser();
  console.log(userAcc);
  if (error) return console.log(error);
  return userAcc?.user;
}
export async function logOutApiAuth() {
  const { error } = await supabase.auth.signOut();

  if (error) console.log(error);
}
