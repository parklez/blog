const fs = require("fs");
const path = require("path");
const fm = require("front-matter");

const POSTS = [];

function readFileName(filename) {
  // https://github.com/jekyll/jekyll/blob/master/lib/jekyll/document.rb#L15C29-L15C86
  const re = /(\d{2,4}-\d{2}-\d{2})-(.*)/;
  const name = filename.match(re);
  const date = name[1] ? name[1] : new Date().toString();
  return [date, name[2]];
}

function readPost(filename) {
  const file = fs.readFileSync(path.join(postsDir, filename), "utf8");
  const content = fm(file);
  const [date, title] = readFileName(filename);

  return {
    _id: 0,
    userId: 0,
    title: content.attributes.title
      ? content.attributes.title
      : title.slice(0, -3).replaceAll("-", " "),
    content: content.body,
    hidden: false,
    published: date,
  };
}

// 1. Read file and its content
const postsDir = path.join(__dirname, "/../_posts/");
const filesAvailable = fs.readdirSync(postsDir);

filesAvailable.forEach((filename) => {
  POSTS.push(readPost(filename));
});

// 2. Sort by post.published
POSTS.sort(function (a, b) {
  return new Date(b.published) - new Date(a.published);
});

// 3. Generate a list of posts in expected format
const postsPerPage = 10;
const total = POSTS.length;

const splicedPosts = [];

for (let i = 0; i < POSTS.length; i += postsPerPage)
  splicedPosts.push(POSTS.slice(i, i + postsPerPage));

let page = 0;

splicedPosts.forEach((chunk) => {
  fs.writeFileSync(
    path.join(__dirname, `/src/assets/static-${page}.json`),
    JSON.stringify({
      results: chunk,
      total,
      page,
    })
  );
  page += 1;
});
