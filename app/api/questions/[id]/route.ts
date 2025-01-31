/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    const question = await prisma.question.findUnique({
      where: { id },
      include: {
        correctAnswer: true,
        variants: true,
      },
    });

    if (!question) {
      return NextResponse.json({ error: 'Question not found' }, { status: 404 });
    }

    return NextResponse.json(question);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch question' }, { status: 500 });
  }
}