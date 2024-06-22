import { NextRequest, NextResponse } from 'next/server';
import { articles } from '@/utils/data';
import { UpdateArticleDto } from '@/utils/dtos';

interface SingleArticleParam {
  params: { id: number };
}
/**
 * @method GET
 * @route ~/api/articles/:id
 * @description get single article
 * @access public
 */

export function GET(reg: NextRequest, props: SingleArticleParam) {
  const article = articles.find((a) => {
    return a.id == props.params.id;
  });
  if (!article) {
    return NextResponse.json({ message: 'article not found' }, { status: 404 });
  }
  return NextResponse.json(article, { status: 200 });
}
/**
 * @method PUT
 * @route ~/api/articles/:id
 * @description update single article
 * @access public
 */

export async function PUT(reg: NextRequest, props: SingleArticleParam) {
  const body = (await reg.json()) as UpdateArticleDto;
  console.log(body);
  const article = articles.find((a) => {
    return a.id == props.params.id;
  });
  if (!article) {
    return NextResponse.json({ message: 'article not found' }, { status: 404 });
  }
  return NextResponse.json({ message: 'article updated' }, { status: 200 });
}
/**
 * @method DELETE
 * @route ~/api/articles/:id
 * @description delete single article
 * @access public
 */

export async function DELETE(reg: NextRequest, props: SingleArticleParam) {
  const article = articles.find((a) => {
    return a.id == props.params.id;
  });
  if (!article) {
    return NextResponse.json({ message: 'article not found' }, { status: 404 });
  }
  return NextResponse.json({ message: 'articles deleted' }, { status: 200 });
}
