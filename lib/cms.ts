const delay = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(1), time);
  });
};

export const getAllPosts = async () => {
  await delay(3000);

  return new Array(10).fill(1).map((_, i) => {
    return {
      title: `this is post title ${i}`,
      slug: `this is slug post ${i}`,
      body: `this is a body  ${i}`,
    };
  });
};
