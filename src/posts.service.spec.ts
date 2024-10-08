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
      expect(postsService.findMany().map(item => ({text: item.text}))).toEqual(posts)
    });

    it('should return correct posts for skip and limit options', () => {
      // реализуйте тест-кейс
      expect(postsService.findMany({skip: 2, limit: 2}).map(item => ({text: item.text}))).toEqual(posts.slice(-2))
    });

    // реализуйте недостающие тест-кейсы
    it('should return correct posts for skip options', () => {
      expect(postsService.findMany({skip: 1}).map(item => ({text: item.text}))).toEqual(posts.slice(-3))
    });

    it('should return correct posts for limit options', () => {
      expect(postsService.findMany({limit: 2}).map(item => ({text: item.text}))).toEqual(posts.slice(0,2))
    });
  });
});
