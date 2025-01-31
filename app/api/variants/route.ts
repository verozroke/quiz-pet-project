/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET all variants
export async function GET() {
  try {
    const variants = await prisma.variant.findMany();
    return NextResponse.json(variants);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch variants' }, { status: 500 });
  }
}

// POST a new variant
export async function POST(request: Request) {
  try {
    const { letter, text, questionId } = await request.json();

    const newVariant = await prisma.variant.create({
      data: {
        letter,
        text,
        questionId,
      },
    });

    return NextResponse.json(newVariant, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create variant' }, { status: 500 });
  }
}

// PUT (update) a variant
export async function PUT(request: Request) {
  try {
    const { id, letter, text } = await request.json();

    const updatedVariant = await prisma.variant.update({
      where: { id },
      data: { letter, text },
    });

    return NextResponse.json(updatedVariant);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update variant' }, { status: 500 });
  }
}

// DELETE a variant
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();

    await prisma.variant.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Variant deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete variant' }, { status: 500 });
  }
}