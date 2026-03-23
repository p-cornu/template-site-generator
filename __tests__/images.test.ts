import { HOTEL_DATA, ROOMS_DATA, GALLERY_PHOTOS, SPA_SERVICES } from '../src/content/hotel-belvedere';

const ALLOWED_DOMAINS = ['images.unsplash.com'];

function collectAllUrls(): string[] {
  const urls: string[] = [];

  // HOTEL_DATA images
  Object.values(HOTEL_DATA.images).forEach(url => {
    if (typeof url === 'string') urls.push(url);
  });

  // ROOMS_DATA
  ROOMS_DATA.forEach(room => urls.push(room.imageUrl));

  // GALLERY_PHOTOS
  GALLERY_PHOTOS.forEach(photo => urls.push(photo.url));

  // SPA_SERVICES
  SPA_SERVICES.forEach(service => {
    if (service.imageUrl) urls.push(service.imageUrl);
  });

  return urls;
}

describe('Image URLs — Regression Guard', () => {
  let urls: string[];

  beforeAll(() => {
    urls = collectAllUrls();
  });

  test('has at least 10 image URLs defined', () => {
    expect(urls.length).toBeGreaterThanOrEqual(10);
  });

  test('no URL is empty, null, or undefined', () => {
    urls.forEach(url => {
      expect(url).toBeTruthy();
      expect(typeof url).toBe('string');
      expect(url.trim().length).toBeGreaterThan(0);
    });
  });

  test('all URLs use HTTPS protocol', () => {
    urls.forEach(url => {
      expect(url).toMatch(/^https:\/\//);
    });
  });

  test('all URLs are from allowed image domains', () => {
    urls.forEach(url => {
      const { hostname } = new URL(url);
      expect(ALLOWED_DOMAINS).toContain(hostname);
    });
  });

  test('all URLs include a width parameter for optimization', () => {
    urls.forEach(url => {
      expect(url).toMatch(/[?&]w=\d+/);
    });
  });

  test('all URLs include a quality parameter', () => {
    urls.forEach(url => {
      expect(url).toMatch(/[?&]q=\d+/);
    });
  });

  test('all Unsplash URLs contain a valid photo ID', () => {
    urls.forEach(url => {
      if (url.includes('unsplash.com')) {
        expect(url).toMatch(/photo-[a-zA-Z0-9_-]+/);
      }
    });
  });

  test('GALLERY_PHOTOS have correct shape', () => {
    GALLERY_PHOTOS.forEach(photo => {
      expect(photo.id).toBeTruthy();
      expect(photo.url).toBeTruthy();
      expect(photo.alt).toBeTruthy();
      expect(photo.width).toBeGreaterThan(0);
      expect(photo.height).toBeGreaterThan(0);
      expect(['rooms', 'restaurant', 'spa', 'exterior', 'pool']).toContain(photo.category);
    });
  });
});
