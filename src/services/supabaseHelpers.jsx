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
  } else {
    // update user with username field
    const { data, error } = await supabase.auth.updateUser({
      data: { username: username },
    })
    if (error) {
      console.log("Couldn't update user with username.")
    } else {
      console.log(data)
    }
  }
}

export { insertIntoUserprofileTable }
