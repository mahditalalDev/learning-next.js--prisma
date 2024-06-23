import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/utils/db';
/**
 * @method POST
 * @route ~/api/users/register
 * @description add new user  ==>create new account
 * @access public
 */
