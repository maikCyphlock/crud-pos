import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function getUsers () {
  return await prisma.employee.findMany()
}
async function createUser (data: any) {
  return await prisma.employee.create({
    data
  })
}

async function getUser (id: any) {
  return await prisma.employee.findUnique({
    where: { id }
  })
}

async function updateUser (id: any, data: any) {
  return await prisma.employee.update({
    where: { id },
    data
  })
}

async function deleteUser (id: any) {
  return await prisma.employee.delete({
    where: { id }
  })
}

export {
  createUser,
  getUser,
  updateUser,
  deleteUser, getUsers
}
