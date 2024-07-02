import React from 'react'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { verifyTokenForPage } from '@/utils/verifyToken';

const AdminCommentsTable = () => {
  const token = cookies().get("JwtToken")?.value;
  if (!token) redirect("/")
  const payload = verifyTokenForPage(token)
  if (!payload?.isAdmin) redirect("/")
  return (
    <div>AdminCommentsTable</div>
  )
}

export default AdminCommentsTable