const router = require("express").Router();
let Post = require("../Model/Post");

router.route("/").post((req, res) => {
  const title = req.body.title;
  const community = req.body.community;
  const time = req.body.time;
  const comments = Number(req.body.comments);
  const likes = Number(req.body.likes);
  const user = req.body.user;
  const image = req.body.image;

  const newPost = new Post({
    title,
    community,
    time,
    comments,
    likes,
    user,
    image
  });

  newPost
    .save()
    .then(() => {
      res.json("Post added");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/").get((req, res) => {
  Post.find()
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/:id", (req, res) => {
  const postId = req.params.id;

  Post.findById(postId)
    .then((post) => {
      if (!post) {
        return res.status(404).send("Post not found");
      }
      res.send(post);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// New route to get posts from the "technology" community
router.get("/community/technology", (req, res) => {
  Post.find({ community: "technologies" })
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
