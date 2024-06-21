import { NextRequest, NextResponse } from 'next/server';

import { articles } from '@/utils/data';

/**
 * @method GET
 * @route ~/api/articles
 * @description get all articles
 * @access public
 */

export function GET(reg: NextRequest) {
  return NextResponse.json(articles, { status: 200 });
}
