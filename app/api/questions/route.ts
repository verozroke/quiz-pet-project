/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET all questions
export async function GET() {
  try {
    const questions = await prisma.question.findMany({
      include: {
        correctAnswer: true,
        variants: true,
      },
    });
    return NextResponse.json(questions);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch questions' }, { status: 500 });
  }
}

// POST a new question
export async function POST(request: Request) {
  try {
    const { question, correctAnswer, variants, quizId } = await request.json();

    const newQuestion = await prisma.question.create({
      data: {
        question,
        correctAnswer: {
          create: correctAnswer,
        },
        variants: {
          create: variants,
        },
        quizId,
      },
      include: {
        correctAnswer: true,
        variants: true,
      },
    });

    return NextResponse.json(newQuestion, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create question' }, { status: 500 });
  }
}

// PUT (update) a question
export async function PUT(request: Request) {
  try {
    const { id, question, correctAnswer, variants } = await request.json();

    const updatedQuestion = await prisma.question.update({
      where: { id },
      data: {
        question,
        correctAnswer: {
          update: correctAnswer,
        },
        variants: {
          deleteMany: {}, // Delete existing variants
          create: variants, // Add new variants
        },
      },
      include: {
        correctAnswer: true,
        variants: true,
      },
    });

    return NextResponse.json(updatedQuestion);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update question' }, { status: 500 });
  }
}

// DELETE a question
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();

    await prisma.question.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Question deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete question' }, { status: 500 });
  }
}