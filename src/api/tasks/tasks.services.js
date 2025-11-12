import prisma from "../../config/prisma.js";

// create

// BENAR
export const createTask = (title, description, user_id) => {
  return prisma.task.create({
    data: {
      title,
      description: description,
      user: {
        connect: { id: user_id },
      },
    },
  });
};
export const updateTask = async (id, title, description) => {
  const task = await prisma.task.update({
    where: {
      id,
    },
    data: {
      title,
      description: description || null,
    },
  });

  return task;
};

export const deleteTask = async (id) => {
  await prisma.task.delete({ where: { id } });
  return { id };
};

export const getTask = async (idUser) => {
  const tasks = await prisma.task.findMany({
    where: {
      user_id: idUser,
    },
    select: {
      id: true,
      title: true,
      description: true,
    },
  });

  return tasks;
};
