import { supabase } from "../services/supabase"

async function checkUsernameAvailability(username) {
  let { data, error } = await supabase
    .from("userprofile")
    .select("username")
    .eq("username", username)
  if (data) {
    if (data.length > 0) {
      return true
    } else {
      return false
    }
  } else {
    console.log(error)
  }
}

export { checkUsernameAvailability }

async function insertIntoUserprofileTable(id, username) {
  const { data, error } = await supabase
    .from("userprofile")
    .update({ username: username })
    .eq("id", id)
  if (error) {
    console.log("Error in inserting username: => ", error)
  }
}

export { insertIntoUserprofileTable }
