import { HOTEL_DATA, ROOMS_DATA, TESTIMONIALS_DATA, RESTAURANT_MENU, SPA_SERVICES } from '../src/content/hotel-belvedere';

describe('Content data integrity', () => {
  test('HOTEL_DATA has required fields', () => {
    expect(HOTEL_DATA.name).toBeTruthy();
    expect(HOTEL_DATA.address).toBeTruthy();
    expect(HOTEL_DATA.phone).toBeTruthy();
    expect(HOTEL_DATA.email).toBeTruthy();
  });

  test('ROOMS_DATA has exactly 3 rooms', () => {
    expect(ROOMS_DATA).toHaveLength(3);
  });

  test('all rooms have required fields', () => {
    ROOMS_DATA.forEach(room => {
      expect(room.id).toBeTruthy();
      expect(room.slug).toBeTruthy();
      expect(room.imageUrl).toBeTruthy();
      expect(room.surface).toBeGreaterThan(0);
      expect(room.capacity).toBeGreaterThan(0);
      expect(room.priceFrom).toBeGreaterThan(0);
      expect(room.features.length).toBeGreaterThan(0);
    });
  });

  test('TESTIMONIALS_DATA has at least 3 testimonials', () => {
    expect(TESTIMONIALS_DATA.length).toBeGreaterThanOrEqual(3);
  });

  test('all testimonials have rating between 1 and 5', () => {
    TESTIMONIALS_DATA.forEach(t => {
      expect(t.rating).toBeGreaterThanOrEqual(1);
      expect(t.rating).toBeLessThanOrEqual(5);
    });
  });

  test('RESTAURANT_MENU has starters, mains, and desserts', () => {
    expect(RESTAURANT_MENU.starters.length).toBeGreaterThan(0);
    expect(RESTAURANT_MENU.mains.length).toBeGreaterThan(0);
    expect(RESTAURANT_MENU.desserts.length).toBeGreaterThan(0);
  });

  test('menu items have name, description, and valid price', () => {
    [...RESTAURANT_MENU.starters, ...RESTAURANT_MENU.mains, ...RESTAURANT_MENU.desserts].forEach(item => {
      expect(item.name).toBeTruthy();
      expect(item.description).toBeTruthy();
      expect(item.price).toBeGreaterThan(0);
    });
  });

  test('SPA_SERVICES has at least 4 services', () => {
    expect(SPA_SERVICES.length).toBeGreaterThanOrEqual(4);
  });

  test('all spa services have required fields', () => {
    SPA_SERVICES.forEach(service => {
      expect(service.id).toBeTruthy();
      expect(service.imageUrl).toBeTruthy();
      expect(service.duration).toBeGreaterThan(0);
      expect(service.price).toBeGreaterThan(0);
    });
  });
});
