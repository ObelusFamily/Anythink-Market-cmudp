const mongoose = require("mongoose");
const crypto = require("crypto");
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
require("../models/User");
require("../models/Item");
require("../models/Comment");

const user = mongoose.model("User");
const item = mongoose.model("Item");
const comment = mongoose.model("Comment");

const seedUser = async () => {
  // Generate user
  const suffix = crypto.randomUUID().substring(0, 8);
  const seed_user = new user({
    username: "seedUser" + suffix,
    email: "seedUser" + suffix + "@seed.com",
  });
  seed_user.setPassword("pass" + suffix);
  await seed_user.save();
  return seed_user._id;
};

const seedItem = async (seller_id) => {
  // Generate item
  const suffix = crypto.randomUUID().substring(0, 8);
  const seed_item = new item({
    title: "seedTitle" + suffix,
    description: "seedDesc" + suffix,
    seller: seller_id,
    image: "https://picsum.photos/200/",
  });
  await seed_item.save();
  return seed_item._id;
};

const seedComment = async (seller_id, item_id) => {
  // Generate comment
  const suffix = crypto.randomUUID().substring(0, 8);
  const seed_comment = new comment({
    body: "Comment " + suffix,
    seller: seller_id,
    item: item_id,
  });
  await seed_comment.save();
};

const seedAmount = async (amount) => {
  for (let i = 0; i < amount; i++) {
    const seller_id = await seedUser();
    const item_id = await seedItem(seller_id);
    await seedComment(seller_id, item_id);
  }
  console.log("finished seeding");
};

seedAmount(100);
process.exit();
