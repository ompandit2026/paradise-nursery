const makePlant = (id, name, category, price, description, photo) => ({
  id, name, category, price, description,
  image: `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=700&q=80`
});

export const plants = [
  makePlant(1, 'Monstera Deliciosa', 'Air Purifying', 899, 'A statement plant with iconic split leaves.', 'photo-1614594975525-e45190c55d0b'),
  makePlant(2, 'Snake Plant', 'Air Purifying', 499, 'A resilient upright plant for a fresh-looking room.', 'photo-1593691509543-c55fb32e5cee'),
  makePlant(3, 'Peace Lily', 'Air Purifying', 649, 'Elegant deep-green leaves and graceful white blooms.', 'photo-1593691509543-c55fb32e5cee'),
  makePlant(4, 'Areca Palm', 'Air Purifying', 799, 'A tropical palm that brings softness to interiors.', 'photo-1586500036706-41963de24d8b'),
  makePlant(5, 'Rubber Plant', 'Air Purifying', 749, 'Glossy leaves make this a striking indoor favourite.', 'photo-1501004318641-b39e6451bec6'),
  makePlant(6, 'Golden Pothos', 'Air Purifying', 399, 'An adaptable trailing plant with golden-green leaves.', 'photo-1497250681960-ef046c08a56e'),
  makePlant(7, 'Jade Plant', 'Low Maintenance', 349, 'A compact succulent with plump, rounded leaves.', 'photo-1509423350716-97f9360b4e09'),
  makePlant(8, 'ZZ Plant', 'Low Maintenance', 599, 'Glossy foliage and excellent tolerance of low light.', 'photo-1632207691143-643e2e2b1a2d'),
  makePlant(9, 'Aloe Vera', 'Low Maintenance', 299, 'A sculptural succulent that enjoys bright light.', 'photo-1509423350716-97f9360b4e09'),
  makePlant(10, 'Spider Plant', 'Low Maintenance', 329, 'Arching striped leaves look lovely on shelves.', 'photo-1572688484438-313a6e50c333'),
  makePlant(11, 'Chinese Evergreen', 'Low Maintenance', 549, 'Decorative patterned foliage for indoor spaces.', 'photo-1501004318641-b39e6451bec6'),
  makePlant(12, 'Cast Iron Plant', 'Low Maintenance', 699, 'A hardy plant with broad, deep-green leaves.', 'photo-1485955900006-10f4d324d411'),
  makePlant(13, 'Calathea Orbifolia', 'Decorative', 899, 'Large rounded leaves with beautiful silver-green stripes.', 'photo-1597055181300-e3633a917c4b'),
  makePlant(14, 'Bird of Paradise', 'Decorative', 1299, 'Bold tropical leaves create a dramatic focal point.', 'photo-1598880940080-ff9a29891b85'),
  makePlant(15, 'Fiddle Leaf Fig', 'Decorative', 1199, 'Large violin-shaped leaves add height and style.', 'photo-1509423350716-97f9360b4e09'),
  makePlant(16, 'Anthurium', 'Decorative', 799, 'Heart-shaped leaves and vivid long-lasting flowers.', 'photo-1497250681960-ef046c08a56e'),
  makePlant(17, 'String of Pearls', 'Decorative', 499, 'A cascading succulent with bead-like foliage.', 'photo-1501004318641-b39e6451bec6'),
  makePlant(18, 'Fittonia', 'Decorative', 279, 'A compact plant with striking veined leaves.', 'photo-1485955900006-10f4d324d411')
];
