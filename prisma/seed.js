import prisma from "../lib/prisma.js";
import { faker } from "@faker-js/faker";

// Seed logic function
async function main() {
  console.log("Seeding started");

  // Rimozione eventuali dati esistenti
  await prisma.book.deleteMany();
  await prisma.category.deleteMany();

  // Creazione categorie
  const categoryNames = [
    "Fiction",
    "Thriller",
    "Fantasy",
    "Travel",
    "Philosophy",
    "Comics",
  ];

  await prisma.category.createMany({
    data: categoryNames.map((cat) => ({
      name: cat,
      slug: cat.toLowerCase(),
    })),
  });

  // Lettura delle categorie appena create
  const categories = await prisma.category.findMany();
  console.log(categories);

  // Creazione libri
  const realBooks = [
    {
      title: "Love is a banana",
      author: "Paolo Nori",
      publisher: "Mondadori",
      publicationYear: 2026,
      category: "fiction",
      pageNumber: 216,
      price: 18.05,
    },
  ];

  const books = realBooks.map((book) => {
    const isbn = faker.commerce.isbn({ variant: 13, separator: "" });
    const slug = `${book.title.toLowerCase().replaceAll(" ", "-")}-${isbn}`;
    const category = categories.find((cat) => cat.slug === book.category);

    return {
      title: book.title,
      author: book.author,
      publisher: book.publisher,
      publicationYear: book.publicationYear,
      isbn,
      slug,
      categoryId: category.id,
      price: book.price,
      pageNumber: book.pageNumber,
      description: faker.lorem.paragraph(),
    };
  });

  await prisma.book.createMany({
    data: books,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1); // termina il processo nel terminale
  })
  .finally(async () => {
    await prisma.$disconnect(); // chiude connessione al DB
  });
