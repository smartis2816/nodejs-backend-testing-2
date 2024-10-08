import { PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;

  beforeEach(() => {
    postsService = new PostsService();
  });

  describe('.findMany', () => {
    const posts = [
      {text: 'Post 1'},
      {text: 'Post 2'},
      {text: 'Post 3'},
      {text: 'Post 4'},
    ];

    beforeEach(() => {
      posts.forEach((post) => postsService.create(post));
    });

    it('should return all posts if called without options', () => {
      // реализуйте тест-кейс
      expect(postsService.findMany()).toEqual(posts);
    });

    it('should return correct posts for skip and limit options', () => {
      // реализуйте тест-кейс
      const expectedPosts = postsService.findMany({skip: 1, limit: 2});
      expect(expectedPosts).toEqual(posts.slice(1, 3));
    });

    // реализуйте недостающие тест-кейсы
    it('should return correct posts for skip options', () => {
      expect(postsService.findMany({skip: 1})).toEqual(posts.slice(1));
    });

    it('should return correct posts for limit options', () => {
      expect(postsService.findMany({limit: 2})).toEqual(posts.slice(0, 2));
    });
  });
});
