import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function getUsers() {
    return prisma.employee.findMany()
}
async function createUser(data: any) {
    return prisma.employee.create({
        data,
    })
}

async function getUser(id: any) {
    return prisma.employee.findUnique({
        where: { id },
    })
}

async function updateUser(id: any, data: any) {
    return prisma.employee.update({
        where: { id },
        data,
    })
}

async function deleteUser(id: any) {
    return prisma.employee.delete({
        where: { id },
    })
}

export {
    createUser,
    getUser,
    updateUser,
    deleteUser, getUsers
}
