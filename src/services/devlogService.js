import { supabase } from '../lib/supabase'

// ambil semua log publik
export async function getPublicLogs() {
  const { data, error } = await supabase
    .from('dev_logs')
    .select('*')
    .eq('is_public', true)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

// tambah log baru
export async function addLog({ title, content, is_public = true }) {
  const { data, error } = await supabase
    .from('dev_logs')
    .insert([{ title, content, is_public }])
    .select()

  if (error) throw error
  return data[0]
}
