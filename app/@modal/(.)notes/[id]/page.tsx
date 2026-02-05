import { fetchNoteById } from '@/lib/api';
import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";
import NotePrewiewClient from './NotePreiew.client';
type NotePrewiewProps = {
    params: Promise<{ id: string }>;
}

async function NotePrewiew({ params }: NotePrewiewProps) {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotePrewiewClient />
    </HydrationBoundary>
  );
}

export default NotePrewiew;