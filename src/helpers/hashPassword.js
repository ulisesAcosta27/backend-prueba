const encryptPassword = async (pass) => {
  try {
    const salt = await bcrypt.genSalt(10);
    await bcrypt.hash(pass, salt);
  } catch (error) {
    console.log("we cant encryt this password, sorry :(")
    console.log(error)
  }
}