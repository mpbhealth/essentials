import { StateManagement } from '@/components/admin/StateManagement'

export default function AdminPage() {
  return (
    <main className='min-h-dvh bg-slate-50'>
      <StateManagement isAdmin={true} />
    </main>
  )
}

export const metadata = {
  title: 'Admin - State Management | MPB Health',
  description: 'Administrative interface for managing state availability',
  robots: 'noindex, nofollow'
}