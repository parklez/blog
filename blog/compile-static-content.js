const fs = require("fs");
const path = require("path");
const fm = require("front-matter");

const postsDirectory = path.join(__dirname, "../_posts/");
const projectsDirectory = path.join(__dirname, "../_projects/");

function parseFileName(filename) {
  // https://github.com/jekyll/jekyll/blob/master/lib/jekyll/document.rb#L15C29-L15C86
  const fileNameRegex = /(\d{2,4}-\d{2}-\d{2})-(.*)/;
  const matchResult = filename.match(fileNameRegex);
  const date = matchResult[1] ? matchResult[1] : new Date().toString();
  return [date, matchResult[2]];
}

function readPost(filename) {
  const fileContent = fs.readFileSync(path.join(postsDirectory, filename), "utf8");
  const frontMatter = fm(fileContent);
  const [published, postTitle] = parseFileName(filename);

  return {
    _id: filename,
    userId: 0,
    title: frontMatter.attributes.title || postTitle.slice(0, -3).replaceAll("-", " "),
    content: frontMatter.body,
    hidden: false,
    published: published,
  };
}

function readProject(filename) {
  const fileContent = fs.readFileSync(path.join(projectsDirectory, filename), "utf8");
  const frontMatter = fm(fileContent);
  const [published, title] = parseFileName(filename);

  return {
    _id: filename,
    category: frontMatter.attributes.category || "Other",
    title: frontMatter.attributes.title || title.slice(0, -3).replaceAll("-", " "),
    thumbnail: frontMatter.attributes.thumbnail || "assets/thumbs/640x360.png",
    link: frontMatter.attributes.link || "",
    description: frontMatter.body,
    hidden: false,
    published: published,
  };
}

function compilePages(fileNamePrefix, contentDir, readFunction, itemsPerPage = 10) {
  const content = fs
    .readdirSync(contentDir)
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => readFunction(filename))
    .sort((a, b) => new Date(b.published) - new Date(a.published));

  const paginatedContent = [];
  for (let i = 0; i < content.length; i += itemsPerPage) {
    paginatedContent.push(content.slice(i, i + itemsPerPage));
  }

  paginatedContent.forEach((chunk, index) => {
    fs.writeFileSync(
      path.join(__dirname, `/src/assets/${fileNamePrefix}-${index}.json`),
      JSON.stringify({
        results: chunk,
        total: content.length,
        page: index,
      })
    );
  });
}

compilePages("projects", projectsDirectory, readProject);
compilePages("posts", postsDirectory, readPost);
