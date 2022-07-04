const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  addFriend,
  updateUser,
  deleteUser,
  deleteFriend,
} = require("../../controllers/user-controller");

// api route to get all users
router.route("/").get(getAllUsers).post(createUser);

// api route to get update and delete
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// api route to delete friends
router.route("/:id/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
