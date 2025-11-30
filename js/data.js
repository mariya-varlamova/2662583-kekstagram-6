import {getRandomArrayElement, getRandomInteger, createCommentId} from './util.js';
import {NAMES, MESSAGES, DESCRIPTIONS} from './enum.js';

const generateCommentId = createCommentId();

const generateComment = () => {
  const countMessage = getRandomInteger(1,2);
  const randomAvatar = getRandomInteger(1, 6);
  const randomName = getRandomArrayElement(NAMES);

  let message = '';
  if (countMessage === 1){
    message = getRandomArrayElement(MESSAGES);
  }
  else{
    const firstMessage = getRandomArrayElement(MESSAGES);
    let secondMessage = getRandomArrayElement(MESSAGES);
    while (secondMessage === firstMessage){
      secondMessage = getRandomArrayElement(MESSAGES);
    }
    message = `${firstMessage} ${secondMessage}`;
  }
  return {
    id: generateCommentId(),
    avatar: `img/avatar-${randomAvatar}.svg`,
    message: message,
    name: randomName,
  };
};

const createComments = () => {
  const countComments = getRandomInteger(0, 30);
  return Array.from({length: countComments}, generateComment);
};


const createPost = (index) => {
  const randomDescription = getRandomArrayElement(DESCRIPTIONS);
  const randomLikes = getRandomInteger(15, 200);
  const comments = createComments();
  return {
    id: index + 1,
    url: `photos/${index + 1}.jpg`,
    description: randomDescription,
    likes: randomLikes,
    comments: comments,
  };
};

const createPosts = () => Array.from({length: 25}, (_, index) => createPost(index));

export {createPosts};
