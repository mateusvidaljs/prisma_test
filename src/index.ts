import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function executeQuery() {
  const { id } = await prisma.user.create({
    data: {
      name: 'Mateus',
      email: 'lololod@lololo.com',
      Post: {
        create: [
          { title: 'Post 1' }
        ]
      }
    }
  });

  console.log(id);
}

executeQuery()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.disconnect();
  });