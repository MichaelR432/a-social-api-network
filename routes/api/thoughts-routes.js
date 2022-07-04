const router = require("express").Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  addReaction,
  updateThought,
  deleteThought,
  deleteReaction,
} = require("../../controllers/thought-controller");

router.route("/").get(getAllThoughts);

router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// api route to create a new though
router.route("/:userId").post(createThought);

// api route to add reaction
router.route("/:thoughtId/reactions").post(addReaction);

// api route to delete reactions
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
