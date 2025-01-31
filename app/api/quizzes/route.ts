/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET all quizzes
export async function GET() {
  try {
    const quizzes = await prisma.quiz.findMany({
      include: {
        questions: {
          include: {
            variants: true,
          },
        },
      },
    });
    return NextResponse.json(quizzes);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch quizzes' }, { status: 500 });
  }
}

// POST a new quiz
export async function POST(request: Request) {
  try {
    const { name, category, difficulty, questions } = await request.json();

    const newQuiz = await prisma.quiz.create({
      data: {
        name,
        category,
        difficulty,
        questions: {
          create: questions.map((question: any) => ({
            question: question.question,
            correctAnswer: {
              create: question.correctAnswer,
            },
            variants: {
              create: question.variants,
            },
          })),
        },
      },
      include: {
        questions: {
          include: {
            variants: true,
          },
        },
      },
    });

    return NextResponse.json(newQuiz, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create quiz' }, { status: 500 });
  }
}

// PUT (update) a quiz
export async function PUT(request: Request) {
  try {
    const { id, name, category, difficulty } = await request.json();

    const updatedQuiz = await prisma.quiz.update({
      where: { id },
      data: { name, category, difficulty },
    });

    return NextResponse.json(updatedQuiz);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update quiz' }, { status: 500 });
  }
}

// DELETE a quiz
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();

    await prisma.quiz.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Quiz deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete quiz' }, { status: 500 });
  }
}