import prisma from '../lib/prisma.js';

// Seed logic function
async function main() {
  console.log('Seeding started');

  
  // Rimozione eventuali dati esistenti
await prisma.book.deleteMany();
await prisma.category.deleteMany();

  // Creazione categorie
  const categoryNames = ['Fiction', 'Thriller', 'Fantasy', 'Travel', 'Philosophy', 'Comics'];

  await prisma.category.createMany({
    data: categoryNames.map(cat => ({
      name: cat,
      slug: cat.toLowerCase(),
    })),
  });

  console.log('Seeding finished');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1); // termina il processo nel terminale
  })
  .finally(async () => {
    await prisma.$disconnect(); // chiude connessione al DB
  });


