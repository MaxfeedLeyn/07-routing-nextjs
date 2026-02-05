"use client";
import Modal from "@/components/Modal/Modal";
import css from "./NotePreview.module.css";
import { useState } from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { fetchNoteById } from "@/lib/api";

function NotePrewiewClient() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  const {
    data: note,
  } = useQuery({
    queryKey: ["notes", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });
  return (
    <Modal onClose={handleClose}>
      <div className={css.container}>
        {note && (
          <div className={css.item}>
            <div className={css.header}>
              <h2>{note.title}</h2>
            </div>
            <div className={css.content}>{note.content}</div>
            <div className={css.date}>{note.createdAt}</div>
          </div>
        )}
        <button className={css.backBtn} onClick={handleClose}>Close</button>
      </div>
    </Modal>
  );
}

export default NotePrewiewClient;
